import React from "react";
import ReactDOM from "react-dom/client";
import { createClient, Provider as URQLProvider, defaultExchanges } from "urql";
import { graphExchange } from "@graphprotocol/client-urql";
import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from "@tanstack/react-query";
import * as GraphClient from "./.graphclient";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const subgraphQueryClient = createClient({
  url:
    process.env.REACT_APP_GQL_ENDPOINT ??
    "https://api.studio.thegraph.com/query/75483/increment-test/v0.0.1",
  exchanges: [...defaultExchanges, graphExchange(GraphClient)],
});

const reactQueryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <URQLProvider value={subgraphQueryClient}>
      <ReactQueryClientProvider client={reactQueryClient}>
        <App />
      </ReactQueryClientProvider>
    </URQLProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

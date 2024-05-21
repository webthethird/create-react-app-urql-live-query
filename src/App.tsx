import React from "react";
import { formatEther } from "ethers/lib/utils";
import logo from "./logo.svg";
import { usePastDayHourlyCandlesLiveQuery } from "./graphql/generated";
import "./App.css";

interface GenericCandle {
  openTimestamp: string;
  high: string;
  low: string;
  open: string;
  close: string;
  volume: string;
}

const formatShortDollarValue = (value: number): string => {
  if (value >= 10 ** 9)
    return `${value >= 0 ? "" : "-"}$${Math.abs(
      Math.floor(value / 10 ** 7) / 100
    ).toFixed(2)}b`;
  if (value >= 10 ** 6)
    return `${value >= 0 ? "" : "-"}$${Math.abs(
      Math.floor(value / 10 ** 4) / 100
    ).toFixed(2)}m`;
  if (value >= 10 ** 3)
    return `${value >= 0 ? "" : "-"}$${Math.abs(
      Math.floor(value / 10 ** 1) / 100
    ).toFixed(2)}k`;
  return `${value >= 0 ? "" : "-"}$${Math.abs(value).toFixed(2)}`;
};

const formatMarketVolume = (
  candles: GenericCandle[] | undefined
): string | undefined =>
  formatShortDollarValue(
    candles?.reduce(
      (acc, val) => acc + Math.abs(Number(formatEther(val.volume))),
      0
    ) ?? 0
  );

function App() {
  const [hourlyCandlesLiveQuery] = usePastDayHourlyCandlesLiveQuery({
    variables: {
      marketId: "0",
      from: Math.round(Date.now().valueOf() / 1000) - 24 * 60 * 60,
    },
  });

  const volume = React.useMemo(
    () =>
      formatMarketVolume(
        hourlyCandlesLiveQuery?.data?.market?.hourlyCandles as
          | GenericCandle[]
          | undefined
      ),
    [hourlyCandlesLiveQuery]
  );

  console.log(hourlyCandlesLiveQuery.data?.market?.hourlyCandles);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Market Volume: {volume} {volume ? "USD" : ""}
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

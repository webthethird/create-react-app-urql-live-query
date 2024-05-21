# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
It is meant to be a minimal reproducible example of a Webpack error that occurs when trying to use `@live` queries with the Graph Client + Urql. Based on the [Urql `@live` query example](https://github.com/graphprotocol/graph-client/tree/main/examples/urql-live-query) from the Graph Client repository, which uses Vite instead of Webpack.

## Environment Setup

Copy the `.env.example` file to `.env`. You can leave the values as they are, since all we really need is the GraphQL query endpoint.

## Installing dependencies

Install dependency packages using:

### `yarn install`

## Startup

Before starting the project you also need to generate additional type files needed for graphql queries to the subgraph

### `yarn codegen`

Then you can start the project using:

### `yarn start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Additional Scripts

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import App from "./App";
import {ApolloClient, InMemoryCache,gql} from "@apollo/client";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "@apollo/react-hooks";
import { createUploadLink } from "apollo-upload-client";

const link = createUploadLink({ 
  uri: "https://manifest-server-graphql.herokuapp.com/graphql"
 });
console.log(link);
const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});
client
  .query({
    query: gql`
      {
        users
      }`
  })
  .then(result => console.log(result));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

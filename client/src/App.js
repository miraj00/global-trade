import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { ApolloClient } from 'apollo-client';
import { setContext } from "@apollo/client/link/context";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import About from "./components/About";
import Team from "./components/Team";

import Main from "./components/Main"

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <ApolloProvider client={client}>
        <Router>
          <SideBar />
          <Switch>
            <Main />
            <Route path="/about" exact component={About} />
            <Route path="/team" component={Team} />
            {/* <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> */}
          </Switch>

          <Footer />
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;

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
import TextInput from "./components/TextInput";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import OrderHistory from "./pages/OrderHistory";
import Success from "./pages/Success";
import Detail from "./pages/Detail";


import { StoreProvider } from "./utils/GlobalState";

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
<TextInput />

function App() {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <ApolloProvider client={client}>
        <Router>
          <StoreProvider>
            <SideBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" exact component={About} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/products/:id" component={Detail} />
              <Route component={NoMatch} />
            </Switch>
          </StoreProvider>
          <Footer />
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
// import Navbar from "./components/NavBar";
import SideBar from "./components/SideBar"
import About from "./components/About";
import Team from "./components/Team"

// import SearchProducts from './pages/SearchProducts';
// import SavedProducts from './pages/SavedProducts';
// import Navbar2 from './components/Navbar2';


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';

import { StoreProvider } from "./utils/GlobalState";

import OrderHistory from './pages/OrderHistory';

import Success from "./pages/Success";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});






function App() {
  return (

    
    <ApolloProvider client={client}>
      <Router>
        <div>

        {/* <Navbar /> */}
        {/* <SideBar /> */}
    
        <StoreProvider>
          <Nav />
          
          <Switch>
            <Route path="/about" exact component= {About} />
            <Route path="/team"  component= {Team} />

            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/success" component={Success} />
            <Route exact path="/orderHistory" component={OrderHistory} />
            <Route exact path="/products/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
          </StoreProvider>
          
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}


//   return (
//       <Router>
//         <>
          
//           <SideBar />
          
//           {/* <Switch>
//             <Route path="/about" exact component= {About} />
//             <Route path="/team"  component= {Team} />
//                <Route exact path='/' component={SearchProducts} />
//                <Route exact path='/saved' component={SavedProducts} />
//                <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
//           </Switch>
//           {/* <Navbar /> */}
//           {/* <Navbar2 /> */} 
          
//           <Footer />
        
//         </>
//       </Router>
//   );
// }

export default App;
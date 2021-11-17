import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import SideBar from "./components/SideBar"
import About from "./components/About";
import Team from "./components/Team"
import WorldMap from "./components/WorldMap";

import SearchProducts from './pages/SearchProducts';
import SavedProducts from './pages/SavedProducts';
// import Navbar2 from './components/Navbar2';

function App() {
  return (
    <Router>
      <>

        <SideBar />
        <WorldMap/>

        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/team" component={Team} />
          <Route exact path='/' component={SearchProducts} />
          <Route exact path='/saved' component={SavedProducts} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
        {/* <Navbar /> */}
        {/* <Navbar2 /> */}
        <Footer />
      </>
    </Router>
  );
}

export default App;
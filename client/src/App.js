import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import SideBar from "./components/SideBar"
import About from "./components/About";
import Team from "./components/Team"

function App() {
  return (
      <Router>
        <>
          <SideBar />
          <Switch>
            <Route path="/about" exact component= {About} />
            <Route path="/team"  component= {Team} />
          </Switch>
          {/* <Navbar /> */}
          <Footer />
        </>
      </Router>
  );
}

export default App;
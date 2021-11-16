import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
      <Router>
        <>
          <Navbar />
          <Footer />
        </>
      </Router>
  );
}

export default App;

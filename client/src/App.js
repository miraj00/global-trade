import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import SideBar from "./components/SideBar"
import About from "./components/About";
import Team from "./components/Team"
import TextInput from "./components/TextInput"
import SearchProducts from './pages/SearchProducts';
import SavedProducts from './pages/SavedProducts';


function App() {
  return (
      <Router>
        <>
          
        <SideBar />
        <TextInput />
          <Switch>
            <Route exact path='/' component={SearchProducts} />
            <Route path="/about" exact component= {About} />
            <Route path="/team"  component= {Team} />
             <Route exact path='/saved' component={SavedProducts} />
               {/* <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> */}
          </Switch>
          <Footer />
        </>
      </Router>
  );
}

export default App;
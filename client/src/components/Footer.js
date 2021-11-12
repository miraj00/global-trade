import React  from 'react';
import About from '../components/About';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Privacy from '../components/Privacy';
import NavBar from '../components/Navbar';

import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function Footer() {
    return (

        <Router>
            
            <NavBar/>

            <Switch>
                <Route exact path="/"> <Redirect to="/about" /> </Route>
                <Route path="/About"> <About /> </Route>
                <Route path="/Team" component={Team} />
                <Route path="/Contact" component={Contact} /> 
                <Route path="/Privacy"> <Privacy /> </Route>
            </Switch>
        </Router>

        )
    }   

export default Footer;
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation.js/Navigation';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import SignIn from './Components/SignIn/SignIn';





export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/signin">
                        <SignIn></SignIn>
                    </Route>
                    <Route path="/home">
                    <Navigation></Navigation>
                    </Route>
                </Switch>
            </Router>
          
        </div>
    )
}


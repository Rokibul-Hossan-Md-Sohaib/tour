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
import Signup from './Components/Signup/Signup';
// import Profile from './Components/Profile/Profile';
import Register from './Components/Register/Register';






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
                    <Route path ="/signup" >
                        <Signup></Signup>
                    </Route>
                    <Route path ="/register" >
                     <Register></Register>
                    </Route>
                    <Route path="/">
                        <Navigation></Navigation>
                    </Route>
                   
                </Switch>
            </Router>

        </div>
    )
}


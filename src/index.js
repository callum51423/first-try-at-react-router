import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, NavLink, BrowserRouter as Router, Switch } from "react-router-dom";
import App from './App';
import Users from "./Users";
import contact from "./contact"
import Notfound from "./notfound"



const routing = (
    <Router>
        <div>
        <ul>
            <li>
                <NavLink exact activeClassName="active" to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/users">
                    Users
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/contact">
                    Contact
                </NavLink>
            </li>
        </ul>
            <hr />
            <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/Users" component={Users} />
            <Route path="/contact" component={contact} />
            <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
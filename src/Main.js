import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import CurrencyRates from "./CurrencyRates";

// import { Button } from 'elemental'

class Main extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <span className="nav-link" href="#">
                                            <NavLink to="/">
                                                <i className="fa fa-home" /> Home
                                            </NavLink>{" "}
                                            <span className="sr-only">(current)</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="panel bg-transparent">
                            
                            <Route exact path="/" component={CurrencyRates} class="active" />
                        </div>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default Main;

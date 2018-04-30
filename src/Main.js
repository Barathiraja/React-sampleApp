import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Friends from "./Friends";
import Messages from "./Messages";
import ReactDOM from "react-dom";

// import { Button } from 'elemental'

class Main extends Component {
    render() {
        return (
            <div>
                {/*<button className="btn btn-md btn-secondary">Primary</button>*/}

                <HashRouter>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            {/*<a className="navbar-brand"><NavLink to="/">UMA</NavLink></a>*/}
                            {/*<button className="navbar-toggler" type="button" data-toggle="collapse"*/}
                            {/*data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*/}
                            {/*aria-expanded="false" aria-label="Toggle navigation">*/}
                            {/*<span className="navbar-toggler-icon"></span>*/}
                            {/*</button>*/}

                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">
                                            <NavLink to="/">
                                                <i className="fa fa-home" /> Home
                                            </NavLink>{" "}
                                            <span className="sr-only">(current)</span>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link">
                                            <NavLink to="/friends">
                                                {" "}
                                                <i className="fa fa-flash" /> Moments
                                            </NavLink>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link">
                                            <NavLink to="/">
                                                {" "}
                                                <i className="fa fa-bell" /> Notifications
                                            </NavLink>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link">
                                            <NavLink to="/messages">
                                                <i className="fa fa-envelope" /> messages
                                            </NavLink>
                                        </a>
                                    </li>
                                </ul>

                                <form className="form-inline my-2 my-lg-0">
                                    <input
                                        className="form-control mr-sm-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <button
                                        className="btn btn-outline-success my-2 my-sm-0"
                                        type="submit"
                                    >
                                        Search
                                    </button>
                                </form>
                            </div>
                        </nav>
                        <div className="panel bg-transparent">
                            <Route exact path="/" component={Home} class="active" />
                            <Route path="/friends" component={Friends} class="active" />
                            <Route path="/messages" component={Messages} class="active" />
                            {/*<p>{this.state.response}</p>*/}
                        </div>
                    </div>
                </HashRouter>

                {/*<div className="panel panel-default bg-danger">*/}
                {/*<div className="panel-heading">This is Panel Heading!</div>*/}
                {/*<div className="panel-body">*/}
                {/*This is panel body*/}
                {/*</div>*/}
                {/*</div>*/}

                {/*<HashRouter>*/}

                {/*<div>*/}

                {/*<h1> </h1>*/}
                {/*<ul className="header">*/}
                {/*<li><NavLink to="/">Home</NavLink></li>*/}
                {/*<li><NavLink to="/stuff">Stuff</NavLink></li>*/}
                {/*<li><NavLink to="/contact">Contact</NavLink></li>*/}
                {/*</ul>*/}
                {/*<div className="content">*/}

                {/*<Route exact path="/" component={Home} class="active" />*/}
                {/*<Route path="/stuff" component={Stuff} class="active" />*/}
                {/*<Route path="/contact" component={Contact} class="active" />*/}

                {/*</div>*/}
                {/*</div>*/}
                {/*</HashRouter>*/}
            </div>
        );
    }
}

export default Main;

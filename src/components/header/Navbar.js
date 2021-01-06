import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div className="row " id="navbar-container">
                <div className="container-fluid"  >
                    <nav className="navbar navbar-expand-lg " id="navbar-wrap">
                        <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse text-center" id="navbarToggler">
                            <div className="col-md-2" id="brand-container">
                                <img src={"images/logo.png"} id="navbar-logo"></img>
                                <Link className="navbar-brand" id="brand-title" to="/">Travelholics</Link>
                            </div>
                            <div className="col-md-10" id="nav-links-wrap">
                                <div className="row">
                                    <div className="col-md-8" id="nav-links-module">
                                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0" >
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/destinations">Destinations</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link " to="/planatrip">Plan a Trip</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link " to="/bookatrip">Book a Trip</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link " to="/forum">Forum</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link " to="/about">About</Link>
                                            </li>
                                        </ul>

                                    </div>
                                    <div className="col-md-4 " id="nav-links-profile">
                                        <ul className="navbar-nav float-right mr-auto mt-2 mt-lg-0" >
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/signup">Sign up</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/login">Login</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
export default Navbar;
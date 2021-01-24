import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    return (
        <div className="row " id="navbar-container">
            <div className="container-fluid "  >
                <nav className="navbar navbar-expand-lg " id="navbar-wrap">
                    <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarToggler">
                        <div className="col-md-3" id="brand-container">
                            <Link className="navbar-brand" id="brand-title" to="/"><img alt="wait" src={"images/logo-png.png"} id="navbar-logo"></img></Link>
                        </div>
                        <div className="col-md-9" id="nav-links-wrap">
                            <div className="row">
                                <div className="col-md-8" id="nav-links-module">
                                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" >
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="activeLink" exact to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="activeLink" to="/destinations">Destinations</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link " activeClassName="activeLink" to="/planatrip">Plan a Trip</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link " activeClassName="activeLink" to="/bookatrip">Book a Trip</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link " activeClassName="activeLink" to="/forum">Forum</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link " activeClassName="activeLink" to="/about">About</NavLink>
                                        </li>
                                    </ul>

                                </div>
                                <div className="col-md-4 " id="nav-links-profile">
                                    <ul className="navbar-nav float-right mr-auto mt-2 mt-lg-0" >
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="activeLink" to="/signup">Sign up</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="activeLink" to="/login">Login</NavLink>
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

export default Navbar;

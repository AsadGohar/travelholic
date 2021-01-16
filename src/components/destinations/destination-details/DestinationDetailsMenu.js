import React from 'react';
import "./DestinationDetailsMenu.css"
import { Link } from 'react-router-dom';

function DestinationDetailsMenu() {
    return (
        <div className="container"  >
            <nav className="row d-flex " id="destination-details-menu-wrap">
                <div className="col-3 d-flex justify-content-center destination-details-menu-link">
                    <p className="destination-menu-heading mt-2 mb-2">ATTRACTIONS</p>
                </div>
                <div className="col-3 d-flex justify-content-center destination-details-menu-link">
                    <p className="destination-menu-heading mt-2 mb-2">ATTRACTIONS</p>
                </div>
                <div className="col-3 d-flex justify-content-center destination-details-menu-link">
                    <p className="destination-menu-heading mt-2 mb-2">ATTRACTIONS</p>
                </div>
                <div className="col-3 d-flex justify-content-center destination-details-menu-link">
                    <p className="destination-menu-heading mt-2 mb-2">ATTRACTIONS</p>
                </div>
            </nav>
        </div>
    );
}

export default DestinationDetailsMenu;








{/* <div className="row " id="navbar-container">
            <div className="container-fluid"  >
                <nav className="navbar navbar-expand-sm " id="navbar-wrap">
                    <div className="col" id="nav-links-wrap">
                        <div className="row">
                            <div className="col-md-12" id="nav-links-module">
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
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div> */}
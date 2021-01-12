import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer(){
    return (
        <div className="footer-wrap border border-primary">
            <div className="row container-fluid">
                <div className="col-md-4 " id="footer-intro">
                    <p className="footer-intro-text">Travelholics is one of the leading travelguide system and tour operating company in Pakistan. We aim to provide best guidance for travel enthusiastics across Pakistan.</p>
                    <span><i className="fa fa-map-marker" aria-hidden="true"></i>  Lahore, Pakistan</span>
                </div>
                <div className="col-md-4 border-left border-right" id="footer-shortcuts-links">
                    <div className="row d-flex justify-content-center">
                        <h6 style={{ fontWeight: "bold" }}>Quick Links</h6>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <ul style={{ listStyle: "none" }}>
                                <li>
                                    <Link className="Nav-link" to="/">Destinations</Link>
                                </li>
                                <li>
                                    <Link className="Nav-link" to="/">Plan a trip</Link>
                                </li>
                                <li>
                                    <Link className="Nav-link" to="/">Book a trip</Link>
                                </li>
                                <li>
                                    <Link className="Nav-link" to="/">Forum</Link>
                                </li>
                                <li>
                                    <Link className="Nav-link" to="/">About</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <ul style={{ listStyle: "none" }}>
                                <li>
                                    <Link className="Nav-link" to="/">Contact Info</Link>
                                </li>
                                <li>
                                    <Link className="Nav-link" to="/">Profile Settings</Link>
                                </li>
                                <li>
                                    <Link className="Nav-link" to="/">Privacy</Link>
                                </li>
                                <li>
                                    <Link className="Nav-link" to="/">Newsletter</Link>
                                </li>
                                <li>
                                    <Link className="Nav-link" to="/">Account Info</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" id="footer-social-div">
                    <div className="row d-flex justify-content-center">
                        <h6 style={{ fontWeight: "bold" }}>Follow us</h6>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <Link className="social-icons" to="/"><i className="social-icon-footer fab fa-facebook"></i></Link>
                        <Link className="social-icons" to="/"><i className="social-icon-footer fab fa-twitter-square"></i></Link>
                        <Link className="social-icons" to="/"><i className="social-icon-footer fab fa-instagram"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Footer;


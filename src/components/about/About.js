import React from 'react'
import "./About.css";
import { Link } from 'react-router-dom';


//About components imported here
import Searchbar from "../header/Searchbar.js"
import OurTeam from "./OurTeam.js"

function About() {
    return (
        <div className="container ">
            <Searchbar />
            <div className="container about-us-wrap bg-white">
                <div className="row  pt-2 ">
                    <div className="col-lg-5 about-us-description">
                        <div className="container" id="about-travelogic-div ">
                            <h2 className="text-center mt-5">About Travelogic</h2>
                            <p className="text-center">Travelogic is one of the leading travelguide system and tour operating company in Pakistan. We aim to provide best guidance for travel enthusiastics across Pakistan.</p>
                            <hr />
                            <h5 className="text-center">Join us here</h5>
                            <div className="row d-flex justify-content-center ">
                                <Link className="about-social-icons" to="/"><i className="social-icon-footer fab fa-facebook"></i></Link>
                                <Link className="about-social-icons" to="/"><i className="social-icon-footer fab fa-twitter-square"></i></Link>
                                <Link className="about-social-icons" to="/"><i className="social-icon-footer fab fa-instagram"></i></Link>
                            </div>

                            <hr />
                            <div className="msg-btn-div">
                                <Link to="/feedback"><button className="btn" id="send-message-btn">Send us a Message</button></Link>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2">{/*EMPTY DIV*/}</div>

                    <div className="col-lg-5  about-us-main-png d-flex justify-content-center">
                        <img className="d-block w-100 " src={"images/logo.png"} style={{ width: 250 }} alt="about travelogic"></img>
                    </div>
                    <hr style={{ width: "90%", marginTop: "40px" }} />
                </div>
                <OurTeam />
            </div>
        </div>
    );
}

export default About;



{/* <br/>
            <h2 className="text-center">About our team</h2>
            <div className="row our-team-wrap pt-4 bg-white">
                <h1>akjsdbkajbd</h1>
            </div> */}
import React from 'react'
import "./Destinations.css";
import { Link } from 'react-router-dom';

//react rating stars (installation required)
import ReactStars from "react-rating-stars-component";

//Destinations components imported here
import Searchbar from "../header/Searchbar.js"

function Destinations() {
    return (
        <div className="container">
            <Searchbar />
            <div className="row d-flex justify-content-center">
                <h2>Destinations</h2>
            </div>
            <div className="row destinations-wrap-div">
                <div className="row single-destination-wrap">
                    <div className="col-md-4 d-flex justify-content-center destination-display-img-div">
                        <img className=" w-100 destination-display-img" src={"images/demo2.jpg"}></img>
                    </div>
                    <div className="col-md-8 pl-5 mt-2 destination-short-intro-div">
                        <div className="row">
                            <h4 className="destination-title">Hunza</h4>
                            <span className="ml-2 mt-1"><ReactStars count={5} size={15} activeColor="#ffd700" /></span>
                            <button className="btn rate-destination-btn">Rate here</button>
                        </div>
                        <div className="row d-flex justify-content-start pr-5 destination-intro">
                            <p>Lorem ipsum dolor sit amet, sapien etiam, nunc amet Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse olor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet susp integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.</p>
                            <Link to="/destination-details"><button className="btn" id="destination-details-btn">Read More</button></Link>
                        </div>
                    </div>
                </div>
                
                <div className="row single-destination-wrap">
                    <div className="col-md-4 d-flex justify-content-center destination-display-img-div">
                        <img className=" w-100 destination-display-img" src={"images/demo4.jpg"}></img>
                    </div>
                    <div className="col-md-8 pl-5 mt-2 destination-short-intro-div">
                        <div className="row">
                            <h4 className="destination-title">Skardu</h4>
                            <span className="ml-2 mt-1"><ReactStars count={5} size={15} activeColor="#ffd700" /></span>
                            <button className="btn rate-destination-btn">Rate here</button>
                        </div>
                        <div className="row d-flex justify-content-start pr-5 destination-intro">
                            <p>Lorem ipsum dolor sit amet, sapien etiam, nunc amet Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse olor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet susp integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.</p>
                            <Link to="/destination-details"><button className="btn" id="destination-details-btn">Read More</button></Link>
                        </div>
                    </div>
                </div>

                <div className="row single-destination-wrap">
                    <div className="col-md-4 d-flex justify-content-center destination-display-img-div">
                        <img className=" w-100 destination-display-img" src={"images/demo5.jpg"}></img>
                    </div>
                    <div className="col-md-8 pl-5 mt-2 destination-short-intro-div">
                        <div className="row">
                            <h4 className="destination-title">Swat </h4>
                            <span className="ml-2 mt-1"><ReactStars count={5} size={15} activeColor="#ffd700" /></span>
                            <button className="btn rate-destination-btn">Rate here</button>
                        </div>
                        <div className="row d-flex justify-content-start pr-5 destination-intro">
                            <p>Lorem ipsum dolor sit amet, sapien etiam, nunc amet Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse olor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet susp integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.</p>
                            <Link to="/destination-details"><button className="btn" id="destination-details-btn">Read More</button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default Destinations;
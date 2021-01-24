import React from 'react'
import "./homepage.css"
import { Link } from 'react-router-dom';

//Importing bootstrap components from react bootstrap (installation required)
import Card from "react-bootstrap/Card";

//react rating stars (installation required)
import ReactStars from "react-rating-stars-component";

//Homepage components imported here
import Slider from "./Slider.js"
import Searchbar from "../header/Searchbar.js"


function Homepage() {
    return (
        <>
            <Slider />
            <Searchbar />
            <div className="container   homepage-wrap">

                {/*TOP DESTINATIONS SECTION STARTS HERE*/}
                <div className="row d-flex justify-content-center">
                    <h2>Top Destinations</h2>
                </div>
                <div className="row top-destinations-homepage">
                    <div className="col-md-4 d-flex justify-content-center top-destination-card-container">
                        <Card className="top-destination-card ">
                            <Link to="destination-details"><Card.Img className="top-destination-card-img" src="images/demo1.jpg" /></Link>
                            <Card.Body>
                                <div className="row d-flex justify-content-center">
                                    <Card.Title className="top-destination-title">Lahore</Card.Title>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <ReactStars count={5} size={15} activeColor="#ffd700" />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center top-destination-card-container">
                        <Card className="top-destination-card ">
                            <Link to="destination-details"><Card.Img className="top-destination-card-img" src="images/demo4.jpg" /></Link>
                            <Card.Body>
                                <div className="row d-flex justify-content-center">
                                    <Card.Title className="top-destination-title">Skardu</Card.Title>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <ReactStars count={5} size={15} activeColor="#ffd700" />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center top-destination-card-container">
                        <Card className="top-destination-card ">
                            <Link to="destination-details"><Card.Img className="top-destination-card-img" src="images/demo3.jpg" /></Link>
                            <Card.Body>
                                <div className="row d-flex justify-content-center">
                                    <Card.Title className="top-destination-title">Hunza</Card.Title>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <ReactStars count={5} size={15} activeColor="#ffd700" />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                {/*TOP DESTINATIONS SECTION ENDS HERE*/}
                <hr /><br />

                {/*TRIP PLANNER SECTION STARTS HERE*/}
                <div className="row d-flex justify-content-center">
                    <h2>Wanna Plan Something?</h2>
                </div>
                <div className="row trip-planner-homepage mt-4">
                    <div className="col-md-6 p-3">
                        <img className="d-block w-75" id="tripplanner-homepage-img" src={"images/tripplaner.png"}></img>
                    </div>
                    <div className="col-md-6 tripplanner-homepage-right-div">
                        <h3>Your best planner is right here</h3>
                        <h6>Just enter your destination and we'll show you the best budget and path for you</h6>
                        <br />
                        <Link to="/planatrip"><button className="btn" id="tripplanner-shortcut-btn">Plan here</button></Link>
                    </div>
                </div>

                <br /><hr /><br />

                {/*BOOK TRIP SECTION STARTS HERE*/}

                <div className="row d-flex justify-content-center mb-3">
                    <h2>Choose one of our Plans</h2>
                </div>

                <div class="container jumbotron jumbotron-fluid bg-dark rounded">
                    <div class="jumbotron-background">
                        <img src={"images/demo6.webp"} class="blur " />
                    </div>
                    <div class="container text-white pl-5">
                        <h2 class="display-4">Book your trips</h2>
                        <p class="lead">You can chose one of our pre organized trips to avoid any hastle.</p>
                        <hr class="my-4" />
                        <Link><button class="btn btn-lg" id="booktrip-shortcut-btn" >Book Here</button> </Link>
                    </div>
                </div>





            </div>
        </>
    );
}

export default Homepage;




{/* <div className="row booktrip-homepage mt-4">
<div className="col-md-7 booktrip-homepage-left-div">
    <h3>Maybe you can choose one of our pre-organized plan to avoid any hassle</h3>
    <br />
    <Link to="/bookatrip"><button className="btn" id="booktrip-shortcut-btn">Book here</button></Link>
</div>
<div className="col-md-5 pr-0 booktrip-homepage-right-div">
    <img className="d-block w-100" id="tripbook-homepage-img" src={"images/tripbook.jpg"}></img>
</div>
</div> */}
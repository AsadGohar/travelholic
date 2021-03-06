import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from '../axios';
import "./Destinations.css"

//react rating stars (installation required)
import ReactStars from "react-rating-stars-component";

//Destinations components imported here
import Searchbar from "../header/Searchbar.js"

const Destinations = () => {

    // Setting up states
    const [destinations, setDestinations] = useState([]);

    //Fetching data from database
    useEffect(() => {
        axios.get('/destinations')
            .then(res => {
                // console.log(res.data);
                setDestinations(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    console.log(destinations)

    //Mapping destination data
    const destinationItem = destinations.map(destination => (
        <div className="row single-destination-wrap" key={destination._id}>
            <div className="col-md-4 d-flex justify-content-center destination-display-img-div">
                <img alt={destination.title} className=" w-100 destination-display-img" src={destination.title_image}></img>
            </div>
            <div className="col-md-8 pl-5 mt-2 destination-short-intro-div">
                <div className="row">
                    <h4 className="destination-title">{destination.title}</h4>
                    <span className="ml-2 mt-1"><ReactStars count={5} size={15} activeColor="#ffd700" /></span>
                    <button className="btn rate-destination-btn">Rate here</button>
                </div>
                <div className="row d-flex justify-content-start pr-5 " id="destination-intro">
                    <p>{destination.introduction}</p>
                    <Link to={"/destinationsdetails/" + destination._id}><button className="btn" id="destination-details-btn">Read More</button></Link>
                </div>           
            </div>
        </div>
    ));


    return (
        <div className="container">
            <Searchbar />
            <div className="row d-flex justify-content-center">
                <h2>Destinations</h2>
            </div>
            <div className="row destinations-wrap-div">
                {destinationItem}
            </div>
        </div>
    );
}


export default Destinations;









// SPAM HERE
{/* <div className="row single-destination-wrap">
                    <div className="col-md-4 d-flex justify-content-center destination-display-img-div">
                        <img  alt="TBD" className=" w-100 destination-display-img" src={"images/demo4.jpg"}></img>
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
                </div> */}
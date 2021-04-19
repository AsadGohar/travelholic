import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from '../../axios';
import "./Destinations.css"


//Destinations components imported here
import Searchbar from "../header/Searchbar.js"
import DestinationRating from "./DestinationRating"

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

    // console.log(destinations)

    //Mapping destination data
    const destinationItem = destinations.map(destination => (
        <div className="row single-destination-wrap" key={destination._id}>
            <div className="col-md-4 d-flex justify-content-center destination-display-img-div">
                <img alt={destination.title} className=" w-100 destination-display-img mb-2" src={destination.title_image}></img>
            </div>
            <div className="col-md-8 pl-5 mt-2 destination-short-intro-div">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-start pl-0">
                        <h4 className="destination-title">{destination.title}</h4>
                        <div className="ml-1 mt-1">
                            <DestinationRating value={destination.rating} /> 
                        </div>
                        
                    </div>
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

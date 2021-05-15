import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios, { imagePath } from '../support-components/axios';
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

    destinations.sort((a, b) => (b.rating > a.rating) ? 1 : -1)

    // SORTING METHODS

    // const sortByRating = () => {
    //     destinations.sort((a, b) => (b.rating > a.rating) ? 1 : -1)
    // }

    // const sortByTitleName = (a, b) => {
    //     const title1 = a.title.toUpperCase();
    //     const title2 = b.title.toUpperCase();

    //     let comparison = 0;

    //     if (title1 > title2) {
    //         comparison = 1;
    //     } else if (title1 < title2) {
    //         comparison = -1;
    //     }
    //     return comparison;
    // }

    // const sortByName = () => {
    //     destinations.sort(sortByTitleName)
    // }



    //Mapping destination data
    const destinationItem = destinations.map(destination => (
        <div className="row single-destination-wrap" key={destination._id}>
            <div className="col-md-4 d-flex justify-content-center destination-display-img-div">
                <Link to={"/destinationsdetails/" + destination._id}>
                    <img alt={destination.title} className=" w-100 destination-display-img mb-2" src={`${imagePath}/images/${destination.title_image}`}></img>
                </Link>
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
                    <p dangerouslySetInnerHTML={{ __html: destination.introduction }}>
                        {/* {destination.introduction} */}
                    </p>
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
                {/* SORTING BUTTON */}
                {/* <div className="col-12 mt-2 d-flex justify-content-end">
                    <label for="destinationSort" className="sortBy mr-2">Sort By:</label>
                    <select className="sort-btn" name="destinationSort" id="destinationSort">
                        <option selected onClick={sortByRating}>Rating</option>
                        <option onClick={sortByName}>Name</option>
                    </select>
                </div> */}

                {destinationItem}
            </div>
        </div>
    );
}

export default Destinations;

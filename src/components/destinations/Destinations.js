import React, { useEffect, useState } from 'react'
import { Link, Route } from 'react-router-dom';
import axios, { imagePath } from '../support-components/axios';
import "./Destinations.css"


//Destinations components imported here
import Searchbar from "../header/Searchbar.js"
import DestinationRating from "./DestinationRating"
import Loader from '../support-components/Loader';
import Meta from '../support-components/Meta';
import Message from '../support-components/Message';


const Destinations = () => {

    // Setting up states
    const [destinations, setDestinations] = useState([]);
    const [keyword, setKeyword] = useState('')

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



    // Mapping destination data
    const destinationItem = destinations.filter(destination => destination.title.toLowerCase().includes(keyword.toLowerCase()))
        .map(destination => (
            <div className="row single-destination-wrap" key={destination._id}>
                <div className="col-md-4 d-flex justify-content-center destination-display-img-div">
                    <Link to={"/destinationsdetails/" + destination._id}>
                        <img alt={destination.title} className=" w-100 destination-display-img mb-2" src={`${imagePath}/images/${destination.title_image}`}></img>
                    </Link>
                </div>
                <div className="col-md-8 pl-5 mt-2 destination-short-intro-div">
                    <div className="row d-flex justify-content-start    ">
                        <div className="col-10 d-flex pl-0">
                            <h4 className="destination-title">{destination.title}</h4>
                            <div className="ml-2 mt-1">
                                <DestinationRating value={destination.rating} />
                            </div>
                        </div>
                        <div className="col-2">
                            <p className="mt-1" style={{ fontWeight: 'bold', fontSize: '18px' }}>{destination.rating.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-start pr-5 " id="destination-intro">
                        <p>
                            {destination.introduction.substring(0, 620)}...[click below to read more]
                        </p>
                        <Link to={"/destinationsdetails/" + destination._id}><button className="btn" id="destination-details-btn">Read More</button></Link>
                    </div>
                </div>
            </div>
        ));



    return (
        <div className="container">
            <Meta title="Destinations" keywords="destinations, journey, Pakistan, beuatiful, rating, top destinations, travel, photography, gilgit, hunza, lahore, chitral, islamabad, top places, beautiful places" />

            <Searchbar setKeyword={setKeyword} placeholder="Search your destination..." />

            <div className="row d-flex justify-content-center">
                <h2>Destinations</h2>
            </div>
            <div className="row destinations-wrap-div d-flex justify-content-center">
                {/* SORTING BUTTON */}
                {/* <div className="col-12 mt-2 d-flex justify-content-end">
                    <label for="destinationSort" className="sortBy mr-2">Sort By:</label>
                    <select className="sort-btn" name="destinationSort" id="destinationSort">
                        <option selected onClick={sortByRating}>Rating</option>
                        <option onClick={sortByName}>Name</option>
                    </select>
                </div> */}
                {destinations.length === 0 ? (
                    <Loader />
                ) : (
                    destinationItem
                )}
            </div>
        </div>
    );
}

export default Destinations;

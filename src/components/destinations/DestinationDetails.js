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
                <h2>Destination Title</h2>
            </div>
            
        </div>
    );
}


export default Destinations;
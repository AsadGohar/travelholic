import React from 'react'
import "./DestinationDetails.css";
import { Link } from 'react-router-dom';

//react rating stars (installation required)
import ReactStars from "react-rating-stars-component";

//Destinations components imported here
import Searchbar from "../../header/Searchbar.js"

//Importing  Destination details components
import DestinationDetailsIntro from "./DestinationDetailsIntro.js";
import DestinationDetailsMenu from "./DestinationDetailsMenu.js";

function Destinations() {
    return (
        <div className="container ">
            <Searchbar />
            <div className="container destination-details-wrap pt-4 pl-3 pr-3 pb-3">
                <DestinationDetailsIntro/>
                <DestinationDetailsMenu/>
            </div>
            
        </div>
    );
}


export default Destinations;
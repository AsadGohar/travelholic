import React from 'react'
import "./Destinations.css";

//Destinations components imported here
import Searchbar from "../header/Searchbar.js"

function Destinations() {
    return (
        <div className="container Destinations-wrap">
            <Searchbar />
            <div className=" row d-flex justify-content-center pt-50">
                <h1>DESTINATIONS</h1>
            </div>
        </div>
    );
}


export default Destinations;
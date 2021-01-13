import React from 'react'

//Homepage components imported here
import Slider from "./Slider.js"
import Searchbar from "../header/Searchbar.js"

function Homepage() {
    return (
        <div className="homepage-wrap">
            <Slider />
            <Searchbar />
        </div>
    );
}

export default Homepage;
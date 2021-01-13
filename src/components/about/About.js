import React from 'react'

//About components imported here
import Searchbar from "../header/Searchbar.js"

function About() {
    return (
        <div className="container about-wrap">
            <Searchbar />
            <div className=" border border-success d-flex justify-content-center pt-50">
                <h1 className="display-1">ABOUT US PAGE</h1>
            </div>
        </div>
    );
}

export default About;
import React from 'react'

//Newsletter components imported here
import Searchbar from "../header/Searchbar.js"

function Newsletter() {
    return (
        <div className="container newsletter-wrap">
            <Searchbar />
            <div className=" bg-white d-flex justify-content-center rounded mb-4" style={{padding: 60}}>
                <h4>There are currently no Newsletter. We'll notify you when published</h4>
            </div>
        </div>
    );
}

export default Newsletter;
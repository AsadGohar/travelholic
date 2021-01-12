import React from 'react'

//Forum components imported here
import Searchbar from "../header/Searchbar.js"

function Forum() {
    return (
        <div className="container Forum-wrap">
            <Searchbar />
            <div className=" border border-success d-flex justify-content-center pt-50">
                <h1 className="display-1">FORUM PAGE</h1>
            </div>
        </div>
    );
}


export default Forum;
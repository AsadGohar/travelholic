import React from 'react'
import "./Forum.css"

//Forum's components imported here
import Searchbar from "../header/Searchbar"
import TrendingTopics from "./TrendingTopics"
import TopQuestion from "./TopQuestion";

function Forum() {
    return (
        <div className="container">
            <Searchbar/>
            <TrendingTopics />
            <hr className="mt-2 mb-3 border-darken" style={{borderWidth:"2px"}}/>
            <TopQuestion/>
        </div>
    );
}


export default Forum;

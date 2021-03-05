import React from 'react'

//react rating stars (installation required)
import ReactStars from "react-rating-stars-component";

const DestinationDetailsIntro = (props) => {
    const destination = props.destination;

    return (
        <div className="container destination-intro-wrap pb-5" >
            <div className="row ">
                <div className="col d-flex justify-content-start">
                    <h3 className="destination-title">{destination.title}</h3>
                    <span className="ml-4 mt-2">4.3</span>
                    <span className="ml-2 mt-2"><ReactStars count={5} size={17} activeColor="#ffd700" /></span>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-5">
                    <img alt={destination.title} className=" w-100 destination-display-img" src={`/${destination.title_image}`}></img>
                </div>
                <div className="col-md-7 pl-5 mt-2 destination-intro-div">
                    <div className="row">
                        <h4 className="destination-introduction">Introduction</h4>
                    </div>
                    <div className="row d-flex justify-content-start pr-5 destination-intro">
                        <p>{destination.introduction}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationDetailsIntro;

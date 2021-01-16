import React from 'react'

//react rating stars (installation required)
import ReactStars from "react-rating-stars-component";

function DestinationDetailsIntro() {
    return (
        <div className="container destination-intro-wrap pb-5" >
            <div className="row ">
                <div className="col d-flex justify-content-start">
                    <h3 className="destination-title">Hunza</h3>
                    <span className="ml-4 mt-2">4.3</span>
                    <span className="ml-2 mt-2"><ReactStars count={5} size={17} activeColor="#ffd700" /></span>
                </div>
                <div className="d-flex justify-content-center">
                    <hr />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-5">
                    <img className=" w-100 destination-display-img" src={"images/demo2.jpg"}></img>
                </div>
                <div className="col-md-7 pl-5 mt-2 destination-intro-div">
                    <div className="row">
                        <h4 className="destination-introduction">Introduction</h4>
                    </div>
                    <div className="row d-flex justify-content-start pr-5 destination-intro">
                        <p>Lorem ipsum dolor sit amet, sapien etiam, nunc amet Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse olor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet susp integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationDetailsIntro;
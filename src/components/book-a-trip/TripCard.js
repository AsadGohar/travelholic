import React from 'react';
//import { Images } from 'react-bootstrap-icons';
import "./TripCard.css"
import { Link } from 'react-router-dom'


function TripCard() {
    return (
        <div className="trip-card">
            <div className="card d-flex justify-content-center">
                <div className="card-body">
                    <div className="card-img-actions d-flex">
                        <img src={"images/demo3.jpg"} className="card-img trip-image img-fluid" width="96" height="350" alt="" />
                    </div>
                </div>
                <div className="card-body bg-light text-center">
                    <div className="mb-2">
                        <h5 className="font-weight-semibold mb-3"> <a href="x" className="trip-title  mb-2" data-abc="true">5 days and 4 nights trip to Hunza from Lahore</a> </h5>
                    </div>
                    <h4 className="mb-1 font-weight-semibold text-danger trip-price">15,000 PKR</h4>
                    <div>
                        <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i>
                    </div>
                    <div className="text-muted mb-3">
                        34 reviews
                    </div>
                    <Link to="/tripdetails" className="btn bg-cart booktrip-btn d-flex w-100 justify-content-center">
                        <i className="fa fa-cart-plus mr-2 mt-1"></i> 
                        BOOK NOW
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TripCard;

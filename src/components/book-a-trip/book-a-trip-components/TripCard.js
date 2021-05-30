import React from 'react';
//import { Images } from 'react-bootstrap-icons';
import "./TripCard.css"
import { Link } from 'react-router-dom'
import TripRating from './TripRating'
import { imagePath } from '../../support-components/axios';


const TripCard = ({ trip }) => {
    return (
        <div className="trip-card">
            <div className="card d-flex justify-content-center">
                <div className="card-body">
                    <div className="card-img-actions d-flex" style={{height: '250px'}}>
                        <img src={`${imagePath}/trips/${trip.display_image}`} className="card-img trip-image img-fluid" alt="load" />
                    </div>
                </div>
                <div className="card-body bg-light text-center">
                    <div className="mb-2">
                        <h5 className="font-weight-semibold mb-3"> <a href="x" className="trip-title  mb-2" data-abc="true">{trip.title}</a> </h5>
                    </div>
                    <h4 className="mb-1 font-weight-semibold text-danger trip-price">Rs {trip.price}</h4>
                    <div>
                        <TripRating value={trip.rating} />
                    </div>
                    <div className="text-muted mb-3">
                        {trip.numReviews} Reviews
                    </div>
                    <Link to={`/tripdetails/${trip._id}`} className="btn bg-cart booktrip-btn d-flex w-100 justify-content-center">
                        <i className="fa fa-cart-plus mr-2 mt-1"></i>
                        BOOK NOW
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TripCard;

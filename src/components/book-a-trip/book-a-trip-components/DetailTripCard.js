import React from 'react'
import { imagePath } from '../../support-components/axios';
import "./DetailTripCard.css";

import TripRating from './TripRating';

const DetailTripCard = ({ trip }) => {
  return (
    <div>
      <div className="row mb-2 outer-div">
        <div className="card mx-4 mt-3 rounded card-border" >
          <div className="row no-gutters">
            <div id="img-div" className="col-md-3" >
              <img src={`${imagePath}/trips/${trip.display_image}`} className="card-img" alt="TBD"></img>
            </div>
            <div className="col mr-1" >
              <div className="card-body">
                <div className="row ml-3 " >
                  <div className="">
                    <span id="name">{trip.title}</span>
                    <div className="">
                      <div >
                        <div className="float-left mr-1">
                          <TripRating value={trip.rating} />
                        </div>
                        <span>({trip.numReviews})</span>
                      </div>
                    </div>
                    <p className="trip-description card-text mt-2">
                      {trip.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailTripCard

import React from 'react'
import './BookingDetail.css'

import Searchbar from "../header/Searchbar";
import DetailTripCard from "./DetailTripCard";
import DetailedItinerary from "./DetailedItinerary";
import Side from './Side'

import { Link } from 'react-router-dom'


function BookingDetail() {
  return (
    <div className="container ">
      <Searchbar />
      <div id="outer-div" style={{ overflow: "hidden" }} className="bg-white mb-3">
        <div id="side-comp" className="float-right"   >
          <Side />
        </div>
        <div className="p-3 float-left"  >
          <DetailTripCard />
          <div id="detail">
            <DetailedItinerary />
            <div className="ml-3">
              <h6>Attractions</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
              <h6>Service Provided</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
              <h6>Excludes</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>

              <Link id="book-btn" className="btn" to="/bookingform">Book this Trip</Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default BookingDetail

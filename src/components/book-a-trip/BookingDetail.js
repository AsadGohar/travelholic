import React, { useEffect } from 'react'
import './BookingDetail.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

//BookingDetail's component impoted here
import Searchbar from "../header/Searchbar";
import DetailTripCard from "./book-a-trip-components/DetailTripCard";
import DetailedItinerary from "./book-a-trip-components/DetailedItinerary";
import Side from './book-a-trip-components/Side'
import { listTripDetails } from '../../actions/tripActions';


const BookingDetail = ({ match, history }) => {
  const dispatch = useDispatch()

  const tripDetails = useSelector(state => state.tripDetails)
  const { loading, error, trip } = tripDetails

  useEffect(() => {
    dispatch(listTripDetails(match.params.id))
  }, [dispatch])

  const proceedToBookingHandler = () => {
    history.push(`/login?redirect=bookingform/${match.params.id}`)
  }


  return (
    <div className="container ">
      <Searchbar />
      <div id="outer-div" className="bg-white mb-3">
        <div id="side-comp" className="float-right"   >
          <Side />
        </div>
        <div className="p-3 float-left"  >
          <DetailTripCard trip={trip} />

          <div id="detail">
            <DetailedItinerary trip={trip} />

            <div className="ml-3">
              <h6>Attractions</h6>
              <p>{trip.attractions}</p>

              <h6>Service Provided</h6>
              <p>{trip.service_provided}</p>

              <h6>Excludes</h6>
              <p>{trip.excludes}</p>

              <div className='price-tag'><span><b>Price: </b>Rs {trip.price}/person</span></div>

              <button id="book-btn" type='button' onClick={proceedToBookingHandler} className="btn w-25 mt-4">Proceed to Booking</button>

              <Link className="back-to-trips-btn btn mt-4 ml-3" to="/bookatrip">Back</Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingDetail

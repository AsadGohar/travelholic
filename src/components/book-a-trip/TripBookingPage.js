import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./TripBookingPage.css"

//TripBookingPage components imported here
import Searchbar from "../header/Searchbar.js"
import BookingDetailsBox from "./book-a-trip-components/BookingDetailsBox"
import DetailedItinerary from "./book-a-trip-components/DetailedItinerary"
import { Link } from 'react-router-dom';
import { cancelTripForBooking, createBooking } from '../../actions/tripActions';

const TripBookingPage = ({ match, history }) => {
    const tripId = match.params.id
    const dispatch = useDispatch()

    const tripDetails = useSelector(state => state.tripDetails)
    const { trip } = tripDetails

    const bookingInfo = useSelector(state => state.bookingInfo)
    const { name, title, email, address, phoneNo, seats, total_price, city } = bookingInfo
    console.log(title)

    const bookingDetails = useSelector(state => state.bookingDetails)
    const { booking, success, error } = bookingDetails

    useEffect(() => {
        if (success) {
            history.push(`/bookingstatus/${booking._id}`)
        }
    }, [history, success, booking])

    const cancelTripBooking = () => {
        dispatch(cancelTripForBooking())
    }

    const confirmBookingHandler = () => {
        dispatch(createBooking({
            title: title,
            name: name,
            email: email,
            city: city,
            address: address,
            phoneNo: phoneNo,
            seats: seats,
            totalPrice: total_price,
        }))
    }

    return (
        <div className="container">
            <Searchbar />
            <div className="row d-flex justify-content-center">
                <h3 className="mb-3">Your Booking Details</h3>
            </div>
            <div className="container booking-details-wrap mb-4 bg-white">
                <div className="row">
                    <div className="col-md-6 booking-details-div pt-4 pl-4 ">
                        <BookingDetailsBox />
                        <div className="row mt-4">
                            <button className="btn confirm-booking-btn ml-3 mb-5" onClick={confirmBookingHandler}>
                                Confirm Booking
                            </button>
                            <Link className="btn btn-danger ml-2 mb-5" onClick={cancelTripBooking} to={`/tripdetails/${tripId}`}>Cancel</Link>
                        </div>

                    </div>
        
                    <div className="col-md-6 booking-details-div pt-2 pr-4 pb-5">
                        <div className="detailed-itinerery-box">
                            <DetailedItinerary trip={trip} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TripBookingPage;

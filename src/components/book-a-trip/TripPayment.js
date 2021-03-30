import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./TripPayment.css"

//TripPayment components imported here
import Searchbar from "../header/Searchbar.js"
import SelectPaymentBox from "./book-a-trip-components/SelectPaymentBox.js"
import BookingDetailsBox from "./book-a-trip-components/BookingDetailsBox.js"
import { Link } from 'react-router-dom';
import { cancelTripForBooking } from '../../actions/tripActions';

const TripPayment = ({ match }) => {
    const tripId = match.params.id
    const dispatch = useDispatch()

    const tripSelected = useSelector(state => state.tripSelected)

    useEffect(() => {

    }, [dispatch])

    const cancelTripBooking = () => {
        dispatch(cancelTripForBooking())
    }

    return (
        <div className="container">
            <Searchbar />
            <div className="row d-flex justify-content-center">
                <h3 className="mb-3">Add payment method</h3>
            </div>
            <div className="container trip-payment-wrap mb-4 bg-white">
                <div className="row">
                    <div className="col-md-5 select-payment-div pt-4 pl-4 ">
                        <SelectPaymentBox />
                        <div className="row mt-2">
                            <Link to="bookingconfirmation" className="btn confirm-booking-btn ml-3 mb-5">Confirm Booking</Link>
                            <Link  className="btn btn-danger ml-2 mb-5" onClick={cancelTripBooking} to={`/tripdetails/${tripId}`}>Cancel</Link>
                        </div>
                        
                    </div>
                    <div className="col-md-2">
                        {/*EMPTY DIV FOR RESPONSIVENESS*/}
                    </div>
                    <div className="col-md-5 booking-details-div pt-4 pr-4 pb-5">
                        <div className="booking-details-box">
                            <BookingDetailsBox />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TripPayment;

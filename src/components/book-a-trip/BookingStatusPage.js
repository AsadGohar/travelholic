import React, { useEffect } from 'react';
import "./BookingStatusPage.css"
import { Link } from 'react-router-dom';

//BookingStatusPage components imported here
import Searchbar from "../header/Searchbar.js"
import { useDispatch, useSelector } from 'react-redux';
import { getBookedTrip } from '../../actions/tripActions';
import Loader from "../support-components/Loader"
import PaymentBox from "./book-a-trip-components/SelectPaymentBox"


const BookingStatusPage = ({ match }) => {
    // const bookedTripID = match.params.id
    const dispatch = useDispatch()

    const bookedTrip = useSelector(state => state.bookedTrip.bookedTrip)

    useEffect(() => {
        if (!bookedTrip) {
            dispatch(getBookedTrip(match.params.id))
        }
    }, [dispatch, bookedTrip, match])




    return (
        <div className="container booking-status-wrap">
            <Searchbar />
            {bookedTrip ? (
                <div className="container booking-details-wrap mb-4 bg-white">
                    <div className="row d-flex justify-content-center pt-4 pl-2">
                        <h4 style={{ color: 'green' }}>Thank you for booking your trip with us</h4>
                    </div>
                    <p className='text-center'>Please proceed with the payment to confirm your booking</p>
                    <p className='text-center'><strong>Booking ID: </strong>{bookedTrip._id}</p>
                    <hr />

                    <div className="row">
                        <div className="col-md-7 booking-details-div pt-4 pl-4 mb-4 ">
                            <h5>Booking details</h5>
                            <table className="booking-details-table">
                                <tr className="trip-detail-row">
                                    <th>Title:</th>
                                    <td>{bookedTrip.title}</td>
                                </tr>
                                <tr className="trip-detail-row">
                                    <th>ID:</th>
                                    <td>{bookedTrip._id}</td>
                                </tr>
                                <tr className="trip-detail-row">
                                    <th>Name:</th>
                                    <td>{bookedTrip.name}</td>
                                </tr>
                                <tr className="trip-detail-row">
                                    <th>Address:</th>
                                    <td>{bookedTrip.address}</td>
                                </tr>
                                <tr className="trip-detail-row">
                                    <th>City:</th>
                                    <td>{bookedTrip.city}</td>
                                </tr>
                                <tr className="trip-detail-row">
                                    <th>Phone No:</th>
                                    <td>{bookedTrip.phoneNo}</td>
                                </tr>
                                <tr className="trip-detail-row">
                                    <th>Seats:</th>
                                    <td>{bookedTrip.seats}</td>
                                </tr>
                                <tr className="trip-detail-row">
                                    <th>Total Price:</th>
                                    <td>{bookedTrip.totalPrice}</td>
                                </tr>
                                {/* <tr className="trip-detail-row">
                                    <th>Payment Method:</th>
                                    <td>{bookedTrip.isPaid ? <p>{bookedTrip.paymentMethod}</p> : <p>Not Paid</p>}</td>
                                </tr> */}
                            </table>
                            <hr />
                            <div className="row d-flex justify-content-start pt-1 pl-3">
                                <h5>Payment</h5>
                            </div>
                            <div className="status-box">
                            {bookedTrip.isPaid ? <p style={{ color: 'green' }}><strong>PAID</strong></p> : <p style={{ color: 'red' }}>PENDING</p>}
                            </div>
                            {bookedTrip.isPaid ? <p>Paid through {bookedTrip.paymentMethod}</p> : <p></p>}
                            <hr/>

                            <div className="row d-flex justify-content-start pt-1 pl-3">
                                <h5>Booking Status</h5>
                            </div>
                            <div className="status-box">
                                {bookedTrip.booking_confirmed ? <p style={{ color: 'green' }}>CONFIRMED</p> : <p style={{ color: 'red' }}>PENDING</p>}
                            </div>
                        </div>

                        <div className="col-md-5 booking-details-div pt-4 pr-4 pb-5">
                            <PaymentBox />
                        </div>
                    </div>
                </div>
            ) : (
                <Loader />
            )}

        </div>
    )
}

export default BookingStatusPage;

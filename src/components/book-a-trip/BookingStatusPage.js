import React, { useEffect } from 'react';
import "./BookingStatusPage.css"

//BookingStatusPage components imported here
import Searchbar from "../header/Searchbar.js"
import { useDispatch, useSelector } from 'react-redux';
import { getBookedTrip } from '../../actions/bookingActions';
import Loader from "../support-components/Loader"
import Message from "../support-components/Message"
import PaymentBox from "./book-a-trip-components/SelectPaymentBox"
import PageNotFound from "../support-components/PageNotFound"


const BookingStatusPage = ({ match }) => {
    const dispatch = useDispatch()

    const userInfo = useSelector(state => state.userLogin.userInfo)

    const bookedTrip = useSelector(state => state.bookedTrip)
    const { loading, error, bookedTrip: booking } = bookedTrip

    useEffect(() => {
        dispatch(getBookedTrip(match.params.id))
    }, [])


    return (
        <div className="container booking-status-wrap">
            <Searchbar />
            {!bookedTrip ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : userInfo._id !== booking.user ? (
                <PageNotFound />
            ) : (
                <>
                    {booking ? (
                        <div className="container booking-details-wrap mb-4 bg-white">
                            {!booking.booking_confirmed ? (
                                <>
                                    {!booking.isPaid ? (
                                        <>
                                            <div className="row d-flex justify-content-center pt-4 pl-2">
                                                <h4 style={{ color: 'green' }}>Thank you for booking your trip with us</h4>
                                            </div>
                                            <p className='text-center'>Please proceed with the payment to confirm your booking</p>
                                        </>
                                    ) : (
                                        <>
                                            <div className="row d-flex justify-content-center pt-4 pl-2">
                                                <h4 style={{ color: 'green' }}>Your payment is complete</h4>
                                            </div>
                                            {booking.booking_confirmed ? (
                                                <p className='text-center'>Your booking has been confirmed</p>
                                            ) : (
                                                <p className='text-center'>Your booking will be confirmed shortly</p>
                                            )}
                                        </>
                                    )}
                                </>
                            ) : (
                                <>
                                    <div className="row d-flex justify-content-center pt-4 pl-2">
                                        <h4 style={{ color: 'green' }}>Your booking has been confirmed</h4>
                                    </div>
                                </>
                            )}
                            <p className='text-center'><strong>Booking ID: </strong>{booking._id}</p>
                            <hr />

                            <div className="row">
                                <div className="col-md-7 booking-details-div pt-4 pl-4 mb-4 ">
                                    <h5>Booking details</h5>
                                    <table className="booking-details-table">
                                        <tbody className="trip-detail-row">
                                            <th>Title:</th>
                                            <td>{booking.title}</td>
                                        </tbody>
                                        <tbody className="trip-detail-row">
                                            <th>ID:</th>
                                            <td>{booking._id}</td>
                                        </tbody>
                                        <tbody className="trip-detail-row">
                                            <th>Name:</th>
                                            <td>{booking.name}</td>
                                        </tbody>
                                        <tbody className="trip-detail-row">
                                            <th>Address:</th>
                                            <td>{booking.address}</td>
                                        </tbody>
                                        <tbody className="trip-detail-row">
                                            <th>City:</th>
                                            <td>{booking.city}</td>
                                        </tbody>
                                        <tbody className="trip-detail-row">
                                            <th>Phone No:</th>
                                            <td>{booking.phoneNo}</td>
                                        </tbody>
                                        <tbody className="trip-detail-row">
                                            <th>Seats:</th>
                                            <td>{booking.seats}</td>
                                        </tbody>
                                        <tbody className="trip-detail-row">
                                            <th>Total Price:</th>
                                            <td>{booking.totalPrice}</td>
                                        </tbody>
                                    </table>
                                    <hr />

                                    <div className="row d-flex justify-content-start pt-1 pl-3">
                                        <h5>Payment</h5>
                                    </div>
                                    <div className="status-box">
                                        {booking.isPaid ? <strong style={{ color: 'green' }}>PAID</strong> : <strong style={{ color: 'red' }}>PENDING</strong>}
                                    </div>
                                    {booking.isPaid ? <p>Paid through {booking.paymentMethod}</p> : <p></p>}
                                    <hr />

                                    <div className="row d-flex justify-content-start pt-1 pl-3">
                                        <h5>Booking Status</h5>
                                    </div>
                                    <div className="status-box">
                                        {booking.booking_confirmed ? <strong style={{ color: 'green' }}>CONFIRMED</strong> : <strong style={{ color: 'red' }}>PENDING</strong>}
                                    </div>
                                </div>

                                <div className="col-md-5 booking-details-div pt-4 pr-4 pb-5">
                                    <PaymentBox bookingId={match.params.id} />
                                </div>
                            </div>
                        </div>
                    ) : loading ? (
                        <Loader />
                    ) : (
                        <Message variant='danger'>{error}</Message>
                    )}
                </>
            )}


        </div>
    )
}

export default BookingStatusPage;
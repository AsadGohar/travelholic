import React from 'react';
import TripCard from './TripCard';
import "./TripPayment.css"

//TripPayment components imported here
import Searchbar from "../header/Searchbar.js"
import SelectPaymentBox from "./SelectPaymentBox.js"
import BookingDetailsBox from "./BookingDetailsBox.js"

function TripPayment() {
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
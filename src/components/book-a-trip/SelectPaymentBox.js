import React from 'react';
import "./SelectPaymentBox.css"
import { Link } from 'react-router-dom'


function SelectPaymentBox() {
    return (
        <div className="payment-box-wrap ml-3 pb-5">
            <div className="row">
                <h5 className="mb-3">Select Payment Method</h5>
            </div>
            <div className="row">
                <label><input type="radio" name="cod" className="cod-radio mr-1" />Cash on Delivery</label>
                <label className="ml-4"><input type="radio" name="jazz-cash" className="jazzcash-radio mr-1" />Jazz Cash</label>
            </div>
            <div className="row mt-3 d-flex justify-content-start">
                <div className="payment-details-box d-flex pl-4">
                    Payment APIs to be fetched here
                </div>
            </div>
            <div className="row mt-4">
                <Link to="bookingconfirmation" className="btn confirm-booking-btn">Confirm Booking</Link>
            </div>
        </div>
    )
}

export default SelectPaymentBox;

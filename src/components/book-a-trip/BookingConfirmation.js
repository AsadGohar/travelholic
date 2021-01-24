import React from 'react';
import "./BookingConfirmation.css"
import { Link } from 'react-router-dom';

//BookingConfirmation components imported here
import Searchbar from "../header/Searchbar.js"
import BookingDetailsBox from './BookingDetailsBox.js';

function BookingConfirmation() {
    return (
        <div className="container booking-confirmation-wrap">
            <Searchbar />
            <div className="container booking-confirmation-content  bg-white rounded mb-4">
                <div className="col">
                    <div className="row d-flex justify-content-center">
                        <h3>You trip has been confirmed</h3>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <span >You trip id is 292920</span>
                    </div>
                    <br/><br/><br/>
                    <div className="row d-flex justify-content-center">
                        <Link to="/"><button className="btn backtohome-btn">Go back to home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingConfirmation;
import React from 'react';
import "./BookingDetailsBox.css"

function BookingDetailsBox() {
    return (
        <div className="booking-details-box-wrap ml-3 mr-3">
            <div className="row ">
                <table className="booking-details-table">
                    <tr id="booking-detail-table-header">
                        <th colSpan='2'>Booking Details</th>                       
                    </tr>
                    <tr className="trip-detail-row">
                        <th>Trip:</th>
                        <td>lorem ipsum</td>                        
                    </tr>
                    <tr className="trip-detail-row">
                        <th>Trip Price:</th>
                        <td>lorem ipsum</td>                        
                    </tr>
                    <tr className="trip-detail-row">
                        <th>Customer Name:</th>
                        <td>lorem ipsum</td>                        
                    </tr>
                    <tr className="trip-detail-row">
                        <th>Customer Address:</th>
                        <td>lorem ipsum</td>                        
                    </tr>
                    <tr className="trip-detail-row">
                        <th>Seats:</th>
                        <td>lorem ipsum</td>                        
                    </tr>
                    <tr id="booking-detail-table-footer">
                        <th>TOTAL</th>
                        <td>15000 PKR</td>                        
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default BookingDetailsBox;
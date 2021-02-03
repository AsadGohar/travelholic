const express = require('express');
const BookingControllers = require('../Controllers/BookingControllers');
const router = express.Router();


// Create a Booking
router.post('/', BookingControllers.createBooking);

//Get all Bookings
router.get('/', BookingControllers.getBookings);

//Delete a Booking
router.delete('/:id', BookingControllers.deleteBooking);

module.exports = router;
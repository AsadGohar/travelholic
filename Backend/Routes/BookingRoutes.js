const express = require('express');
const BookingControllers = require('../Controllers/BookingControllers');
const router = express.Router();


// Create a Booking
router.post('/');

//Get all Bookings
router.get('/');

//Delete a Booking
router.delete('/:id');
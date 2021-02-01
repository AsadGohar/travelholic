const express = require('express');
const DestinationControllers = require('../Controllers/DestinationControllers');
const router = express.Router();


// Create a Destination
router.post('/');

//Get all Destinations
router.get('/');

//Get Destination by ID
router.get('/:id');

//Update a Destination
router.put('/:id');

//Delete a Destination
router.delete('/:id');
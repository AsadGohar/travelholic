const express = require('express');
const DestinationControllers = require('../Controllers/DestinationControllers');
const router = express.Router();

-
// Create a Destination
router.post('/', DestinationControllers.createDestination);

//Get all Destinations
router.get('/', DestinationControllers.getDestinations);

//Get Destination by ID
router.get('/:id', DestinationControllers.getDestinationById);

//Update a Destination
router.put('/:id', DestinationControllers.updateDestination);

//Delete a Destination
router.delete('/:id', DestinationControllers.deleteDestination);


module.exports = router;
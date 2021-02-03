const express = require('express');
const ReviewControllers = require('../Controllers/ReviewControllers');
const router = express.Router();


// Create a Review
router.post('/', ReviewControllers.createReview);

//Get all Reviews
router.get('/', ReviewControllers.getReviews);

//Get Review by ID
router.get('/:id', ReviewControllers.getReviewById);

//Delete a Review
router.delete('/:id', ReviewControllers.deleteReview);

module.exports = router;
import React, { useState } from 'react';
import axios from "../axios";
import "./RatingModal.css"
import Rating from "@material-ui/lab/Rating";

const RatingModal = (props) => {
    const [ratingValue, setRatingValue] = useState([]);

    const onChangeRating = (e) => {
        setRatingValue(currentRating => [...currentRating, e.target.value]);

    }
    const submitRating = (e) => {
        // setRatingValue(currentRating => [...currentRating, '']);

        const destinationObject = {
            rating: ratingValue
        };

        axios.patch('/destinations/' + props.destId, destinationObject)
        .then(res => console.log(res.data));

        console.log(ratingValue)

    }



    return (
        <div className="rating-destination-modal modal-content">
            <div className="modal-header">
                <h4 class="modal-title">Select your ratings</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body d-flex justify-content-center">
                <Rating
                    value={ratingValue}
                    name="Rating"
                    precision={0.5}
                    onChange={onChangeRating}
                    size="large"
                    max={10}
                    readOnly={false}
                />
            </div>
            <div className="modal-footar mt-4">
                <button type="submit" class="btn submit-rating-btn float-right mr-3 mb-2" onClick={submitRating} data-dismiss="modal">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default RatingModal;
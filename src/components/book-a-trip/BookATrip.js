import React, { useEffect } from 'react'
import "./BookATrip.css"

//BookATrip components imported here
import Searchbar from "../header/Searchbar.js"
import TripCard from "./book-a-trip-components/TripCard.js"
import Loader from "../support-components/Loader"

import { useDispatch, useSelector } from 'react-redux'
import { listTrips } from '../../actions/tripActions'

const BookATrip = () => {
    const dispatch = useDispatch()

    // bringing state pieces into compinents(alternate method of mapStateToProps)
    const tripList = useSelector(state => state.tripList)
    const { loading, trips, error } = tripList

    useEffect(() => {
        dispatch(listTrips())


    }, [dispatch])

    // console.log(trips);

    return (
        <div className="container BookATrip-wrap ">
            <Searchbar />
            <div className="row d-flex justify-content-center">
                <h2 className="mb-4">Trips by Travelogic</h2>
            </div>
            {loading ? (
                <Loader />
            ) : error ? (
                <div class="alert alert-danger alert-dismissible fade show">
                    <strong>Error!</strong> {error}
                    {/* <button type="button" class="close" data-dismiss="alert">&times;</button> */}
                </div>
            ) : (
                <div className="container pb-4 trip-cards-display-container bg-white ">
                    <div className="row">
                        {
                            trips.map(trip => (
                                <div className="col-md-4 trip-card-div" key={trip._id}>
                                    <TripCard trip={trip} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            )}
        </div>
    )
}

export default BookATrip;

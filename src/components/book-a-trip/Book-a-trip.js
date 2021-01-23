    import React from 'react'
    import "./Book-a-trip.css"

    //BookATrip components imported here
    import Searchbar from "../header/Searchbar.js"
    import TripCard from "./TripCard.js"

    function BookATrip() {
        return (
            <div className="container BookATrip-wrap ">
                <Searchbar />
                <div className="row d-flex justify-content-center">
                    <h2 className="mb-4">Trips by Travelholic</h2>
                </div>
                <div className="container pb-4 trip-cards-display-container bg-white ">
                <div className="row">
                    <div className="col-md-4 trip-card-div" >
                        <TripCard />
                    </div>
                    <div className="col-md-4 trip-card-div" >
                        <TripCard />
                    </div>
                    <div className="col-md-4 trip-card-div" >
                        <TripCard />
                    </div>
                </div>
                <div className="row trip-cards-display-container bg-white">
                    <div className="col-md-4 trip-card-div" >
                        <TripCard />
                    </div>
                    <div className="col-md-4 trip-card-div" >
                        <TripCard />
                    </div>
                    <div className="col-md-4 trip-card-div" >
                        <TripCard />
                    </div>
                </div>
                </div>
            </div>
        );
    }

    export default BookATrip;
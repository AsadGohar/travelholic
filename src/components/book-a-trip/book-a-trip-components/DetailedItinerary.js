import React, { useEffect } from 'react'
import "./DetailedItinerary.css";

import Day from "./Day";

const DetailedItinerary = ({ trip }) => {
  const itineraryArray = trip.itinerary

  let itineraryRender
  if (itineraryArray) {
    itineraryRender = itineraryArray.map(itn => {
      return (
        <Day itineraryDay={itn} key={itn._id} />
      )
    })
  }

  return (
    <div id="detail-div" className="m-3 p-3 row" >
      <h5 className="mb-3">Detailed Itinerary</h5>
      {itineraryRender}
    </div>
  )
}

export default DetailedItinerary

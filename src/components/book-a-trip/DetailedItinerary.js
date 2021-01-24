import React from 'react'
import Day from "./Day";

import "./detail-itinerary.css";

function DetailedItinerary() {
  return (
    <div id="detail-div" className="m-3 p-3" >
      <h5 className="mb-3">Detailed Itinerary</h5>
      <Day/>
      <Day/>
      <Day/>
      <Day/>
      
    </div>
  )
}

export default DetailedItinerary

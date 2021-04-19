import React from 'react'

const Day = ({ itineraryDay }) => {
  return (
    <div>
      <h6>Day {itineraryDay.day}:</h6>
      <p>
        {itineraryDay.description}
      </p>
    </div>
  )
}

export default Day

import React from 'react'
import TripPlanRow from "./TripPlanRow";
import './TripPlanTable.css'

function TripPlanTable (props) {
  const display = props.display
  const luxury = props.luxury
  const budget = props.budget
  const luxuryTotal = props.luxuryTotal
  const budgetTotal = props.budgetTotal
  const persons = props.persons
  return (
    <div className='mt-2'>
      {display ? 
        <div>
          <table className="table table-bordered table-dark">
          <thead className="table-dark">
            <tr>
              <th scope="col">Day</th>
              <th scope="col">Transport</th>
              <th scope="col">Hotel</th>
              <th scope="col">Total (rs)</th>
            </tr>
          </thead>
          <tbody>
            {
              budget.map(day=>{
                return (
                  <TripPlanRow key={day.day} persons={persons} data={day}/>
                )
              })
            }
          </tbody>
        </table>
        <h5>Budget Total : {budgetTotal} </h5>

        <table className=" mt-4 table table-bordered table-dark">
          <thead className="table-dark">
            <tr>
              <th scope="col">Day</th>
              <th scope="col">Transport</th>
              <th scope="col">Hotel</th>
              <th scope="col">Total (rs)</th>
            </tr>
          </thead>
          <tbody>
            {
              luxury.map(day=>{
                return (
                  <TripPlanRow key={day.day} persons={persons} data={day}/>
                )
              })
            }
          </tbody>
        </table>
        <h5>Luxury Total : {luxuryTotal}</h5>

        </div> :
        <div></div>
      }
     
    </div>
  )
}

export default TripPlanTable

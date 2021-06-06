import React from 'react'

function TripPlanRow(props) {
  const {day,transport,hotel,total}=props.data
  const persons=props.persons
  return (
    <tr>
      <th className="text-center" scope="row">{day}</th>
      <td>
        <table>
          <tbody>
            <tr className="mb-2">
              <td className="text-center">{transport.name}</td>  
            </tr>
            <tr className="mt-2">
              <td className="text-center">{persons*transport.fare}rs</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table>
          <tbody>
            <tr className="mb-2">
              <td className="text-center">{transport.name}</td>  
            </tr>
            <tr className="mt-2">
              <td className="text-center">{persons*transport.fare}rs</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td className="text-center">{persons*total}</td>
    </tr>
  )
}

export default TripPlanRow

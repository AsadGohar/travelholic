import React from 'react'

function TripPlanRow(props) {
  let fare
  const { day, transport, hotel, total } = props.data
  const persons = props.persons

  if (transport.fare === 0) {
    fare = '-'
  }
  else {

    fare = `${persons * transport.fare}rs`
  }
  return (
    <tr>
      <th className="text-center" scope="row">Day {day}</th>
      <td>
        <table className='table table-borderless'>
          <tbody>
            <tr className="mb-2">
              <td className="text-center">{transport.name}</td>
            </tr>
            <tr className="mt-2">
              <td className="text-center">{fare}</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table className='table table-borderless'>
          <tbody>
            <tr className="mb-2">
              <td className="text-center">{hotel.name}</td>
            </tr>
            <tr className="mt-2">
              <td className="text-center">{persons * hotel.rent}rs</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td className="text-center">{persons * total}</td>
    </tr>
  )
}

export default TripPlanRow

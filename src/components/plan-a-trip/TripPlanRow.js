import React,{useEffect,useState} from 'react'

function TripPlanRow(props) {

  const [fare,setFare] = useState('')
  const [multiply,setMultiply] = useState('')
  const { day, transport, hotel, total,route } = props.data
  const persons = props.persons
  const type = props.type
  
  useEffect(() => {

    if (transport.fare === 0) {
      setFare('-')
    }
    else {
      setFare(`${persons * transport.fare}rs`)
    }
  
    if (type==='luxury')
    {
      if (persons>1){

        if (persons%2===0){
          setMultiply(persons/2)
         }
         else  {
           setMultiply((persons/2)+1)
         }
      }
      else {
        setMultiply(persons)
      }
    }
    else {

      if (persons >2){

        if (persons%3===0){
          setMultiply(persons/3)
         }
         else  {
           setMultiply((persons/3)+1)
         }
      }
      else {
        setMultiply(persons)

      }
    }
  }, [persons,transport.fare,type])



  return (
    <tr>
      <th className="text-center" scope="row">Day {day}</th>
      <td>{route.destination_from}</td>
      <td>{route.destination_to}</td>
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
              <td className="text-center">{multiply * hotel.rent}rs</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td className="text-center">{multiply * total}</td>
    </tr>
  )
}

export default TripPlanRow

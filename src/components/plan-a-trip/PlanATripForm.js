//import bootstrap, { Button } from 'react-bootstrap'
import React,{useState,useEffect} from 'react'
import axios from "../support-components/axios";
import './PlanATripForm.css'
import { Formik, Form, Field, FieldArray } from 'formik';
import {Select} from '@material-ui/core'
import { toast } from 'react-toastify';

import TripPlanTable from './TripPlanTable'
import { set } from 'date-fns';


function PlanATripForm() {
	const [destinations,setDestinations] = useState([])
	const [displayTripTable,setDisplayTripTable] = useState(false)
	const [displayGenerateButton,setDisplayGenerateButton] = useState(false)
	const [displayEstimateButton,setDisplayEstimateButton] = useState(false)
	const [stops,setStops] = useState([])
	const [minHotel,setMinHotel] = useState(0)
	const [maxHotel,setMaxHotel] = useState(0)
	const [minTravel,setMinTravel] = useState(0)
	const [maxTravel,setMaxTravel] = useState(0)
	const [minTotal,setMinTotal] = useState(0)
	const [maxTotal,setMaxTotal] = useState(0)
	const [to,setTo] = useState('')
	const [from,setFrom] = useState('')
	const [departure,setDeparture] = useState('')
	const [final,setFinal] = useState('')
	const [disable,setDisable] = useState(false)
	const [luxury,setLuxury] = useState([])
	const [budget,setBudget] = useState([])
	useEffect(()=>{
		axios.get('/tripplannerdestination/')
		.then(res=>{
			console.log(res.data)
			setDestinations(res.data)
		})
		.catch(err=>{
			console.log(err)
		})
	},[])
   const initialValues = {
      numberOfStops: '',
      persons:'',
      destinations: []
  };

  const onGenerateTripPlan = (e)=>{
    e.preventDefault()
    setDisplayTripTable(true)
    setDisplayGenerateButton(true)
  }

  function onChangeTickets(e, field, values, setValues) {
      // update dynamic form
      const destinations = [...values.destinations];
      const numberOfStops = e.target.value || 0;
      const previousNumber = parseInt(field.value || '0');
      if (previousNumber < numberOfStops) {
          for (let i = previousNumber; i < numberOfStops; i++) {
              destinations.push('');
          }
      } else {
          for (let i = previousNumber; i >= numberOfStops; i--) {
              destinations.splice(i, 1);
          }
      }
      setValues({ ...values, destinations });

      // call formik onChange method
      field.onChange(e);
  }
  function checkArrayForEmptyIndex(arr){
    for (let index = 0; index < arr.length; index++) {
      if (arr[index]==='' || arr[index]===undefined){
        return true
      }
    }
    return false
  }
  function checkArrayForRepeatedValue(arr){
    let nextIndex=1
    for (let index = 0; index < arr.length; index++) {
      if (arr[index]===arr[nextIndex]){
        return true
      }
      nextIndex++
    }
    return false
  }
  function getStops(){
    console.log(to,from)
    if ((to==='' || undefined)||(from==='' || undefined)){
      toast.warning("Please Select Both Departure and Final Location", {
        position: toast.POSITION.TOP_CENTER
      });
    }
    else {
      axios.post('/tripplannerdestination/coordinates/destinations',{'to':to,'from':from})
      .then(res=>{
        console.log(res.data)
        if (res.data.length===0){
          reset()
        }else{

          setStops(res.data)
        }
      })
      .catch(err=>console.log(err))
      setDisable(true)
    }
    
  }
  function reset(){
    setStops([])
    setDisable(false)
    setMinTotal(0)
    setMaxTotal(0)
    setMinHotel(0)
    setMaxHotel(0)
    setMinTravel(0)
    setMaxTravel(0)
    setDisplayTripTable(false)
    setDisplayEstimateButton(false)
    setDisplayGenerateButton(false)
  }
  function handleOnChangeDeparture(e) {
    setFrom(e.target.value);
    const selectedIndex = e.target.options.selectedIndex;
    setDeparture(e.target.options[selectedIndex].getAttribute('data'))
  }
  function handleOnChangeFinal(e) {
    setTo(e.target.value);
    const selectedIndex = e.target.options.selectedIndex;
    setFinal(e.target.options[selectedIndex].getAttribute('data'))
  }
  function onSubmit(fields) {
      // display form field values on success
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
      if (fields.destinations.length===''){
        toast.warning("Please Fill Up The Form", {
          position: toast.POSITION.TOP_CENTER
        });
      }
      else if (fields.persons==='' || fields.persons===undefined) {
        toast.warning("Please Select Number of Persons", {
          position: toast.POSITION.TOP_CENTER
        });
      }
      else if (checkArrayForEmptyIndex(fields.destinations)) {
        toast.warning("Your Form is Incomplete", {
          position: toast.POSITION.TOP_CENTER
        });
      }
      else if (checkArrayForRepeatedValue(fields.destinations)){
        toast.warning("Your Form has Two Same Stops Consecutively", {
          position: toast.POSITION.TOP_CENTER
        });
      }
      else {
        var destinations = []
        destinations.push(...fields.destinations);
        destinations.unshift(departure)
        destinations[destinations.length] = final
        axios.post('/plan/estimate',{destinations:destinations})
        .then(res=>{
          console.log(res.data)
          setMinHotel(fields.persons*res.data.minHotel)
          setMaxHotel(fields.persons*res.data.maxHotel)
          setMinTravel(fields.persons*res.data.minTransportFare)
          setMaxTravel(fields.persons*res.data.maxTransportFare)
          setMinTotal(fields.persons*res.data.newMinEstimate)
          setMaxTotal(fields.persons*res.data.newMaxEstimate)
          setLuxury(res.data.luxury)
          setBudget(res.data.budget)
          setDisplayEstimateButton(true)
        })
        .catch(err=>{ 
          toast.warning(err.response.data.message, {
            position: toast.POSITION.TOP_CENTER
          });
      })
      }
  }

  return (
    <div className='container'>
      <div className="form-group">
        <label className='font-weight-bold'>Departure Location</label>
        <select disabled={disable} className="form-control" onChange={e=>{handleOnChangeDeparture(e)}} >
        <option value =''></option>
        {
          destinations.map(destination =>{
            return (
              <option data={destination._id} value={destination.north_coordinate.$numberDecimal} key={destination._id} >{destination.name}</option>
            )
          })
        }
        </select>
      </div>
      <div className="form-group">
        <label className='font-weight-bold'>Final Location</label>
        <select disabled={disable} className="form-control" onChange={
          e=>{handleOnChangeFinal(e)}} >
        <option value =''></option>
        {
          destinations.map(destination =>{
            return (
              <option data={destination._id} value={destination.north_coordinate.$numberDecimal} key={destination._id} >{destination.name}</option>
            )
          })
        }
        </select>

      </div>
      
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
    {({ errors, fields, values, touched, setValues,setFieldValue }) => (
      <Form>
        <div >
          
          {
            stops.length ===0 ?
            <div className=" mt-3">
              <input type='button' value='Go!' onClick={getStops}  className="btn button"/>
            </div>
            :
            <div>
              <div className="form-group mt-2">
                <label className='font-weight-bold mr-1'>Number of Days</label>
                <Field name="numberOfStops">
                  {({ field }) => (
                      <select className='w-10 ml-2' {...field} onChange={e => onChangeTickets(e, field, values, setValues)}>
                          <option value=""></option>
                          {[1,2,3,4,5,6,7,8,9,10].map(i => 
                              <option key={i} value={i-1}>{i}</option>
                          )}
                      </select>
                  )}
                  </Field> 
              </div>
              <FieldArray name="destinations">
              {() => (values.destinations.map((ticket, i) => {
                if (i===0){
                  let stay=i+1
                  return (
                  <div key={i} className="list-group list-group-flush">
                    <div className="list-group-item">
                      <div>
                        <p>(night stays during the trip)</p>
                        <div className="form-group ">
                          <label className='font-weight-bold'>Stay {stay}</label>
                          <Field defaultValue=''  className='w-100' name={`destinations.${i}`} type='select' as={Select} >
                            <option value =''></option>
                            {
                              stops.map(destination =>{
                                return (
                                  <option value={destination._id} key={destination._id} >{destination.name}</option>
                                )
                              })
                            }
                          </Field>
                        </div>
                      </div>
                    </div>
                  </div>
                );
                }
                else {
                  let stay=i+1
                  return ( 
                    <div key={i} className="list-group list-group-flush">
                      <div className="list-group-item">
                        <div className="">
                          <div className="form-group ">
                            <label className='font-weight-bold'>Stay {stay}  </label>
                            <Field className='w-100' name={`destinations.${i}`} type='select' as={Select} >
                            <option value =''></option>
                              {
                                stops.map(destination =>{
                                  return (
                                    <option value={destination._id} key={destination._id} >{destination.name}</option>
                                  )
                                })
                              }
                            </Field>
                          </div>
                        </div>
                      </div>
                    </div>
                    );
                }}))
                }
              </FieldArray>
              <div>
            <div className="list-group-item w-25 mt-2">
							<div className="form-group ">
								<label className='font-weight-bold'>Persons</label>
								<Field className='w-100' name='persons' type='select' as={Select} >
									<option value ='1'></option>
									<option value ='1'>1</option>
									<option value ='2'>2</option>
									<option value ='3'>3</option>
									<option value ='4'>4</option>
									<option value ='5'>5</option>
								</Field>
							</div>
            </div>
          </div>
          <div className=" mt-3">
            <button disabled={displayEstimateButton} type="submit " className="btn button">
            Calculate Approximate Budget
            </button>
          </div>
          
          {
            minTotal > 0 ? 
             (
              <div className="mt-3 form-group border border-secondary text-center p-4" id="budget-div">
                <span className="font-weight-bold" id="budget-heading">Minimum Hotel Expense: {minHotel}rs </span>
                <span className="font-weight-bold" id="budget-heading">Maximum Hotel Expense: {maxHotel}rs</span><span className="font-weight-bold" id="budget-heading">Minimum Travel Expense: {minTravel}rs</span>
                <span className="font-weight-bold" id="budget-heading">Maximum Travel Expense: {maxTravel}rs</span>
                <span className="font-weight-bold" id="budget-heading">Total Estimate Budget Range: {minTotal}rs - {maxTotal}rs</span>
                <div></div>
              </div>
            ):
            (
              <div className="mt-3 form-group border border-secondary text-center p-4" id="budget-div">
                <span className="font-weight-bold" id="budget-heading">Estimated Budget Will Be Displayed Here</span>
                <div></div>
              </div>
            )
          }
          {
            minTotal > 0 ?
            <button onClick={onGenerateTripPlan} disabled={displayGenerateButton} className="btn button" >Generate Trip Plan</button> :
            <div></div>
          }
          {
            luxury.length > 0 && budget.length >0 ?
            <TripPlanTable persons={values.persons} display = {displayTripTable} luxuryTotal={maxTotal} budgetTotal={minTotal} luxury={luxury} budget={budget}/>:
            <div></div>
          }
          <div className=" mt-3">
            <button onClick={reset} id='plan-another' className="btn">
                Plan Another Trip
            </button>
          </div>

            </div>
          }
          
        </div>
      </Form>
    )}
    </Formik>
    </div>
    )
}

export default PlanATripForm

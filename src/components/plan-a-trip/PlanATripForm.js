//import bootstrap, { Button } from 'react-bootstrap'
import React,{useState,useEffect} from 'react'
import axios from '../../axios'
import './PlanATripForm.css'
import { Formik, Form, Field, FieldArray } from 'formik';
import {Select} from '@material-ui/core'
import { toast } from 'react-toastify';

function PlanATripForm() {
	const [destinations,setDestinations] = useState([])
	const [estimate,setEstimate] = useState('Estimated Budget Will Be Displayed Here')
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
      numberOfDays: '',
      persons:'',
      destinations: []
  };

  function onChangeTickets(e, field, values, setValues) {
      // update dynamic form
      const destinations = [...values.destinations];
      const numberOfDays = e.target.value || 0;
      const previousNumber = parseInt(field.value || '0');
      if (previousNumber < numberOfDays) {
          for (let i = previousNumber; i < numberOfDays; i++) {
              destinations.push('');
          }
      } else {
          for (let i = previousNumber; i >= numberOfDays; i--) {
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
        axios.post('/plan/estimate',{destinations:fields.destinations})
        .then(res=>{
          console.log(res.data)
          setEstimate(`${fields.persons * res.data.newMinEstimate}rs - ${fields.persons *  res.data.newMaxEstimate}rs`)
        })
        .catch(err=>{console.log(err)})
      }
  }

  return (
    <div className='container'>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
    {({ errors, values, touched, setValues }) => (
      <Form>
        <div className="container">
          <div className="form-group mt-2">
            <label className='font-weight-bold'>Number of Days</label>
            <Field name="numberOfDays">
            {({ field }) => (
                <select className='w-10 ml-2' {...field} onChange={e => onChangeTickets(e, field, values, setValues)}>
                    <option value=""></option>
                    {[1,2,3,4,5,6,7,8,9,10].map(i => 
                        <option key={i} value={i+1}>{i}</option>
                    )}
                </select>
            )}
            </Field>
          </div>
          <FieldArray name="destinations">
          {() => (values.destinations.map((ticket, i) => {
            if (i===0){
              return (
              <div key={i} className="list-group list-group-flush">
                <div className="list-group-item">
                  <div className="">
                    <div className="form-group ">
                      <label className='font-weight-bold'>Departure Location</label>
                      <Field defaultValue={''}  className='w-100' name={`destinations.${i}`} type='select' as={Select} >
												<option value =''></option>
												{
													destinations.map(destination =>{
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
            else if (i===values.destinations.length-1){
              return (
              <div key={i} className="list-group list-group-flush">
                <div className="list-group-item">
                  <div className="">
                    <div className="form-group ">
                      <label className='font-weight-bold' >Final Destination</label>
                      {/* <Field  type="text" /> */}
                      <Field className='w-100' name={`destinations.${i}`} type='select' as={Select} >
											<option value =''></option>
												{
													destinations.map(destination =>{
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
            )
            }
            else {
              return ( 
              <div key={i} className="list-group list-group-flush">
                <div className="list-group-item">
                  <div className="">
                    <div className="form-group ">
                      <label className='font-weight-bold'>Stay {i}  </label>
                      <Field className='w-100' name={`destinations.${i}`} type='select' as={Select} >
											<option value =''></option>
												{
													destinations.map(destination =>{
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
          }))}
          </FieldArray>
          <div className="">
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
            <button type="submit" id="button" className="btn ">
            Calculate Approximate Budget
            </button>
          </div>
          <div className="mt-3 form-group border border-secondary text-center p-4" id="budget-div">
            <span className="font-weight-bold" id="budget-heading">{estimate}</span>
            <div></div>
         </div>
         <button className="btn" id="button">Generate Trip Plan</button>
        </div>
      </Form>
    )}
    </Formik>
    </div>
    )
}

export default PlanATripForm

//import bootstrap from 'react-bootstrap'
import React,{useEffect,useState} from 'react'
import axios from "../support-components/axios";
import './RoutePossibility.css'

import { toast } from 'react-toastify';

function RoutePossibility() {
	const [destinations,setDestinations] = useState([])
	const [destination_to,setDestinationTo] = useState()
	const [destination_from,setDestinationFrom] = useState()
	const [output,setOutput] = useState('Try n Find Out !!')

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
	
	const checkRoute = (e)=> {
		e.preventDefault()
		if (destination_to === undefined || destination_from === undefined || destination_to === ''|| destination_from === ''  ){
			toast.warn("Please Select Destinations", {
				position: toast.POSITION.TOP_CENTER
			});
		}
		else {
			console.log(destination_to,destination_from)
			axios.post('/transports/exist',{destination_to,destination_from})
			.then(res=>{
				setOutput(res.data.status)
			})
			.catch(err=>{
				console.log(err)
			})
		}
	}

	return (
		<div className="container">
			<div className="form-group">
				<div className="border border-secondry route-possibility p-3">       
					<h4>Route Possibility</h4>
					<p>Check here to see route possibility between two points</p>
					<div className="form-group row">
						<div className="col">
							<h5>From:</h5>
							<div >
								<select onChange={e=>{setDestinationFrom(e.target.value)}}className="custom-select">
									<option></option>
									{
										destinations.map(destination =>{
											return (
												<option value={destination._id} key={destination._id} >{destination.name}</option>
											)
										})
									}
								</select>
							</div>
						</div>
						<div className="col">
							<h5>To:</h5>
							<div >
								<select onChange={e=>{setDestinationTo(e.target.value)}}className="custom-select">
								<option></option>
									{
										destinations.map(destination =>{
											return (
												<option value={destination._id} key={destination._id}>{destination.name}</option>
											)
										})
									}
								</select>
							</div>
						</div>
					</div>
					<div className="form-group row justify-content-center">
							<button onClick={checkRoute} className=" btn btn-secondary check-route " >Check route</button>
					</div>
					<div className=" mt-3 form-group text-center p-4" id="budget-div">
						<span id="output-text">{output}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RoutePossibility;

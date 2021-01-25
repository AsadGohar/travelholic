//import bootstrap from 'react-bootstrap'
import React from 'react'
import './RoutePossibility.css'

function RoutePossibility() {
    return (
      <div className="container">
				<div className="form-group">
					<div className="border border-secondry route-possibility p-3">       
						<h4>Route Possibility</h4>
						<p>Check here to see route possibility between two points</p>
						<div className="form-group row">
								<div className="col">
									<h5>To:</h5>
									<div >
										<select className="custom-select">
										<option defaultValue></option>
										<option>Islamabad</option>
										<option>Karachi</option>
										<option>Peshawar</option>
										<option>Quetta</option>
										</select>
									</div>
								</div>
								<div className="col">
									<h5>From:</h5>
									<div >
										<select className="custom-select">
										<option defaultValue></option>
										<option>Islamabad</option>
										<option>Karachi</option>
										<option>Peshawar</option>
										<option>Quetta</option>
										</select>
									</div>
								</div>
						</div>
						<div className="form-group row justify-content-center">
								<button className=" btn btn-secondary check-route " >Check route</button>
						</div>
						<div className=" mt-3 form-group text-center p-4" id="budget-div">
							<span  id="output-text"> OUTPUT</span>
         		</div>
					</div>
				</div>
			</div>
    )
}

export default RoutePossibility;

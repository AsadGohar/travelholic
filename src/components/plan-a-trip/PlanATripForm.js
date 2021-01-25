//import bootstrap, { Button } from 'react-bootstrap'
import React from 'react'
import './PlanATripForm.css'

function PlanATripForm() {
   return (
      <div className="Container">
        <div className="form-group row">
					<label className="col-md-3 col-form-label  font-weight-bold" >Destination</label>
					<div className="col-md-6">
						<div >
							<select className="custom-select">
							<option defaultValue>Lahore</option>
							<option>Islamabad</option>
							<option>Karachi</option>
							<option>Peshawar</option>
							<option>Quetta</option>
							</select>
						</div>
					</div>
        </div>
				<div className="form-group row">
					<label className="col-md-3 col-form-label font-weight-bold" >Departure Location</label>
					<div className="col-md-6">
						<div>
								<select className="custom-select">
								<option defaultValue>Islamabad</option>
								<option>Islamabad</option>
								<option>Karachi</option>
								<option>Peshawar</option>
								<option>Quetta</option>
								</select>
						</div>
					</div>
				</div>
				<div className="form-group row">
					<label className="col-md-3 col-form-label font-weight-bold" >Days of Trip</label>
					<div className="col-md-2">
						<select className="custom-select">
						<option defaultValue>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						</select>
					</div>
				</div>
         {/*STAYS ARE MENTIONED HERE*/}
         <div className="form-group" >
            <div className=" pl-1 border border-bottom-0 border-secondary" id="stays-container-heading">
               <label className=" col-form-label font-weight-bold">Mention your stays</label>
            </div>
						{/* <h3>Mention Your Stay</h3> */}
            <div className="border border-top-0 border-secondary p-3" id="stays-container">
							<div className="form-group row">
								<label className=" col-form-label col-md-4 font-weight-bold justify-content-center">1st Stay</label>
								<div className="col-md-7">
									<div>
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
							<div className="form-group row">
								<label className=" col-form-label col-md-4 font-weight-bold justify-content-center">2nd Stay
								</label>
								<div className="col-md-7">
									<div>
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
							<div className="form-group row">
								<label className=" col-form-label col-md-4 font-weight-bold justify-content-center">3rd Stay</label>
								<div className="col-md-7">
									<div>
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
            </div>

         </div>
         {/*STAYS END HERE*/}

         {/*NO OF PEOPLE*/}
				<div className="form-group row ">
            <label className="col-md-3 col-form-label font-weight-bold" >Person</label>
            <div className="col-md-2">
               <select className="form-control">
                  <option defaultValue>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
               </select>
            </div>
         </div>
         {/*BUDGET CALCULATION */}
				 <button className="btn" id="button"> Calculate Approximate Budget</button>
         <div className=" mt-3 form-group border border-secondary text-center p-4" id="budget-div">
					<span className="font-weight-bold " id="budget-heading"> 7500 - 8500 PKR Approx</span>
					<p id="budget-info">Prices may varry according to the number of people and bargain factor</p>
         </div>
         {/*BUDGET CALCULATION ENDS*/}

         {/*TRIP PLAN GENERATION*/}
				 <button className="btn  " id="button">Generate Trip Plan</button>
         <div className="mt-3 w-100 form-group border border-secondary" id="generate-div">
        	</div>
      </div>
  )
}

export default PlanATripForm

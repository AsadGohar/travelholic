import React from 'react'
import './Plan-a-Trip.css'

//PlanATrip components imported here
import Searchbar from "../header/Searchbar.js"
import PlanATripForm from "./PlanATripForm.js"
import RoutePossibility from "./RoutePossibility.js"
import Meta from '../support-components/Meta'


function PlanATrip() {
   return (
      <div className="container">
		  <Meta title="Trip Planner | Plan your journey" keywords="trip planner, travel, trip guide, travelogic guide, tour planner, budget calculater"/>
      	<Searchbar />
				<h2 className="text-center ">Plan Your Trip</h2>
         <div className="p-3" id="planATrip-cont" >
					<div className=" container form-group row" >
						<div className="col-md-6 ">
							<PlanATripForm/>
						</div>
							<div className="col md-6 ">
								<RoutePossibility />
							</div>
					</div>
         </div>
			</div>
	);
}

export default PlanATrip;

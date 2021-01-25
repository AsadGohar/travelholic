import React, { Component } from 'react'
import './Plan-a-Trip.css'

//PlanATrip components imported here
import Searchbar from "../header/Searchbar.js"
import PlanATripA from "./PlanATripA.js"
import PlanATripB from "./PlanATripB.js"
function PlanATrip() {
   return (
      <div className="container PlanATrip-wrap">
         <Searchbar />
         <div className=" border border-primary d-flex justify-content-center pt-35">
            <h2 className="display-1">PLAN YOUR TRIP </h2>
         </div>
         <br /><br />

         <div className="container-fluid col-md-12 justify-content-center " id="planATrip-cont" >
            <br />

            <div className=" container form-group row" id="col-divider">
               <div className="col md-5 justify-content-left">

                  <PlanATripA />
               </div>



               <div className="col md-6 justify-content-left">

                  <PlanATripB />
               </div>
            </div>

         </div>
      </div>



   );
}

export default PlanATrip;
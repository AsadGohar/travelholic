import './Plan-a-Trip.css'
import bootstrap, { Button } from 'react-bootstrap'
import React from 'react'

function PlanATripA() {
   return (
      <div className="Container">
         <div className="form-group row">
            <label className="col-md-3 col-form-label  font-weight-bold" >Destination</label>
            <div className="col-md-6">
               <input type="text" className="form-control " placeholder="Destination" />
            </div>
         </div>

         <div className="form-group row">
            <label className="col-md-3 col-form-label font-weight-bold" >Departure Location</label>
            <div className="col-md-6">
               <input type="text" className="form-control " placeholder="Departure Location" />
            </div>
         </div>

         <div className="form-group row">
            <label className="col-md-3 col-form-label font-weight-bold" >Days of Trip</label>
            <div className="col-md-2">
               <select id="inputState" className="form-control">
                  <option selected>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
               </select>
            </div>
         </div>
         <br />

         {/*STAYS ARE MENTIONED HERE*/}
         <div className="form-group row  ">

            <div className="container-fluid col-md-9 justify-content-left border border-bottom-0 border-secondary" id="stays-container-heading">
               <label className=" col-form-label font-weight-bold">Mention your stays</label>
            </div>


            <div className="container-fluid col-md-9  border border-top-0 border-secondary" id="stays-container">
               <br />
               <div className="form-group row">
                  <label className=" col-form-label col-md-4 font-weight-bold justify-content-center">1st Stay</label>
                  <div className="col-md-7">
                     <input type="text" className="form-control " />
                  </div>
               </div>



               <div className="form-group row">
                  <label className=" col-form-label col-md-4 font-weight-bold justify-content-center">2nd Stay</label>
                  <div className="col-md-7">
                     <input type="text" className="form-control " />
                  </div>
               </div>



               <div className="form-group row">
                  <label className=" col-form-label col-md-4 font-weight-bold justify-content-center">3rd Stay</label>
                  <div className="col-md-7">
                     <input type="text" className="form-control " />
                  </div>
               </div>

            </div>

         </div>
         {/*STAYS END HERE*/}

         {/*NO OF PEOPLE*/}

         <div className="form-group row">
            <label className="col-md-4 col-form-label font-weight-bold" >No. of people</label>
            <div className="col-md-2">
               <select id="inputState" className="form-control">
                  <option selected>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
               </select>
            </div>
         </div>
         <br />


         {/*BUDGET CALCULATION */}

         <div className="form-group row justify-content-left col-md-8">
            <Button className="btn btn-dark" id="button"> Calculate Approximate Budget</Button>
         </div>

         <div className="form-group  justify-content-center col-md-12 border border-secondary" id="budget-div">
            <div className="form-group row">
               <span className="font-weight-bold justify-content-center" id="budget-heading"> 7500 - 8500 PKR Approx</span>
            </div>
            <br />
            <br />
            <div className="form-group row">
               <p id="budget-info">Prices may varry according to the number of people and bargain factor</p>
            </div>
         </div>
         {/*BUDGET CALCULATION ENDS*/}

         {/*TRIP PLAN GENERATION*/}

         <div className="form-group row justify-content-left col-md-8">
            <Button className="btn btn-dark" id="button">Generate Trip Plan</Button>
         </div>

         <div className="form-group row">
            <div className="form-group  justify-content-left col-md-11 border border-secondary" id="generate-div">
            </div>
         </div>

      </div>






   )
}

export default PlanATripA

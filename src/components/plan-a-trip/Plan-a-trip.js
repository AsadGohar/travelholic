import React, { Component } from 'react'
import './Plan-a-Trip.css'
import bootstrap from 'react-bootstrap'
//PlanATrip components imported here
import Searchbar from "../header/Searchbar.js"

class PlanATrip extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container PlanATrip-wrap">
                <Searchbar />
                <div className=" border border-success d-flex justify-content-center pt-50">
                    <h2 className="display-1">PLAN YOUR TRIP </h2>
                </div>
                <br/><br/>

                <div className="container-fluid col-md-12 justify-content-center " id="planATrip-cont" >
                    <br/>


                    <div className="col md-5 justify-content-left">

                      <div className="form-group row">
                         <label  className="col-md-2 col-form-label  font-weight-bold" >Destination</label>
                         <div className="col-md-3">
                            <input type="text" className="form-control " placeholder="Destination"/>
                         </div>
                      </div>

                      <div className="form-group row">
                         <label  className="col-md-2 col-form-label font-weight-bold" >Departure Location</label>
                         <div className="col-md-3">
                            <input type="text" className="form-control " placeholder="Departure Location"/>
                         </div>
                      </div>

                      <div className="form-group row">
                         <label  className="col-md-2 col-form-label font-weight-bold" >Days of Trip</label>
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
                        <br/>

                     {/*STAYS ARE MENTIONED HERE*/}  
                     <div className="form-group row  ">
                     <div className="container-fluid col-md-5 justify-content-left" id="stays-container">
                    <textarea className="sont-weight-bold"id="stay-textarea">Mention your stays</textarea>
                     </div>
                     </div> 

                    </div>

                </div>
        </div>
                    
                
            
         );
    }
}
 
export default PlanATrip ;
import React, { Component } from 'react'

//PlanATrip components imported here
import Searchbar from "../header/Searchbar.js"

class PlanATrip extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container PlanATrip-wrap">
                <Searchbar />
                <div className=" border border-success d-flex justify-content-center pt-50">
                    <h1 className="display-1">PLAN A TRIP PAGE</h1>
                </div>
            </div>
         );
    }
}
 
export default PlanATrip ;
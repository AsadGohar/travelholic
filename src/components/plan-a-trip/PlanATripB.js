import './Plan-a-Trip.css'
import bootstrap from 'react-bootstrap'
import React from 'react'

function PlanATripB() {
    return (
        <div className="form-group row justify-content-center">
            <div className="container border border-secondry route-possibility">
                <br />
                <h4>Route Possibility</h4>
                <p>Check here to see route possibility between two points</p>

                <div className="form-group row">
                    <label className="col-md-2">To:</label>
                    <input type="text" className="form-control col-md-3" placeholder="Destination" />

                    <label className="col-md-2">From:</label>
                    <input type="text" className="form-control col-md-3" placeholder="Destination" />

                </div>

                <div className="form-group row justify-content-center">
                    <button className=" btn-sm btn-secondary check-route " >Check route</button>
                </div>


                <div className="form-group row justify-content-center d-flex pl-3 pr-3 output">
                    <span className="justify-content-center   ">OUTPUT</span>
                </div>

            </div>
        </div>


    )
}

export default PlanATripB

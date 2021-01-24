import React from 'react'

import "./detail-trip-card.css";

function DetailTripCard() {
  return (
    <div>
      <div className="row mb-2" style={{maxWidth:"900px"}}>
        <div className="card mx-4 mt-3 rounded card-border" >
          <div className="row no-gutters">
            <div id="img-div" className="col-md-3" >
              <img src={"images/demo1.jpg"} className="card-img" alt="TBD"></img>
            </div>
            <div className="col mr-1" > 
              <div className="card-body">
                <div className="row ml-3 " >
                  <div className="">
                    <span id="name" className="">5 Days and 4 Nights Trip to Hunza from Lahore</span>
                    <div className="">
                      <div style={{fontSize:"12px"}}>
                          <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i>
                      </div>
                    </div>
                    <p className="card-text mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailTripCard

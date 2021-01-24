import React from 'react'

import Searchbar from '../header/Searchbar'
import DetailedItinerary from './DetailedItinerary'
import { Link } from 'react-router-dom'
import "./booking-form.css"


function BookingForm() {
  return (
    <div className="container" >
      <Searchbar/>
      <h3>Booking Form</h3>
      <div id="outer-div" style={{overflow:"hidden"}} className="bg-white mb-3 p-3">
        
          <div className="container float-left" style={{maxWidth:"500px"}}>
						<div className="row">
            <div className=" ">
						  <h6 >Fill out the form to book the tour</h6>
							<form className="mt-3" action="">
								<div className="row">
									<div className="input-group col-lg-6 mb-4">
										<div className="input-group-prepend">
												<span className="input-group-text bg-white px-4 border-md">
														<i className="fa fa-user text-muted"></i>
												</span>
										</div>
										<input id="firstName" type="text" name="firstname" placeholder="First Name" className="form-control bg-white border-left-0 border-md"/>
									</div>        
									<div className="input-group col-lg-6 mb-4">
										<div className="input-group-prepend">
												<span className="input-group-text bg-white px-4 border-md">
														<i className="fa fa-user text-muted"></i>
												</span>
										</div>
										<input id="lastName" type="text" name="lastname" placeholder="Last Name" className="form-control bg-white border-left-0 border-md"/>
									</div>
									<div className="input-group col-lg-12 mb-4">
										<div className="input-group-prepend">
												<span className="input-group-text bg-white px-4 border-md">
														<i className="fa fa-envelope text-muted"></i>
												</span>
										</div>
										<input id="email" type="email" name="email" placeholder="Email Address" className="form-control bg-white border-left-0 border-md"/>
									</div>
									<div className="input-group col-lg-12 mb-4">
										<div className="input-group-prepend">
												<span  className="input-group-text bg-white px-4 ">
													<i className="fa fa-phone-square text-muted"></i>
												</span>
										</div>
										<input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number" className="form-control border-left-0 bg-white  pl-3"/>
									</div>
									<div className="input-group col-lg-12 mb-4">
										<div className="input-group-prepend">
												<span className="input-group-text bg-white px-4 border-md">
													<i className="fa fa-address-book text-muted"></i>
												</span>
										</div>
										<input id="address" type="text" name="password" placeholder="Address" className="border-left-0 form-control bg-white  border-md"/>
									</div>
									<div className="input-group col-lg-12 mb-4">
										<div className="input-group-prepend">
											<span className="input-group-text bg-white px-4 border-md">
												<i className="fa fa-address-book text-muted"></i>
											</span>
										</div>
										<input id="city" type="text" placeholder="City" className="form-control bg-white border-left-0 border-md"/>
									</div>
									<div id="booking-btn-div" className="ml-3 w-100">
                    <div className="float-left">
                    <Link id="ask-btn" className="btn" to="/payment">Next</Link>
                    </div>
                    <div>
                      <span className="float-right mt-3 mr-4 font-weight-bold total-font" >Total <span className="price">15,000 PKR</span></span>
                    </div>
                  </div>
								  </div>
							  </form>
						  </div>
            </div>
				  </div>
        
        <div className="float-right" style={{maxWidth:"500px"}}>
          <DetailedItinerary/>
        </div>
      </div>
    </div>
  )
}

export default BookingForm

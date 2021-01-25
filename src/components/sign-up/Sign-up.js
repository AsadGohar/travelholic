import React from 'react'

//SignUp components imported here
import Searchbar from "../header/Searchbar.js"
import { Link } from 'react-router-dom'
import "./sign-up.css";

function SignUp() {
	return (
		<div className="container SignUp-wrap">
			<Searchbar />
			<div className="container mb-3">
				<div className="float-left mb-4" >
					<div className="p-4 mt-5" id="sign-up-intro" style={{ maxWidth: "400px", backgroundColor: "#1a936f" }}>
						<div className="d-flex justify-content-center mt-2">
							<img src={"/images/logo-png.png"} alt="" style={{ maxWidth: "230px" }} className="img-fluid"></img>
						</div>
						<p style={{ color: 'white', marginTop: "20px" }}>Travelogic is one of the leading travelguide system and tour operating company in Pakistan. We aim to provide best guidance for travel enthusiastics across Pakistan.</p>
						<br />
						<div className="d-flex justify-content-center mt-5 mb-1 pt-3" id="sign-in-btn-div">
							<Link to="/login" className="text-primary ml-2"><button className="btn sign-in-btn">Already Registered? Sign in</button></Link>
						</div>
					</div>

				</div>

				<div className="col-md-7 col-lg-6 ml-auto">
					<h3 className="mb-3">Create an Account</h3>
					<form action="#">
						<div className="row">
							<div className="input-group col-lg-6 mb-4">
								<div className="input-group-prepend">
									<span className="input-group-text bg-white px-4 border-md">
										<i className="fa fa-user text-muted"></i>
									</span>
								</div>
								<input id="firstName" type="text" name="firstname" placeholder="First Name" className="form-control bg-white border-left-0 border-md" />
							</div>
							<div className="input-group col-lg-6 mb-4">
								<div className="input-group-prepend">
									<span className="input-group-text bg-white px-4 border-md">
										<i className="fa fa-user text-muted"></i>
									</span>
								</div>
								<input id="lastName" type="text" name="lastname" placeholder="Last Name" className="form-control bg-white border-left-0 border-md" />
							</div>
							<div className="input-group col-lg-12 mb-4">
								<div className="input-group-prepend">
									<span className="input-group-text bg-white px-4 border-md">
										<i className="fa fa-envelope text-muted"></i>
									</span>
								</div>
								<input id="email" type="email" name="email" placeholder="Email Address" className="form-control bg-white border-left-0 border-md" />
							</div>
							<div className="input-group col-lg-12 mb-4">
								<div className="input-group-prepend">
									<span className="input-group-text bg-white px-4 ">
										<i className="fa fa-phone-square text-muted"></i>
									</span>
								</div>
								<input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number" className="form-control border-left-0 bg-white  pl-3" />
							</div>
							<div className="input-group col-lg-12 mb-4">
								<div className="input-group-prepend">
									<span className="input-group-text bg-white px-4 border-md">
										<i className="fa fa-lock text-muted"></i>
									</span>
								</div>
								<input id="password" type="password" name="password" placeholder="Password" className="border-left-0 form-control bg-white  border-md" />
							</div>
							<div className="input-group col-lg-12 mb-4">
								<div className="input-group-prepend">
									<span className="input-group-text bg-white px-4 border-md">
										<i className="fa fa-lock text-muted"></i>
									</span>
								</div>
								<input id="passwordConfirmation" type="text" name="passwordConfirmation" placeholder="Confirm Password" className="form-control bg-white border-left-0 border-md" />
							</div>
							<div className="form-group col-lg-12 mx-auto mb-0">
								<a href="4" style={{ backgroundColor: "#114b5f" }} className="btn text-white  btn-block py-2">
									<span className="">Create Your Account</span>
								</a>
							</div>
							<hr className="w-75" />
							<div className="form-group col-lg-12 mx-auto">
								<a href="5" className="sso-btn btn btn-facebook btn-block py-2  ">
									<i className="fa fa-facebook-f mr-2"></i>
									<span className="font-weight-bold">Continue with Facebook</span>
								</a>
								<a href="#5" className="sso-btn btn btn-block py-2 btn-gmail ">
									<i className="fa fa-twitter mr-2"></i>
									<span className="font-weight-bold">Continue with Gmail</span>
								</a>
							</div>
							<div className="text-center w-100">
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}


export default SignUp;

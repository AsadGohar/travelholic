import React from 'react'
import { Link } from 'react-router-dom'
//Login components imported here
import Searchbar from "../header/Searchbar.js"
import "./login.css" 

function Login() {
    return (
        <div className="container SignUp-wrap">
					<Searchbar />
					<div className="container  ">
						<div className="row mb-4  justify-content-md-center">
						<div className="col-md-auto outer-div-login bg-white p-3">
							<h3 >Login</h3>
							<form action="#">
								<div className="row mt-3">							
									<div className="input-group col-lg-12 mb-4">
										<div className="input-group-prepend">
												<span className="input-group-text bg-white px-4 border-md">
														<i className="fa fa-envelope text-muted"></i>
												</span>
										</div>
										<input id="email" type="email" name="email" placeholder="Email Address / Username" className="form-control bg-white border-left-0 border-md"/>
									</div>
									<div className="input-group col-lg-12 mb-4">
										<div className="input-group-prepend">
												<span  className="input-group-text bg-white px-4 ">
													<i className="fa fa-lock  text-muted"></i>
												</span>
										</div>
										<input  type="password" name="phone" placeholder="Password" className="form-control border-left-0 bg-white  pl-3"/>
									</div>
									<div className="form-group col-lg-12 mx-auto mb-0">
										<a href="4" id="login-link" className="btn text-white  btn-block py-2">
											<span  className="">Login</span>
										</a>
									</div>
									<hr className="w-75"/>
									
									<div className="text-center w-100">
											<p className="text-muted font-weight-bold">Not Registered Yet ?<Link to="/signup"  className="text-primary ml-2 text-decoration-none">Sign Up</Link></p>
									</div>
								</div>
							</form>
						</div>
						</div>
					</div>
				</div>
    );
}


export default Login;

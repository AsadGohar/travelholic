import React from 'react'
import "./profile.css"

//Profile components imported here
import Searchbar from "../header/Searchbar.js"
import BookingCard from "./BookingCard";

function Profile() {
	return (
		<div className="container">
			<Searchbar />
			<div className="container mb-4">
				<div className="row ">
					<div className="col ml-1">
						<h3>Asad Gohar</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-3">
						<div className="text-center">
							<img src="/images/asad.jpg" className="avatar img-circle img-thumbnail" alt="avatar" />
							<input id="file-input" type="file" className="mt-2 text-center center-block " />
						</div>
					</div>
					{/* nav tab starts here */}
					<div className="col-sm-9 ">
						{/* nav tab list starts */}
						<ul className="nav nav-tabs justify-content-start mt-2" id="myTab" role="tablist">
							<li className="nav-item" role="presentation">
								<a className="nav-link tab-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-selected="true">Profile</a>
							</li>
							<li className="nav-item" role="presentation">
								<a className="nav-link tab-link" id="changepass-tab" data-toggle="tab" href="#changepass" role="tab" aria-selected="false">Change Password</a>
							</li>
							<li className="nav-item" role="presentation">
								<a className="nav-link tab-link" id="bookings-tab" data-toggle="tab" href="#mybookings" role="tab" aria-selected="false">My Bookings</a>
							</li>
						</ul>
						{/* nav tab list ends */}

						{/* profile tab content starts */}
						<div className="tab-content">
							<div className="tab-pane active" id="profile" role="tabpanel" >
								<div className="tab-content">
									<div className="tab-pane active" id="profile">
										<form className="form mt-3" action="#" method="post" >
											<div className="form-group">
												<div className="col-xs-6">
													<label for="first_name"><span className="input-title">First name</span></label>
													<input type="text" className="form-control" id="first_name" placeholder="first name" />
												</div>
											</div>
											<div className="form-group">
												<div className="col-xs-6">
													<label for="last_name"><span className="input-title">Last name</span></label>
													<input type="text" className="form-control" id="last_name" placeholder="last name" />
												</div>
											</div>
											<div className="form-group">
												<div className="col-xs-6">
													<label for="phone"><span className="input-title">Phone</span></label>
													<input type="text" className="form-control" id="phone" placeholder="enter phone" />
												</div>
											</div>
											<div className="form-group">
												<div className="col-xs-6">
													<label for="mobile"><span className="input-title">Mobile</span></label>
													<input type="text" className="form-control" id="mobile" placeholder="enter mobile number" />
												</div>
											</div>
											<div className="form-group">
												<div className="col-xs-6">
													<label for="email"><span className="input-title">Email</span></label>
													<input type="email" className="form-control"
														id="email" placeholder="you@email.com" />
												</div>
											</div>
											<div className="form-group">
												<div className="col-xs-12">
													<br />
													<button className="btn update-btn" type="submit">Update
																</button>
													<button className="btn float-right reset-btn" type="reset"> Reset</button>
												</div>
											</div>
										</form>
										<hr />
									</div>
								</div>
							</div>
							{/* profile tab content starts */}

							{/* change password tab content starts */}
							<div className="tab-pane" id="changepass" role="tabpanel" >
								<div className="tab-content">
									<div className="tab-pane active" id="changepass">
										<form className="form mt-3 mb-4" action="#" method="post" >
											<div className="form-group">
												<div className="col-xs-6">
													<label for="first_name"><span className="input-title">Old Password</span></label>
													<input type="password" className="form-control" id="first_name" placeholder="Old Password" />
												</div>
											</div>
											<div className="form-group">
												<div className="col-xs-6">
													<label for="last_name"><span className="input-title">New Password</span></label>
													<input type="password" className="form-control" id="last_name" placeholder="New Password" />
												</div>
											</div>
											<div className="form-group">
												<div className="col-xs-12">
													<br />
													<button className="btn update-btn" type="submit">Change Password</button>
													<button className="btn float-right reset-btn" type="reset">Reset</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
							{/* change password tab content ends */}

							{/* Booking tab content starts */}
							<div className="tab-pane" id="mybookings" role="tabpanel" >
								<BookingCard />
							</div>
							{/* Booking tab content starts */}
						</div>
					</div>
					{/* nav tab ends here */}
				</div>
			</div>
		</div>

	);
}

export default Profile;

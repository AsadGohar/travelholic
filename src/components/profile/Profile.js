import React,{useState} from 'react'
import axios from 'axios'
import {getLoggedInUser,removeToken} from '../Authentication/auth'
import { toast } from 'react-toastify';
import "./profile.css"

//Profile components imported here
import Searchbar from "../header/Searchbar.js"
import BookingCard from "./BookingCard";

function Profile() {

	const [file,setFile]=useState('default.jpg')
	const [name,setName] = useState()
	const [email,setEmail] = useState()
	const [mobile_num,setNumber] = useState()
	const [gender,setGender] = useState('Undefined')
	const [imageName,setImageName]=useState('default.jpg')

	const [currentPassword,setCurrentPassword] = useState()
	const [newPassword,setNewPassword] = useState()
	const [newPasswordConfirm,setNewPasswordConfirm] = useState()



	const getData = ()=>{
		axios.get(`http://localhost:4000/api/users/${getLoggedInUser().id}`).then((res)=>{
      setName(res.data.name)
      setEmail(res.data.email)
      setNumber(res.data.mobile_num)
      if(res.data.gender){
				setGender(res.data.gender)
			}
			setImageName(res.data.display_image_name)
			
			//setImagePath(res.data.display_image_path)
    }).catch((err)=>{
      console.log(err)
    });
	}
	const uploadImage=(e)=>{
		e.preventDefault()
		const formData = new FormData()
		formData.append('id',getLoggedInUser().id)
		formData.append('photo',file)
		console.log('formData' +formData.get('id'))
		
		axios.put('http://localhost:4000/api/users/upload',formData)
		.then(res=>{
			toast.success('Profile Picture Updated', {
				position: toast.POSITION.TOP_LEFT,
				hideProgressBar: true
			});
			window.location.reload()
		})
		.catch(err=>{
			console.log(err)
		})
	}

	const updateProfile = (e) =>{
		e.preventDefault()
		axios.put(`http://localhost:4000/api/users/${getLoggedInUser().id}`,{name,gender,email,mobile_num})
		.then(res=>{
			toast.success('Profile Updated', {
				position: toast.POSITION.TOP_LEFT,
				hideProgressBar: true
			});
			window.location.reload()
		})
		.catch(err=>{
			console.log(err)
		})
	}

	const deleteProfile = (e)=>{
		e.preventDefault()
		axios.delete(`http://localhost:4000/api/users/${getLoggedInUser().id}`)
		.then(res=>{
			removeToken()
			window.location.reload()
		})
		.catch(err=>{
			console.log(err)
		})
	}

	const updatePassword = (e)=>{
		e.preventDefault()
		axios.put(`http://localhost:4000/api/users/password/${getLoggedInUser().id}`,{currentPassword,newPassword,newPasswordConfirm})
		.then(res=>{
			toast.success('Password Updated', {
				position: toast.POSITION.TOP_LEFT,
				hideProgressBar: true
			});
		})
		.catch(err=>{
			console.log(err)
		})
	}
	React.useEffect(getData,[])
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
							<img src={`http://localhost:4000/public/images/users/${imageName}`} className="avatar img-circle img-thumbnail" alt="avatar" />
							<input id="file-input" type="file" className="mt-2 text-center center-block" onChange={e=>{
								setFile(e.target.files[0])
							}} />
							
						</div>
						<p>{file.name}</p>
						<button type="button" className="btn btn-success mt-2" onClick={uploadImage}>Save</button>
					</div>
					{/* nav tab starts here */}
					<div className="col-sm-9 ">
						{/* nav tab list starts */}
						<ul className="nav nav-tabs justify-content-start mt-2" id="myTab" role="tablist">
							<li className="nav-item" role="presentation">
								<a className="nav-link tab-link active" id="changepass-tab" data-toggle="tab" href="#profile" role="tab" aria-selected="false">Profile</a>
							</li>
							<li className="nav-item" role="presentation">
								<a className="nav-link tab-link" id="update-profile-tab" data-toggle="tab" href="#updateprofile" role="tab" aria-selected="false">Update Profile</a>
							</li>		
							<li className="nav-item" role="presentation">
								<a className="nav-link tab-link" id="changepass-tab" data-toggle="tab" href="#security" role="tab" aria-selected="false">Security</a>
							</li>
							<li className="nav-item" role="presentation">
								<a className="nav-link tab-link" id="bookings-tab" data-toggle="tab" href="#mybookings" role="tab" aria-selected="false">My Bookings</a>
							</li>
						</ul>
						{/* nav tab list ends */}

						{/* tab content starts */}
						<div className="tab-content">
							{/* Booking tab content starts */}
							<div className="tab-pane active" id="profile" role="tabpanel" >
								<h1>Hello</h1>
							</div>
							{/* Booking tab content  */}
							<div className="tab-pane " id="updateprofile" role="tabpanel" >
								<div className="tab-content">
									<div className="tab-pane active" >
										<form className="form mt-3" action="#" method="post" >
											<div className="form-group">
												<div className="col-xs-6">
													<label ><span className="input-title">Name</span></label>
													<input required onChange={e=>{setName(e.target.value)}} value={name} type="text" className="form-control" id="last_name" placeholder="Full Name" />
												</div>
											</div>
											<div className="form-group">
												<div className="col-xs-6">
													<label ><span className="input-title">Number</span></label>
													<input required onChange={e=>{setNumber(e.target.value)}} value={mobile_num} type="text" className="form-control" id="phone" placeholder="Enter Your Contact Number" />
												</div>
											</div>
											<div className="form-group">
												<div className="col-xs-6">
													<label ><span className="input-title">Gender</span></label>
													<select id="to" className="form-control" >
														<option>Male</option>
														<option>Female</option>
          								</select>
												</div>
											</div>
											<div className="form-group">
												<div className="col-xs-12">
													<br />
													<button className="btn update-btn" type="submit" onClick={updateProfile} >Update</button>
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
							<div className="tab-pane" id="security" role="tabpanel" >
								<div className="tab-content">
									<div className="tab-pane active" id="changepass">
										<form className="form mt-3 mb-4" action="#" method="post" >
											<div className="form-group">
												<div className="col-xs-6">
													<label ><span className="input-title">Current Password</span></label>
													<input required autoComplete="off" type="password" className="form-control" onChange={e=>setCurrentPassword(e.target.value)} placeholder="Enter Current Password" />
												</div>
											</div>
											<div className="form-group">
												<div className="col-xs-6">
													<label ><span className="input-title">New Password</span></label>
													<input required autoComplete="off" type="password" className="form-control" id="new-password" onChange={e=>setNewPassword(e.target.value)} placeholder="Enter New Password" />
												</div>
											</div>
											<div className="form-group">
												<div className="col-xs-6">
													<label><span className="input-title">New Password Confirm</span></label>
													<input required autoComplete="off" type="password" className="form-control" id="new-password-confirm" onChange={e=>setNewPasswordConfirm(e.target.value)} placeholder="Again Enter New Password" />
												</div>
											</div>
											<div className="form-group">
												<div className="col-xs-12">
													<br />
													<button onClick={updatePassword} className="btn update-btn" type="submit">Change Password</button>
													<button className="btn float-right reset-btn" type="reset">Reset</button>
												</div>
											</div>
										</form>
										<hr/>
										<button onClick={deleteProfile} type="button" className="btn btn-danger">Delete Profile</button>
									</div>
								</div>
							</div>
							{/* change password tab content ends */}

							{/* Booking tab content starts */}
							<div className="tab-pane" id="mybookings" role="tabpanel" >
								<BookingCard />
							</div>
							{/* Booking tab content  */}
						</div>
					</div>
					{/* nav tab ends here */}
				</div>
			</div>
		</div>

	);
}

export default Profile;

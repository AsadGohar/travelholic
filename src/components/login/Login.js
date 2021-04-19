import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios'
import { getLoggedInUser } from '../Authentication/auth'
//Login components imported here
import Searchbar from "../header/Searchbar.js"
import "./login.css"
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userActions';



const Login = () => {
const dispatch = useDispatch()

	let history = useHistory()
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()

	const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

	useEffect(() => {
        if(userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

	const logIn = (e) => {
		e.preventDefault()
		dispatch(login(email, password))
		window.location.reload();
	}


	// const logIn = (e) => {
	// 	e.preventDefault()
	// 	axios.post('http://localhost:4000/api/users/login', { password, email })
	// 		.then(res => {
	// 			console.log(res.data)
	// 			localStorage.setItem('token', res.data)
	// 			history.push('/')
	// 			window.location.reload();
	// 			getLoggedInUser()
	// 		})
	// 		.catch(err => {
	// 			console.log(err)
	// 			toast.error(err.response.data.message, {
	// 				position: toast.POSITION.TOP_LEFT
	// 			});
	// 		})
	// }
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
									<input pattern='(\w+?@\w+?\x2E.+)' required id="email" type="email" name="email" placeholder="Email Address / Username" className="form-control bg-white border-left-0 border-md" onChange={e => {
										setEmail(e.target.value)
									}} />
								</div>
								<div className="input-group col-lg-12 mb-4">
									<div className="input-group-prepend">
										<span className="input-group-text bg-white px-4 ">
											<i className="fa fa-lock  text-muted"></i>
										</span>
									</div>
									<input pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' required autoComplete="off" type="password" name="phone" placeholder="Password" className="form-control border-left-0 bg-white  pl-3" onChange={e => {
										setPassword(e.target.value)
									}} />
								</div>
								<div className="form-group col-lg-12 mx-auto mb-0">
									<button onClick={logIn} href="4" id="login-link" className="btn text-white  btn-block py-2">
										<span className="">Login</span>
									</button>
								</div>
								<hr className="w-75" />

								<div className="text-center w-100">
									<p className="text-muted font-weight-bold">Not Registered Yet ?<Link to="/signup" className="text-primary ml-2 text-decoration-none">Sign Up</Link></p>
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

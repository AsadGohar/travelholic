import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from '../../axios'

//Login components imported here
import Searchbar from "../header/Searchbar.js"
import "./login.css"
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
// import FacebookLogin from 'react-facebook-login';

import { useDispatch, useSelector } from 'react-redux';
import { login,loginWithGoogle } from '../../actions/userActions';



const Login = ({location}) => {
const dispatch = useDispatch()

	let history = useHistory()
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()


	const userLogin = useSelector(state => state.userLogin)
    const { error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

	useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

	const logIn = async (e) => {
		e.preventDefault()

		console.log(email,password)
		if (email===undefined || password===undefined){
			toast.warn('Please Enter Login Credentials', {
			position: toast.POSITION.TOP_LEFT
			});
		}else {

			dispatch(login(email, password))
			error && toast.warn(error, {
				position: toast.POSITION.TOP_LEFT
			});
		}

		
	}

	const responseSuccessGoogle = (response) => {
		console.log(response);
		dispatch(loginWithGoogle(response.tokenId))
	}
	
	const responseFailureGoogle = (response) => {
		console.log(response);
		toast.warn('Login With Google Failed', {
			position: toast.POSITION.TOP_LEFT
			});
	}
	const responseFacebook = (response) => {
		console.log(response);
		toast.warn('FB Login', {
			position: toast.POSITION.TOP_LEFT
			});
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
	// 			
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
								<div className=" col-lg-12 mx-auto btn text-center">
									<GoogleLogin
										clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
										render={renderProps=>(
											<button className='btn border border-primary p-2' onClick={renderProps.onClick} disabled={renderProps.disabled}>
											<svg  width="18" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="evenodd"><path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"></path><path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"></path><path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"></path><path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"></path><path fill="none" d="M0 0h18v18H0z"></path></g></svg> 
											<div className="float-right ml-2">
												<span >Continue With Google</span>
											</div>
											</button>
											)}
										buttonText="Login"
										onSuccess={responseSuccessGoogle}
										onFailure={responseFailureGoogle}
										cookiePolicy={'single_host_origin'}
									/>
								</div>
								{/* <div className=" col-lg-12 mx-auto btn text-center">
									<FacebookLogin
										appId="2879240342405650"
										autoLoad={false}
										callback={responseFacebook}
										render={renderProps => (
											<button style={{"backgroundColor":"#4c69ba","color":"white"}} className='btn' onClick={renderProps.onClick}>Continue With Facebook</button>
										)}
									/>
								</div> */}
								<div className="mt-2 text-center w-100">
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

import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import {isLoggedIn,getLoggedInUser,removeToken} from '../Authentication/auth'
import "./Navbar.css";

function Navbar() {

	const [user,setUser] = useState(isLoggedIn() ? getLoggedInUser().name: null)

	const logout = () =>{
			removeToken()
			window.location.reload()
	}
	//React.useEffect(setUser(getLoggedInUser().name),[isLoggedIn()])

    return (
      <div id="nav-wrap" className="row " >
				<div id="nav" className="container-fluid "  >
					<nav className="navbar navbar-expand-lg " id="navbar-wrap">
						<button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse text-center" id="navbarToggler">
							<div className="col-lg-3" id="brand-container">
									<Link className="navbar-brand" id="brand-title" to="/"><img alt="wait" src={"/images/logo-png.png"} id="navbar-logo"></img></Link>
							</div> 
							<div className="col-lg-9" id="nav-links-wrap">
								<div className="row">
									<div className="col-lg-8" id="nav-links-module">
										<ul className="navbar-nav mr-auto mt-2 mt-lg-0" >
											<li className="nav-item">
													<NavLink className="nav-link" activeClassName="activeLink" exact to="/">Home</NavLink>
											</li>
											<li className="nav-item">
													<NavLink className="nav-link" activeClassName="activeLink" to="/destinations">Destinations</NavLink>
											</li>
											<li className="nav-item">
													<NavLink className="nav-link " activeClassName="activeLink" to="/planatrip">Plan a Trip</NavLink>
											</li>
											<li className="nav-item">
													<NavLink className="nav-link " activeClassName="activeLink" to="/bookatrip">Book a Trip</NavLink>
											</li>
											<li className="nav-item">
													<NavLink className="nav-link " activeClassName="activeLink" to="/forum">Forum</NavLink>
											</li>
											<li className="nav-item">
													<NavLink className="nav-link " activeClassName="activeLink" to="/about">About</NavLink>
											</li>
										</ul>
									</div>
								{
									isLoggedIn() ? (
										<div className="col-lg-4 " id="nav-links-profile">
										<ul id="signup-div" className="navbar-nav float-right mr-auto mt-2 mt-lg-0" >
												<li className="nav-item">
														<NavLink className="nav-link" activeClassName="activeLink" to="/profile">{user}</NavLink>
												</li>
												<li onClick = {logout} className="nav-item">
														<NavLink className="nav-link" activeClassName="activeLink" to="/login">Logout</NavLink>
												</li>
										</ul>
									</div>
									)
									:
									(
										<div className="col-lg-4 " id="nav-links-profile">
										<ul id="signup-div" className="navbar-nav float-right mr-auto mt-2 mt-lg-0" >
												<li className="nav-item">
														<NavLink className="nav-link" activeClassName="activeLink" to="/signup">Sign Up</NavLink>
												</li>
												<li className="nav-item">
														<NavLink className="nav-link" activeClassName="activeLink" to="/login">Login</NavLink>
												</li>
										</ul>
									</div>
									)
								}
								</div>
							</div>
						</div>
					</nav>
				</div>
      </div>
    );
}

export default Navbar;

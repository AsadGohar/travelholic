import React from 'react'
import {  Route,Redirect} from 'react-router-dom';
import {isLoggedIn} from './auth'

function ProtectedRoute(props) {
  const {path,component} = props
  console.log(isLoggedIn())
  return (  
    isLoggedIn() ? 
    (<Route path={path} component={component} />)
    :
    (<Redirect to="/login"/>)
  )
}

export default ProtectedRoute

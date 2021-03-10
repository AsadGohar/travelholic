import React from 'react'
import {  Route,Redirect} from 'react-router-dom';
import {isLoggedIn} from './auth'

function PublicRoute(props) {
  const {path,component} = props
  // console.log(Component)
  const toRender = () =>{
    if(isLoggedIn()){
      if(path==='/login'|| path==='/signup' ){
        return <Redirect to="/"/>
      }
    }
    return <Route path={path} component={component} />
  }
  return (  
    toRender()
  )
}

export default PublicRoute

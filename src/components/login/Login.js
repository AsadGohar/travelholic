import React from 'react'

//Login components imported here
import Searchbar from "../header/Searchbar.js"

function Login() {
    return (
        <div className="container Login-wrap">
            <Searchbar />
            <div className=" border border-success d-flex justify-content-center pt-50">
                <h1 className="display-1">LOGIN PAGE</h1>
            </div>
        </div>
    );
}


export default Login;
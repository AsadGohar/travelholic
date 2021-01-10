import React, { Component } from 'react'

//SignUp components imported here
import Searchbar from "../header/Searchbar.js"

class SignUp extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container SignUp-wrap">
                <Searchbar />
                <div className=" border border-success d-flex justify-content-center pt-50">
                    <h1 className="display-1">SIGN UP PAGE</h1>
                </div>
            </div>
         );
    }
}
 
export default SignUp ;
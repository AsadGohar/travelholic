import React, { Component } from 'react'

//Profile components imported here
import Searchbar from "../header/Searchbar.js"

class Profile extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container Profile-wrap">
                <Searchbar />
                <div className=" border border-success d-flex justify-content-center pt-50">
                    <h1 className="display-1">PROFILE PAGE</h1>
                </div>
            </div>
         );
    }
}
 
export default Profile ;
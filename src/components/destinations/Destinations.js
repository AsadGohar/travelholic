import React, { Component } from 'react'

//Destinations components imported here
import Searchbar from "../header/Searchbar.js"

class Destinations extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container Destinations-wrap">
                <Searchbar />
                <div className=" border border-success d-flex justify-content-center pt-50">
                    <h1 className="display-1">DESTINATIONS PAGE</h1>
                </div>
            </div>
         );
    }
}
 
export default Destinations ;
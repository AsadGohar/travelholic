import React, { Component } from 'react'

//BookATrip components imported here
import Searchbar from "../header/Searchbar.js"

class BookATrip extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container BookATrip-wrap">
                <Searchbar />
                <div className=" border border-success d-flex justify-content-center pt-50">
                    <h1 className="display-1">BOOK A TRIP PAGE</h1>
                </div>
            </div>
         );
    }
}
 
export default BookATrip ;
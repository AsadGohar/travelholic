import React, { Component } from 'react'

//Forum components imported here
import Searchbar from "../header/Searchbar.js"

class Forum extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container Forum-wrap">
                <Searchbar />
                <div className=" border border-success d-flex justify-content-center pt-50">
                    <h1 className="display-1">FORUM PAGE</h1>
                </div>
            </div>
         );
    }
}
 
export default Forum ;
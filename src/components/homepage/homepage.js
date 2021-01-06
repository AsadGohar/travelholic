import React, { Component } from 'react'

//Homepage components imported here
import Navbar from "../dashboard/Navbar.js"
import Footer from "../dashboard/Footer.js"
import Searchbar from "../dashboard/Searchbar"

class Homepage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="homepage">
            <Navbar/>
            <Footer/>
            <Searchbar/>
            </div>
         );
    }
}
 
export default Homepage ;
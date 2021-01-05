import React, { Component } from 'react'

//Homepage components imported here
import Navbar from "../dashboard/Navbar.js"
import Footer from "../dashboard/Footer.js"

class Homepage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="homepage">
            <Navbar/>
            <Footer />
            </div>
         );
    }
}
 
export default Homepage ;
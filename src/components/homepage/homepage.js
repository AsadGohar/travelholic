import React, { Component } from 'react'
import { Sliders } from 'react-bootstrap-icons'

//Homepage components imported here
import Slider from "./Slider.js"
import Searchbar from "../header/Searchbar.js"

class Homepage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="homepage-wrap">
                <Slider/>
                <Searchbar />
            </div>
         );
    }
}
 
export default Homepage ;
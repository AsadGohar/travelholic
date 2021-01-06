import React, { Component } from 'react';
import Navbar from "./Navbar.js"
import Searchbar from "./Searchbar.js"

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header-wrap">
                <Navbar/>
                <Searchbar/>
            </div>
        );
    }
}
 
export default Header;
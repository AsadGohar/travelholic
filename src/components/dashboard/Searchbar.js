import React, { Component } from 'react';
import "./Searchbar.css";

class Searchbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row container-fluid " id="footer-wrap">
                <div className="col-md-12 d-flex justify-content-center">
                        <form class="form-inline active-green-3 active-green-4">
                            <i class="fa fa-search" aria-hidden="true" style={{color:"#114B5F", fontSize:18}}></i>
                            <input class="form-control form-control-sm ml-3 " style={{width:400, height:35}}  type="text" placeholder="Search your destination" aria-label="Search"/>
                            <button type="submit" id="search-btn">Search</button>
                        </form>
                </div>
            </div>
         );
    }
}
 
export default Searchbar;
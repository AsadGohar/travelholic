import React from 'react';
import "./Searchbar.css";

//LALALALALALAl

function Searchbar() {
    return (
        <div className="row container-fluid d-flex justify-content-center " id="searchbar-wrap">
            <div className="col input-group ">
                <form class="w-100 d-flex justify-content-center form-inline active-green-3 active-green-4">
                    <i class="fa fa-search" aria-hidden="true" style={{ color: "#114B5F", fontSize: 18 }}></i>
                    <input class="form-control form-control-sm ml-3 " style={{ width: 400, height: 35 }} type="text" placeholder="Search your destination" aria-label="Search" />
                    <button type="button" id="search-btn">Search</button>
                </form>
            </div>
        </div>
    );
}


export default Searchbar;




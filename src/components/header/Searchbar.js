import React from 'react';
import "./Searchbar.css";

function Searchbar() {
    return (
        <div className="container-fluid" id="searchbar-wrap">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <form className="card searchbar-card card-sm">
                        <div className="card-body row no-gutters align-items-center">
                            <div className="col-auto">
                                <i className="fa fa-search h5 mt-2 mr-2 text-body"></i>
                            </div>
                            <div className="col">
                                <input className="form-control searchbar-input form-control-lg form-control-borderless" type="search" placeholder="Search your destination" />
                            </div>
                            <div className="col-auto">
                                <button type="button" id="search-btn">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Searchbar;




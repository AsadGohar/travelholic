import React from 'react';
import "./Searchbar.css";

function Searchbar() {
    return (
        <div className="container-fluid" id="searchbar-wrap">
            <div class="row justify-content-center">
                <div class="col-12 col-md-10 col-lg-8">
                    <form class="card searchbar-card card-sm">
                        <div class="card-body row no-gutters align-items-center">
                            <div class="col-auto">
                                <i class="fa fa-search h5 mt-2 mr-2 text-body"></i>
                            </div>
                            <div class="col">
                                <input class="form-control searchbar-input form-control-lg form-control-borderless" type="search" placeholder="Search your destination" />
                            </div>
                            <div class="col-auto">
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




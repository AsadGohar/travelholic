import React from 'react'
import "./DestinationDetails.css";
import { Link } from 'react-router-dom';

//Destinations components imported here
import Searchbar from "../../header/Searchbar.js"

//Importing  Destination details components
import DestinationDetailsIntro from "./DestinationDetailsIntro.js";
import DestinationAttractions from "./DestinationAttractions.js";
import DestinationPhotos from "./DestinationPhotos.js";
import DestinationHistory from "./DestinationHistory.js";
import DestinationGuidelines from "./DestinationGuidelines.js";

function Destinations() {
    return (
        <div className="container ">
            <Searchbar />
            <div className="container  destination-details-wrap pt-4 pl-3 pr-3 pb-3">
                <DestinationDetailsIntro />

                {/*Destination details toggle menu bar*/}

                <div className="container ">
                    <nav className="row d-flex " id="destination-details-menu-wrap" role="tablist">
                        <div className="col-3 d-flex justify-content-center destination-details-menu-link" data-toggle="tab" href="#attractions" role="tab" aria-controls="attractions" aria-selected="true">
                            <p className="mt-2 mb-2">ATTRACIONS</p>
                        </div>
                        <div className="col-3 d-flex justify-content-center destination-details-menu-link" data-toggle="tab" href="#photos" role="tab" aria-controls="photos" aria-selected="true">
                            <p className="mt-2 mb-2">PHOTOS</p>
                        </div>
                        <div className="col-3 d-flex justify-content-center destination-details-menu-link" data-toggle="tab" href="#history" role="tab" aria-controls="history" aria-selected="true">
                            <p className="mt-2 mb-2">HISTORY</p>
                        </div>
                        <div className="col-3 d-flex justify-content-center destination-details-menu-link" data-toggle="tab" href="#guidelines" role="tab" aria-controls="guidelines" aria-selected="true">
                            <p className="mt-2 mb-2">GUIDELINES</p>
                        </div>
                    </nav>
                </div>

                {/*Destination menu tabs toggle content here*/}

                <div class="tab-content destination-menu-tabs-content">
                    <div id="attractions" class="tab-pane in active" role="tabpanel">
                        <DestinationAttractions/>
                    </div>
                    <div id="photos" class="tab-pane fade" role="tabpanel">
                        <DestinationPhotos/>
                    </div>
                    <div id="history" class="tab-pane fade" role="tabpanel">
                        <DestinationHistory/>
                    </div>
                    <div id="guidelines" class="tab-pane fade" role="tabpanel">
                        <DestinationGuidelines/>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default Destinations;



{/* <ul class="nav nav-tabs destination-details-menu-tabs d-flex ">
                    <li class="active"><a data-toggle="tab" href="#home">Home</a></li>
                    <li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
                    <li><a data-toggle="tab" href="#menu2">Menu 2</a></li>
                    <li><a data-toggle="tab" href="#menu3">Menu 3</a></li>
                </ul> */}
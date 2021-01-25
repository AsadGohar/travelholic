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


                <div class="container">
                    <div class="row" >
                        <div class="col-md-12 " id="destination-details-menu">
                            <nav>
                                <div class=" nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                    <a class=" nav-item nav-link active" id="destination-attractions" data-toggle="tab" href="#attractions" role="tab" aria-controls="attractions" aria-selected="true">ATTRACTIONS</a>
                                    <a class="nav-item nav-link" id="destination-photos" data-toggle="tab" href="#photos" role="tab" aria-controls="photos" aria-selected="false">PHOTOS</a>
                                    <a class="nav-item nav-link" id="destination-guidelines" data-toggle="tab" href="#guidelines" role="tab" aria-controls="guidelines" aria-selected="false">GUIDELINES</a>
                                    <a class="nav-item nav-link" id="destination-history" data-toggle="tab" href="#history" role="tab" aria-controls="history" aria-selected="false">HISTORY</a>
                                </div>
                            </nav>
                            <div class="tab-content py-3 px-3 px-sm-0 mt-2" id="nav-tabContent">
                                <div class="tab-pane fade show active " id="attractions" role="tabpanel" aria-labelledby="destination-attractions">
                                    <DestinationAttractions />
                                </div>
                                <div class="tab-pane fade" id="photos" role="tabpanel" aria-labelledby="destination-photos">
                                    <DestinationPhotos />
                                </div>
                                <div class="tab-pane fade" id="guidelines" role="tabpanel" aria-labelledby="destination-guidelines">
                                    <DestinationGuidelines />
                                </div>
                                <div class="tab-pane fade" id="history" role="tabpanel" aria-labelledby="destination-history">
                                    <DestinationHistory />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*END HERE*/}
            </div >
        </div >
    );
}


export default Destinations;


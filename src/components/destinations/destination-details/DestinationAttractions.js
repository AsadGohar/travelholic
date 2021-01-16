import React from 'react';
import "./DestinationAttractions.css"

function DestinationAttractions() {
    return (
        <div className="container destination-attractions-wrap">
            <div className="row d-flex attractions-cards-wrap">
                <div className="col-sm-4">
                    <div class="card attraction-image-card">
                        <img src={"images/demo3.jpg"} class="card-img-top" alt="attraction" />
                        <div class="card-body attraction-card-body">
                            <h5 class="card-title text-center">Attraction Name</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div class="card attraction-image-card">
                        <img src={"images/demo5.jpg"} class="card-img-top" alt="attraction" />
                        <div class="card-body attraction-card-body">
                            <h5 class="card-title text-center">Attraction Name</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div class="card attraction-image-card">
                        <img src={"images/demo3.jpg"} class="card-img-top" alt="attraction" />
                        <div class="card-body attraction-card-body">
                            <h5 class="card-title text-center">Attraction Name</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row d-flex attractions-cards-wrap">
                <div className="col-sm-4">
                    <div class="card attraction-image-card">
                        <img src={"images/demo4.jpg"} class="card-img-top" alt="attraction" />
                        <div class="card-body attraction-card-body">
                            <h5 class="card-title text-center">Attraction Name</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div class="card attraction-image-card">
                        <img src={"images/demo2.jpg"} class="card-img-top" alt="attraction" />
                        <div class="card-body attraction-card-body">
                            <h5 class="card-title text-center">Attraction Name</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div class="card attraction-image-card">
                        <img src={"images/demo1.jpg"} class="card-img-top" alt="attraction" />
                        <div class="card-body attraction-card-body">
                            <h5 class="card-title text-center">Attraction Name</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DestinationAttractions;


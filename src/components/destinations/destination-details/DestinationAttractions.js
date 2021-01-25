import React from 'react';
import "./DestinationAttractions.css"

function DestinationAttractions() {
    return (
        <div className="container destination-attractions-wrap">
            <div className="row d-flex attractions-cards-wrap">
                <div className="col-sm-4">
                    <div className="card attraction-image-card">
                        <img src={"images/demo3.jpg"} className="card-img-top" alt="attraction" />
                        <div className="card-body attraction-card-body">
                            <h5 className="card-title text-center">Attraction Name</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card attraction-image-card">
                        <img src={"images/demo5.jpg"} className="card-img-top" alt="attraction" />
                        <div className="card-body attraction-card-body">
                            <h5 className="card-title text-center">Attraction Name</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card attraction-image-card">
                        <img src={"images/demo3.jpg"} className="card-img-top" alt="attraction" />
                        <div className="card-body attraction-card-body">
                            <h5 className="card-title text-center">Attraction Name</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row d-flex attractions-cards-wrap">
                <div className="col-sm-4">
                    <div className="card attraction-image-card">
                        <img src={"images/demo4.jpg"} className="card-img-top" alt="attraction" />
                        <div className="card-body attraction-card-body">
                            <h5 className="card-title text-center">Attraction Name</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card attraction-image-card">
                        <img src={"images/demo2.jpg"} className="card-img-top" alt="attraction" />
                        <div className="card-body attraction-card-body">
                            <h5 className="card-title text-center">Attraction Name</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card attraction-image-card">
                        <img src={"images/demo1.jpg"} className="card-img-top" alt="attraction" />
                        <div className="card-body attraction-card-body">
                            <h5 className="card-title text-center">Attraction Name</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DestinationAttractions;


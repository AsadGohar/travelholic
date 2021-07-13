import React from 'react';

function Slider() {
    return (
        <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselIndicators" data-slide-to="1"></li>
                <li data-target="#carouselIndicators" data-slide-to="2"></li>
                <li data-target="#carouselIndicators" data-slide-to="3"></li>
                <li data-target="#carouselIndicators" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={"images/banner4.png"} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={"images/banner2.png"} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={"images/banner1.png"} alt="Third slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={"images/banner3.png"} alt="Fourth slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={"images/banner5.png"} alt="Fifth slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )

}


export default Slider;

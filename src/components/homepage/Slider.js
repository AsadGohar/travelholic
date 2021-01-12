import React from 'react';
import './Slider.css';

function Slider() {
    return (
        <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselIndicators" data-slide-to="1"></li>
                <li data-target="#carouselIndicators" data-slide-to="2"></li>
                <li data-target="#carouselIndicators" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img className="d-block w-100" src={"images/sample.jpg"} alt="First slide" />
                </div>
                <div class="carousel-item">
                    <img className="d-block w-100" src={"images/sample.jpg"} alt="Second slide" />
                </div>
                <div class="carousel-item">
                    <img className="d-block w-100" src={"images/sample.jpg"} alt="Third slide" />
                </div>
                <div class="carousel-item">
                    <img className="d-block w-100" src={"images/sample.jpg"} alt="Fourth slide" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )

}


export default Slider;
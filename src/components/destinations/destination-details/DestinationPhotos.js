import React from 'react';
import { imagePath } from '../../support-components/axios';
import "./DestinationPhotos.css"

const DestinationPhotos = (props) => {
    const destination = props.destination;
    const photos = destination.photos;

    let photoItem;
    if (photos) {
        photoItem = photos.map(photo => (
            <div className="col-lg-3 col-md-4 col-6 destination-details-photo-div" key={photo._id}>
                <a href={`${imagePath}/${photo.path}`} target="_blank" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail destination-details-photo" src={`${imagePath}/${photo.path}`}  alt="imag" />
                </a>
            </div>
        ))
    } else {
        photoItem = "Loading..."
    }

    return (
        <div className="container">
            <div className="row text-center text-lg-left">
                {photoItem}
            </div>
        </div>

    );
}

export default DestinationPhotos;


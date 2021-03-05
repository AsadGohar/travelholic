import React from 'react';

const DestinationHistory = (props) => {
    const destination = props.destination;
    return(
        <div className="container destination-guidelines-wrap">
            <h5>Guidelines</h5>
            <p className="destination-guidelines-text">
                {destination.guidelines}
            </p>
            {/* <ol className="guidelines-list" style={{listStyle: "circle"}}>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
            </ol> */}
        </div>
    );
}

export default DestinationHistory;


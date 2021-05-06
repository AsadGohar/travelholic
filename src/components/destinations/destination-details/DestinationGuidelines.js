import React from 'react';

const DestinationHistory = (props) => {
    const destination = props.destination;
    return(
        <div className="container destination-guidelines-wrap">
            <h5>Guidelines</h5>
            <p className="destination-guidelines-text" dangerouslySetInnerHTML={ {__html: destination.guidelines} }>
                {/* {destination.guidelines} */}
            </p>
        </div>
    );
}

export default DestinationHistory;


import React from 'react';

const DestinationHistory = (props) => {
    const destination = props.destination;
    return (
        <div className="container destination-history-wrap">
            <h5>History</h5>
            <p className="destination-history-text" dangerouslySetInnerHTML={ {__html: destination.history} }>
                {/* {destination.history} */}
            </p>
        </div>
    );
}

export default DestinationHistory;


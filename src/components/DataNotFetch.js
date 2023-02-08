import React from 'react';

const DataNotFetch = () => {
    return (
        <div
            className="container card shadow p-3 mt-5 bg-white rounded text-center"
            style={{ width: '30rem' }}
        >
            <div className="card-body">
                <h5 className="card-title display-1 text-danger mb-3">
                    Error!!
                </h5>
                <h6 className="card-subtitle mb-2 display-5">See you again!</h6>
                <p className="card-text">
                    We have a some problem and we will come back soon.
                </p>
            </div>
        </div>
    );
};

export default DataNotFetch;

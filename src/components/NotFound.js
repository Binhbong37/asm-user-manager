import React from 'react';

const NotFound = () => {
    return (
        <div
            className="container card shadow p-3 mt-5 bg-white rounded text-center"
            style={{ width: '30rem' }}
        >
            <div className="card-body">
                <h5 className="card-title">404</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    OOPS! PAGE NOT FOUD
                </h6>
                <p className="card-text">Back to home and try again!!!</p>
                <a href="/" className="card-link">
                    Back to home
                </a>
            </div>
        </div>
    );
};

export default NotFound;

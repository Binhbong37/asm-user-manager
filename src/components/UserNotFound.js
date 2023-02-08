import React from 'react';

const UserNotFound = () => {
    return (
        <div
            className="container card shadow p-3 mt-5 bg-white rounded text-center"
            style={{ width: '30rem' }}
        >
            <div className="card-body">
                <h5 className="card-title mb-3 text-danger ">
                    USER NOT FOUND!
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    Back to home and choose another user
                </h6>
                <a href="/" className="card-link">
                    Back to home
                </a>
            </div>
        </div>
    );
};

export default UserNotFound;

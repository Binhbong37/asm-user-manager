import React from 'react';
import { Link } from 'react-router-dom';

const DetailUser = ({ user }) => {
    const { title, first, last } = user.name;
    const images = user.picture.large || user.picture.medium;
    return (
        <div className="card " style={{ width: '20rem' }}>
            <img className="card-img-top" src={images} alt="CardImg" />
            <div className="card-body">
                <h5 className="card-title">
                    {title + ' ' + first + ' ' + last}
                </h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Gender</li>
                <li className="list-group-item">Date of birth</li>
                <li className="list-group-item">country:</li>
            </ul>
            <div className="card-body">
                <a href="/" className="card-link ml-3">
                    back to list
                </a>
                <Link to={'/'}>Back list</Link>
            </div>
        </div>
    );
};

export default DetailUser;

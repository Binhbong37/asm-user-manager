import React from 'react';
import { Link } from 'react-router-dom';
import { converTime } from '../../utils/formatDate';

const UserContain = ({ user }) => {
    const { title, first, last } = user.name;
    const { gender, phone } = user;
    const { city, state, country } = user.location;
    const images = user.picture.large || user.picture.medium;
    return (
        <div className="d-flex justify-content-center my-5">
            <div className="card " style={{ width: '20rem' }}>
                <img className="card-img-top" src={images} alt="CardImg" />
                <div className="card-body text-center">
                    <h5 className="card-title">
                        {title + ' ' + first + ' ' + last}
                    </h5>
                </div>
            </div>
            <div className="card ms-3" style={{ width: '20rem' }}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Gender: {gender}</li>
                    <li className="list-group-item">
                        Date of birth: {converTime(user.dob.date)}
                    </li>
                    <li className="list-group-item">Phone: {phone}</li>
                    <li className="list-group-item">Country: {country}</li>
                    <li className="list-group-item">City: {city}</li>
                    <li className="list-group-item">State: {state || city}</li>
                    <li className="list-group-item">
                        Registered: {converTime(user.registered.date)}
                    </li>
                </ul>
                <div className="card-body">
                    <Link to={'/'}>Back to list</Link>
                </div>
            </div>
        </div>
    );
};

export default UserContain;

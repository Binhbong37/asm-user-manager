import React from 'react';
import { Link } from 'react-router-dom';

const UserContainer = ({ user }) => {
    const { first, last } = user.name;
    return (
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <img
                        src={user.picture.medium}
                        alt="av"
                        style={{ width: '50px' }}
                        className="rounded-circle"
                    />
                    <div className="ms-3">
                        <p>{first + ' ' + last}</p>
                    </div>
                </div>
            </td>
            <td>{user.login.username}</td>
            <td>{user.email}</td>
            <td>
                <Link to={`/users/${user.login.username}`}>
                    <button className="btn btn-primary">Detail</button>
                </Link>
            </td>
        </tr>
    );
};

export default UserContainer;

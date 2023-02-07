import React from 'react';
import { Link } from 'react-router-dom';

const UserContainer = ({ user }) => {
    const { title, first, last } = user.name;
    return (
        <tr>
            <td>
                <img src={user.picture.medium} alt="av" />
            </td>
            <td>{title + ' ' + first + ' ' + last}</td>
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

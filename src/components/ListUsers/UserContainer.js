import React from 'react';

const UserContainer = ({ user }) => {
    const { title, first, last } = user.name;
    return (
        <tr>
            <td>
                <img src={user.picture.medium} alt="av" />
            </td>
            <td>{title + ' ' + first + ' ' + last}</td>
            <td>{user.email}</td>
            <td>{user.login.username}</td>
            <td>
                <button>Detail</button>
            </td>
        </tr>
    );
};

export default UserContainer;

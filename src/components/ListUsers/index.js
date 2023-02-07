import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/usersSlice';

import Loading from '../Loading';
import UserContainer from './UserContainer';
const ListUsers = () => {
    const dispatch = useDispatch();
    const usersList = useSelector((state) => state.users);
    const { isLoading, errMess, users } = usersList;
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    if (isLoading) {
        return <Loading center />;
    } else if (errMess !== null) {
        return (
            <div>
                <h3>Error!</h3>
                <p>{usersList.errMess}</p>
            </div>
        );
    } else {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return <UserContainer key={index} user={user} />;
                    })}
                </tbody>
            </table>
        );
    }
};

export default ListUsers;

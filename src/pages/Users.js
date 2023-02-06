import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../components/usersSlice';

const Users = () => {
    const dispatch = useDispatch();
    const usersList = useSelector((state) => state.users);
    console.log(usersList);
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return <div>Users</div>;
};

export default Users;

import ListUsers from '../components/ListUsers';

const Users = ({ usersList }) => {
    return (
        <div className="container mt-5">
            <h2 className="text-center">List Users</h2>
            <ListUsers usersList={usersList} />
        </div>
    );
};

export default Users;

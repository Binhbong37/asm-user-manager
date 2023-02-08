import ListUsers from '../components/ListUsers';

const Users = ({ usersList, setPage, page }) => {
    return (
        <div className="container my-5">
            <h2 className="text-center">List Users</h2>
            <ListUsers usersList={usersList} setPage={setPage} page={page} />
        </div>
    );
};

export default Users;

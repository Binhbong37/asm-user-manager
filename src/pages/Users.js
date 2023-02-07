import ListUsers from '../components/ListUsers';
import PageNum from '../components/PageNum';

const Users = ({ usersList }) => {
    return (
        <div className="container mt-5">
            <h2 className="text-center">List Users</h2>
            <ListUsers usersList={usersList} />
            {!usersList.isLoading && (
                <div className="d-flex justify-content-end">
                    <PageNum />
                </div>
            )}
        </div>
    );
};

export default Users;

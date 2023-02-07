import Loading from '../Loading';
import UserContainer from './UserContainer';
import PageNum from '../PageNum';

const ListUsers = ({ usersList, setPage, page }) => {
    const { isLoading, errMess, users } = usersList;

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
            <>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Full Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => {
                            return <UserContainer key={index} user={user} />;
                        })}
                    </tbody>
                </table>
                <div className="d-flex justify-content-end">
                    <PageNum setPage={setPage} page={page} />
                </div>
            </>
        );
    }
};

export default ListUsers;

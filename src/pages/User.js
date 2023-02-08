import DetailUser from '../components/DetailUser';
import Loading from '../components/Loading';
import DataNotFetch from '../components/DataNotFetch';

const User = ({ user }) => {
    if (user.isLoading) {
        return <Loading />;
    } else if (user.errMess !== null) {
        return <DataNotFetch />;
    } else {
        return (
            <div className="container">
                <DetailUser user={user.users} />
            </div>
        );
    }
};

export default User;

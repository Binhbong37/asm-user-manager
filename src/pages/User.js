import { useParams } from 'react-router-dom';
import DetailUser from '../components/DetailUser';
import UserNotFound from '../components/UserNotFound';

const User = ({ user }) => {
    let params = useParams();

    let filterUser = user.find((use) => use.login.username === params.user);

    if (!filterUser) {
        return <UserNotFound />;
    }
    return (
        <div className="container">
            <DetailUser user={filterUser} />
        </div>
    );
};

export default User;

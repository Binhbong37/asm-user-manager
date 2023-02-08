import { useParams } from 'react-router-dom';
import UserNotFound from '../UserNotFound';
import UserContain from './UserContain';

const DetailUser = ({ user }) => {
    let params = useParams();
    let filterUser = user.find((use) => {
        return use.login.username === params.user;
    });

    if (!filterUser) {
        return <UserNotFound />;
    }

    return <UserContain user={filterUser} />;
};

export default DetailUser;

import { useParams } from 'react-router-dom';
import DetailUser from '../components/DetailUser';

const User = ({ user }) => {
    let params = useParams();

    let filterUser = user.find((use) => use.login.username === params.user);

    if (!filterUser) {
        return <h1>User not found</h1>;
    }
    return (
        <div className="container">
            <DetailUser user={filterUser} />
        </div>
    );
};

export default User;

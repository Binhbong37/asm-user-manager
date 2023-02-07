import { useParams } from 'react-router-dom';

const User = ({ user }) => {
    let params = useParams();
    let filterUser = user.find((use) => use.login.username === params.user);
    console.log(filterUser);
    return (
        <div>
            <h1>UserName: {params.user}</h1>
        </div>
    );
};

export default User;

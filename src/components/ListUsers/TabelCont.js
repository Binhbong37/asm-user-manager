import { AiOutlineSortAscending } from 'react-icons/ai';
import { AiOutlineSortDescending } from 'react-icons/ai';
import { useState } from 'react';

import UserContainer from './UserContainer';

const TabelCont = ({ users }) => {
    const [renderUsers, setRenderUsers] = useState(users);
    const [sortFullN, setSortFullN] = useState(false);
    const [sortUserName, setSortUserName] = useState(false);

    const sortFullNameAZ = () => {
        let newArr = renderUsers.slice(0);
        newArr.sort((a, b) => {
            const name1 = a.name.first.toLowerCase();
            const name2 = b.name.first.toLowerCase();
            if (name1 < name2) {
                return -1;
            } else if (name1 > name2) {
                return 1;
            } else {
                return 0;
            }
        });
        return newArr;
    };

    const sortUserNameAZ = () => {
        let newArr = renderUsers.slice(0);
        newArr.sort((a, b) => {
            const name1 = a.login.username.toLowerCase();
            const name2 = b.login.username.toLowerCase();
            if (name1 < name2) {
                return -1;
            } else if (name1 > name2) {
                return 1;
            } else {
                return 0;
            }
        });
        return newArr;
    };
    const handleClickSort = (type, sort) => {
        if (type === 'fullname') {
            setSortFullN(!sortFullN);
            if (sort === 'asc') {
                setRenderUsers(sortFullNameAZ().reverse());
            }

            if (sort === 'desc') {
                setRenderUsers(sortFullNameAZ());
            }
        }

        if (type === 'username') {
            setSortUserName(!sortUserName);
            if (sort === 'asc') {
                setRenderUsers(sortUserNameAZ().reverse());
            }

            if (sort === 'desc') {
                setRenderUsers(sortUserNameAZ());
            }
        }
    };

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>
                        Fullname
                        <span
                            style={{ fontSize: '25px', cursor: 'pointer' }}
                            className="ms-2"
                        >
                            {sortFullN ? (
                                <AiOutlineSortAscending
                                    onClick={() =>
                                        handleClickSort('fullname', 'asc')
                                    }
                                />
                            ) : (
                                <AiOutlineSortDescending
                                    onClick={() =>
                                        handleClickSort('fullname', 'desc')
                                    }
                                />
                            )}
                        </span>
                    </th>
                    <th>
                        Username
                        <span
                            style={{ fontSize: '25px', cursor: 'pointer' }}
                            className="ms-2"
                        >
                            {sortUserName ? (
                                <AiOutlineSortAscending
                                    onClick={() =>
                                        handleClickSort('username', 'asc')
                                    }
                                />
                            ) : (
                                <AiOutlineSortDescending
                                    onClick={() =>
                                        handleClickSort('username', 'desc')
                                    }
                                />
                            )}
                        </span>
                    </th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {renderUsers.map((user, index) => {
                    return <UserContainer key={index} user={user} />;
                })}
            </tbody>
        </table>
    );
};

export default TabelCont;

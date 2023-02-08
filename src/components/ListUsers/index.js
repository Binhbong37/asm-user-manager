import Loading from '../Loading';
import PageNum from '../PageNum';
import TabelCont from './TabelCont';

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
                <div>
                    <TabelCont users={users} />
                </div>
                <div className="d-flex justify-content-end">
                    <PageNum setPage={setPage} page={page} />
                </div>
            </>
        );
    }
};

export default ListUsers;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './redux/usersSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './pages/Users';
import User from './pages/User';
import NotFound from './components/NotFound';

function App() {
    const dispatch = useDispatch();
    const usersList = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Users usersList={usersList} />}
                />
                <Route
                    path="/users/:user"
                    element={<User user={usersList.users} />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

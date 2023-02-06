import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Users from './pages/Users';
import User from './pages/User';
import NotFound from './components/NotFound';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Users />} />
                <Route path="/:user" element={<User />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

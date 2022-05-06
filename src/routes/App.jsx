import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CleanLayout from '../containers/CleanLayout';
import NavLayout from '../containers/NavLayout';
import Login from '../containers/Login';
import PasswordRecovery from '../containers/PasswordRecovery';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.scss';

const App = () => {
    return (
        <BrowserRouter>
            <CleanLayout>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/password-recovery' element={<PasswordRecovery />} />
                </Routes>
            </CleanLayout>
            <NavLayout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </NavLayout>
        </BrowserRouter>
    );
}

export default App;
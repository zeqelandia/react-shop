import React from 'react';
import NavBar from '../components/NavBar';

const NavLayout = ({children}) => {
    return (
        <div className='Layout'>
            <NavBar />
            {children}
        </div>
    );
}

export default NavLayout;
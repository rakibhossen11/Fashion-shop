import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const PublicMain = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default PublicMain;
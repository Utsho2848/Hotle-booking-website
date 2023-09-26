import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Dashboard/Sidebar';

const DashboardLayout = () => {
    return (
        <div className=' container md:flex relative min-h-screen mx-auto'>
            <Sidebar />
            <div className='flex-1'>
                <div className='p-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
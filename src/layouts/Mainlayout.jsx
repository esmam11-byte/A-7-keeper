import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../pages/footer/Footer';

const Mainlayout = () => {
    return (
        <div >
            <div className='w-[90%] mx-auto flex flex-col gap-6'>

            <Navbar />
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Mainlayout;
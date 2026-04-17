import React from 'react';
import { NavLink } from 'react-router';
import Mylink from './Mylink';
import { FaHome } from 'react-icons/fa';
import { CiClock1 } from 'react-icons/ci';
import { MdOutlineQueryStats } from 'react-icons/md';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-[5%]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Mylink to={'/'} txt="Home" icon={FaHome} />
                        <Mylink to={'/timeline'} txt="Timeline" icon={CiClock1} />
                        <Mylink to={'/stats'} txt="Stats" icon={MdOutlineQueryStats} />
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-black">
                    Keen<span className="text-[#234E3F]">Keeper</span>
                </a>
            </div>

            {/* Changed navbar-center to navbar-end to move items to the right */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">

                    <Mylink to={'/'} txt="Home" icon={FaHome} />
                    <Mylink to={'/timeline'} txt="Timeline" icon={CiClock1} />
                    <Mylink to={'/stats'} txt="Stats" icon={MdOutlineQueryStats} />

                </ul>
            </div>
        </div>
    );
};

export default Navbar;
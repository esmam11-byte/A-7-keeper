import React from 'react';
import { NavLink } from 'react-router';

const Mylink = ({ to, txt, icon: Icon }) => {
    return (
        <NavLink 
            to={to} 
            className={({ isActive }) => 
                `btn btn-sm flex items-center gap-2 border-none transition-all duration-300 ${
                    isActive 
                    ? "bg-[#234E3F] text-white hover:bg-[#1a3a2f]" 
                    : "btn-ghost text-zinc-500 hover:text-[#234E3F]"
                }`
            }
        >
            {/* If you pass an icon component, it renders here */}
            {Icon && <Icon size={18} />}
            <span>{txt}</span>
        </NavLink>
    );
};

export default Mylink;
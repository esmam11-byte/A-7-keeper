import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] text-white flex flex-col items-center p-6'>
            <div className="flex flex-col items-center gap-3 py-10">
                <h1 className='text-white text-4xl'><span className='font-bold'>Keen</span>Keeper</h1>
                <p className='text-gray-300'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                <h3>Socail links</h3>
               <div className='flex gap-10 items-center mt-3'>
    <FaFacebook className='text-white text-3xl opacity-80 hover:text-blue-500 transition cursor-pointer' />
    <FaX className='text-white text-3xl opacity-80 hover:text-black transition cursor-pointer' />
    <FaInstagram className='text-white text-3xl opacity-80 hover:text-pink-500 transition cursor-pointer' />
</div>

            </div>
                <div className="flex text-[70%] gap-80">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <ul className='flex gap-3 items-center'>
                        <li>Privacy Policy </li>
                        <li>  Terms of Service  </li>
                        <li>Cookies</li>
                    </ul>
                </div>
        </div>
    );
};

export default Footer;
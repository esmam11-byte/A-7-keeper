import React from 'react';
import { Link } from 'react-router';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-5 text-center">
            {/* Icon and Error Code */}
            <div className="flex flex-col items-center gap-2 mb-6">
                <HiOutlineExclamationCircle className="text-8xl text-yellow-500 animate-pulse" />
                <h1 className="text-9xl font-black text-[#1A4D3F]">404</h1>
            </div>

            
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Oops! Connection Lost.
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
                We couldn't find the page you're looking for. It might have been moved, 
                or the link might be broken.
            </p>

            {/* Back to Home Button */}
            <Link 
                to="/" 
                className="btn btn-wide bg-[#1A4D3F] hover:bg-[#244D3F] text-white border-none shadow-lg transition-all"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
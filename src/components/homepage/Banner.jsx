import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col gap-3 mt-15 text-center justify-center'>
            <h2 className='text-4xl font-bold' >Friends to keep close in your life</h2>

            <p><small>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</small></p>
            <button className='btn bg-green-800 w-2/11 mx-auto text-white'>+ Add a Friend</button>
        </div>
    );
};

export default Banner;
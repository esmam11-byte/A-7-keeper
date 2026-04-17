import React from 'react';

const DemoCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 '>
            <div className=' p-15 bg-base-200 text-center space-y-3.5'>
                <h2 className='font-semibold text-2xl'>10</h2>
                <h3 className='font-[20%]'>Total Friends</h3>
            </div>
            <div className=' p-15 bg-base-200 text-center space-y-3.5'>
                <h2 className='font-semibold text-2xl'>3</h2>
                <h3 className='font-[20%]'>On Track</h3>
            </div>
            <div className=' p-15 bg-base-200 text-center space-y-3.5'>
                <h2 className='font-semibold text-2xl'>6</h2>
                <h3 className='font-[20%]'>Need Attention</h3>
            </div>
            <div className=' p-15 bg-base-200 text-center space-y-3.5'>
                <h2 className='font-semibold text-2xl'>12</h2>
                <h3 className='font-[20%]'>Interactions This Month</h3>
            </div>
        </div>
    );
};

export default DemoCard;
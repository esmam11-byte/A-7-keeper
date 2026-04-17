import React from 'react';
import Banner from '../../components/homepage/Banner';
import DemoCard from '../../components/homepage/DemoCard';
import AllFriends from '../../components/homepage/AllFriends';

const Homepage = () => {
    return (
        <div className='w-[80%] mx-auto space-y-6'>
            <Banner/>
            <DemoCard />
            <AllFriends />
        </div>
    );
};

export default Homepage;
import React, { use } from 'react';
import FriendCard from '../shared/FriendCard';

const friendData = fetch(`/data.json`).then(res => res.json());

const AllFriends = () => {

    const friends = use(friendData);

    return (
        <div className='flex flex-col gap-3.5'>
            <h2>your friends</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                {
                    friends.map(friend => <FriendCard friend={friend} />)
                }

            </div>
        </div>
    );
};

export default AllFriends;
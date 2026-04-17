import React, { useContext, useState } from 'react';
import { FriendContext } from '../../contexts/FriendContext';
import { HiStar } from 'react-icons/hi';
import TimelineCard from '../../components/shared/TimelineCard';

const Timeline = () => {
    const { interactions,
        callLogs,
        textLogs,
        videoLogs,
        clearHistory

    } = useContext(FriendContext);

    console.log(callLogs, " calldata here")
    console.log(textLogs, " textdata here")
    console.log(videoLogs, " video data here")


    const [filterType, setFilterType] = useState('All');

    const displayData =
        filterType === 'Call' ? callLogs :
            filterType === 'Text' ? textLogs :
                filterType === 'Video' ? videoLogs :
                    interactions;

    return (
        <div className='flex flex-col gap-2.5'>
            <div className="relative inline-block py-8 px-2 overflow-visible">
                <h2 className="text-3xl font-black text-[#1A4D3F] tracking-tight relative z-10">
                    Timeline
                </h2>
                <div className="h-1 w-12 bg-yellow-400 rounded-full mt-1.5 ml-0.5"></div>
            </div>

            {/* Dropdown */}
            <div className="dropdown dropdown-start flex justify-between">
                <div tabIndex={0} role="button" className="btn m-1">
                    {filterType === 'All' ? 'Filter' : filterType} ⬇️
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-sm">
                    <li onClick={() => setFilterType('All')}><a>All Interactions</a></li>
                    <li onClick={() => setFilterType('Call')}><a>Call</a></li>
                    <li onClick={() => setFilterType('Text')}><a>Text</a></li>
                    <li onClick={() => setFilterType('Video')}><a>Video call</a></li>
                </ul>

                <button
                    onClick={clearHistory}
                    className="btn btn-sm btn-outline btn-error opacity-70 hover:opacity-100 mb-8">
                    Clear History
                </button>
            </div>


            <div className='flex flex-col gap-3'>
                {
                    displayData.length > 0 ? (
                        displayData.map(data => (
                            <TimelineCard key={data.id} data={data} />
                        ))
                    ) : (
                        <p className="text-center text-gray-400 py-10">No {filterType} found.</p>
                    )
                }
            </div>

        </div>
    );
};

export default Timeline;
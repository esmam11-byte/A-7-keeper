import React from 'react';

const TimelineCard = ({ data }) => {
    const type = data.type?.toLowerCase() || "";

    return (
        <div className='flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm'>
            
            <div className="flex-shrink-0 text-2xl"> 
                {
                    // Check 'video' FIRST so it doesn't get caught by 'call'
                    type.includes('video') ? '🎥' 
                    : type.includes('call') ? '📞' 
                    : type.includes('text') ? '📩' 
                    : '' 
                }
            </div>

            <div>
                <h2 className='text-sm font-medium text-gray-500'>
                    <span className='text-[#1A4D3F] font-bold capitalize'>{data.type}</span>
                    <span className="ml-1">with {data.friendName}</span>
                </h2>
                <p className='text-xs text-gray-400 mt-0.5'>{data.time}</p>
            </div>
        </div>
    );
};

export default TimelineCard;
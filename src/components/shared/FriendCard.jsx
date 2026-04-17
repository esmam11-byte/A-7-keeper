import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({ friend }) => {
    
    let statusClass = "text-xs px-3 py-1 rounded-full font-bold capitalize text-white";
    if (friend.status === "overdue") {
        statusClass += " bg-[#E64D4D]";
    } else if (friend.status === "almost due") {
        statusClass += " bg-[#F5B757]";
    } else {
        statusClass += " bg-[#1A4D3F]";
    }

    return (
        <Link to={`/frienddetials/${friend.id}`} className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center">
            
            <img 
                src={friend.picture} 
                alt={friend.name} 
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-white shadow-md" 
            />

            <h3 className="text-lg font-black text-[#1A2E35]">
                {friend.name}
            </h3>
            
            <p className="text-xs text-gray-400 mb-3">
                {friend.days_since_contact}d ago
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
                {friend.tags.map((tag, index) => (
                    <span 
                        key={index} 
                        className="bg-[#D1FAE5] text-[#065F46] text-[10px] px-2 py-0.5 rounded-md font-bold uppercase"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className={statusClass}>
                {friend.status}
            </div>
        </Link>
    );
};

export default FriendCard;
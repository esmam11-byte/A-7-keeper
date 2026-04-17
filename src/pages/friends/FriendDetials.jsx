import React, { useContext } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import FriendCard from '../../components/shared/FriendCard';
import { LuBellPlus, LuHistory, LuUsers } from 'react-icons/lu';
import { IoArchiveOutline, IoCallOutline, IoChatbubbleOutline, IoVideocamOutline } from 'react-icons/io5';
import { MdDeleteOutline, MdOutlinePeopleAlt } from 'react-icons/md';
import { FriendContext } from '../../contexts/FriendContext';

const FriendDetails = () => {
    const { id } = useParams();
    const loader = useLoaderData();
    const expectedFriend = loader.find(f => f.id == id);

    const {handleInteractinos} = useContext(FriendContext);

    if (!expectedFriend) return <div className="text-center mt-20">Loading...</div>;

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 w-[95%] lg:w-[85%] mx-auto mt-10 gap-8'>

            {/* Left Side: Profile & Actions */}
            <div className='md:col-span-1 text-center'>
                <div className='border border-gray-100 rounded-2xl text-center bg-white shadow-sm overflow-hidden'>
                    <FriendCard friend={expectedFriend} />
                    <div className='p-6 bg-gray-50/50  border-t border-gray-100'>
                        <h4 className='text-sm font-bold text-gray-700 text-left mb-2'>Biography</h4>
                        <p className='text-sm text-gray-500 text-left leading-relaxed'>{expectedFriend.bio}</p>
                    </div>
                </div>

                <div className='flex flex-col gap-3 mt-6 text-center'>
                    <button className='btn btn-ghost bg-gray-100 text-gray-700 border-none hover:bg-gray-200'>
                        <LuBellPlus className="text-lg" /> Snooze 2 weeks
                    </button>
                    <button className='btn btn-ghost bg-gray-100 text-gray-700 border-none hover:bg-gray-200'>
                        <IoArchiveOutline className="text-lg" /> Archive Friend
                    </button>
                    <button className='btn btn-outline btn-error'>
                        <MdDeleteOutline className="text-lg" /> Delete Contact
                    </button>
                </div>
            </div>

            {/* Right Side: Dashboard Data */}
            <div className='md:col-span-2 space-y-6'>

                {/* 1. Top Stats Cards */}
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                    <div className='bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm'>
                        <h1 className='text-4xl font-black text-[#1A4D3F]'>{expectedFriend.days_since_contact}</h1>
                        <p className='text-gray-500 text-sm mt-1'>Days Since Contact</p>
                    </div>

                    <div className='bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm'>
                        <h1 className='text-4xl font-black text-[#1A4D3F]'>{expectedFriend.goal}</h1>
                        <p className='text-gray-500 text-sm mt-1'>Goal (Days)</p>
                    </div>
                    <div className='bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm'>
                        <h1 className='text-2xl font-black text-[#1A4D3F] mt-2'>{expectedFriend.next_due_date}</h1>
                        <p className='text-gray-500 text-sm mt-3'>Next Due</p>
                    </div>
                </div>

                {/* 2. Relationship Goal Section */}
                <div className='bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex justify-between items-center'>
                    <div>
                        <h3 className='font-bold text-[#1A4D3F] flex items-center gap-2'>
                            <MdOutlinePeopleAlt /> Relationship Goal
                        </h3>
                        <p className='text-gray-600 mt-1'>Connect every <span className='font-black text-black'>{expectedFriend.goal} days</span></p>
                    </div>
                    <button className='btn btn-sm btn-ghost bg-gray-100 px-4'>Edit</button>
                </div>

                {/* 3. Quick Check-In */}
                <div>
                    <h3 className='font-bold text-[#1A4D3F] mb-3'>Quick Check-In</h3>
                    <div className='grid grid-cols-3 gap-4'>
                        <Link 
                        onClick={()=> handleInteractinos('Call' , expectedFriend.name)}
                        className='bg-gray-50 border border-gray-100 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-white hover:shadow-md transition-all'>
                            <IoCallOutline className='text-2xl' /> <span className='text-sm font-medium'>Call</span>
                        </Link>

                        <Link 
                        onClick={()=> handleInteractinos('Text' , expectedFriend.name)}
                        className='bg-gray-50 border border-gray-100 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-white hover:shadow-md transition-all'>
                            <IoChatbubbleOutline className='text-2xl' /> <span className='text-sm font-medium'>Text</span>
                        </Link>

                        <Link 
                        onClick={()=> handleInteractinos('Video' , expectedFriend.name)}
                        className='bg-gray-50 border border-gray-100 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-white hover:shadow-md transition-all'>
                            <IoVideocamOutline className='text-2xl' /> <span className='text-sm font-medium'>Video</span>
                        </Link>
                    </div>
                </div>

        

            </div>
        </div>
    );
};

export default FriendDetails;
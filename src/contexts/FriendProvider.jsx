import React, { useState } from 'react';
import { FriendContext } from './FriendContext';
import { toast } from 'react-toastify';

const FriendProvider = ({ children }) => {

    const savedData = JSON.parse(localStorage.getItem(`my_data`) || `[]`);
    const [interactions, setInteractions] = useState(savedData);

    const callLogs = interactions.filter(item => item.type === 'Call');
    const textLogs = interactions.filter(item => item.type === 'Text');
    const videoLogs = interactions.filter(item => item.type === 'Video');


    const handleInteractinos = (type, friendName) => {

        const simpleDate = new Date().toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        const newEntry = {
            id: Date.now(),
            type: type,
            friendName: friendName,
            title: `${type} with ${friendName}`,
            time: simpleDate
        }


        const updatedList = [...interactions, newEntry];
        setInteractions(updatedList);
        localStorage.setItem(`my_data`, JSON.stringify(updatedList));

        toast.success(`${type} recorded!`);
    }

    const clearHistory = () => {

        setInteractions([]);
        localStorage.removeItem('my_data');
        toast.info("History cleared successfully!");
    };




    const data = {
        handleInteractinos,
        interactions,
        setInteractions,
        callLogs,
        textLogs,
        videoLogs,
        clearHistory
    }

    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>
};

export default FriendProvider;
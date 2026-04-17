import React, { useContext } from 'react';
import { FriendContext } from '../../contexts/FriendContext';
import { Pie, PieChart, Cell, Legend, ResponsiveContainer } from 'recharts';

const Stats = () => {

    const {
        callLogs,
        textLogs,
        videoLogs

    } = useContext(FriendContext);

    const data = [
        { name: "Text", value: textLogs.length },
        { name: "Call", value: callLogs.length },
        { name: "Video", value: videoLogs.length }
    ]

    const COLORS = ['#8B5CF6', '#1F4D3F', '#34D399'];

    return (
        <div className="p-8 bg-[#F8FAFC] min-h-screen">
            <h1 className="text-4xl font-bold text-[#1F2937] mb-8">Friendship Analytics</h1>

            <div className="bg-white p-10 rounded-xl border-2 border-dashed border-blue-400 max-w-4xl mx-auto shadow-sm">
                <p className="text-[#1F4D3F] font-semibold mb-6">By Interaction Type</p>

                {/* Chart here */}
                <div className="w-full flex justify-center h-[350px]">
                    
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius={80} 
                                outerRadius={110}
                                cornerRadius={10} 
                                paddingAngle={10} 
                                dataKey="value" 
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        
                            <Legend iconType="circle" verticalAlign="bottom" align="center" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    );
};

export default Stats;
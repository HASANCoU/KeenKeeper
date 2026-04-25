import Image from 'next/image';
import React from 'react';

const History = ({notification}) => {
    const {name,action,time,icon} = notification;
    return (
        <div className="flex items-center gap-4 p-6 shadow-2xs bg-white rounded-xl">
        <div><Image src={icon} alt="Video Logo" width={40} height={40}></Image></div>
        <div className="text-[#65748B] text-[18px]">
            <h2><span className="font-semibold text-xl text-[#244D3F]">{action}</span> with {name}</h2>
            <p>{time}</p>
        </div>
      </div>
    );
};

export default History;
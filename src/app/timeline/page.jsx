"use client";
import React from "react";
import { useGlobalContext } from "../context/GlobalContextProvider";
import History from "../components/History";


const TimelinePage = () => {
  const { logInfo, setLogInfo } = useGlobalContext();
  const {search,setSearch} = useGlobalContext();
  const notifications = logInfo;
  return (
    <div className="w-9/12 mx-auto my-10">
      <div>
        <h2 className="text-5xl font-bold text-[#1F2937]">Timeline</h2>

        <div className="pl-2">
          <input
            type="text"
            placeholder="Filter Timeline"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered bg-[#E9E9E9] text-[#64748B] text-[16px] my-4"

          />
        </div>
      </div>
      <div className="space-y-4">
        {
            notifications.map((notification,idx)=><History key={idx} notification={notification}/>)
        }
      </div>
      

    </div>
  );
};

export default TimelinePage;

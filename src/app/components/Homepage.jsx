import React from "react";
import Friends from "./Friends";

const Homepage = async() => {
  const res = await fetch("http://localhost:3000/data.json");
  const friends = await res.json();
  return (
    <div className="w-9/12 mx-auto mt-20 mb-10">

      <div className="flex text-center flex-col space-y-8">
        <h2 className="font-bold text-5xl">
          Friends to keep close in your life
        </h2>
        <p className="text-[#64748B] text-[16px] w-10/12 mx-auto text-center">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br/> relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] rounded-xs w-32 mx-auto">+ Add Friends</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20">
        <div className="flex flex-col text-center bg-white shadow-xl space-y-2 rounded-2xl py-10">
            <h2 className="font-semibold text-4xl text-[#244D3F]">{friends.length}</h2>
            <p className="text-[#64748B] text-xl">Total Friends</p>
        </div>
        <div className="flex flex-col text-center bg-white shadow-xl space-y-2 rounded-2xl py-10">
            <h2 className="font-semibold text-4xl text-[#244D3F]">3</h2>
            <p className="text-[#64748B] text-xl">On Track</p>
        </div>
        <div className="flex flex-col text-center bg-white shadow-xl space-y-2 rounded-2xl py-10">
            <h2 className="font-semibold text-4xl text-[#244D3F]">6</h2>
            <p className="text-[#64748B] text-xl">Need Attention</p>
        </div>
        <div className="flex flex-col text-center bg-white shadow-xl space-y-2 rounded-2xl py-10">
            <h2 className="font-semibold text-4xl text-[#244D3F]">12</h2>
            <p className="text-[#64748B] text-xl">Interactions This Month</p>
        </div>
      </div>
      <hr className="border-[#E9E9E9] my-10"/>
      <div>
        <h2 className="font-semibold text-2xl text-[#1F2937] mb-2">Your Friends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
          friends.map(friend=><Friends key={friend.id} friend={friend}/>)
        }
      </div>
      </div>

    </div>
  );
};

export default Homepage;

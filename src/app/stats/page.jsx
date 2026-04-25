"use client";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useGlobalContext } from "../context/GlobalContextProvider";
const data = [
  { name: "Text", value: 30 },
  { name: "Call", value: 45 },
  { name: "Video", value: 25 },
];
const COLORS = ["#7C3AED", "#1F4D3F", "#22C55E"];
const StatsPage = () => {
  const { logInfo } = useGlobalContext();
  return (
    <div className="w-9/12 mx-auto my-20 space-y-8">
      <h2 className="text-5xl font-bold text-[#1F2937]">
        Friendship Analytics
      </h2>
      <div className="bg-white rounded-2xl p-8 space-y-3">
        <h2 className="font-medium  text-xl text-[#244D3F]">
          By Interaction Type
        </h2>
        <div className=" flex justify-center items-center ">

        <PieChart width={400} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70} // 🔥 makes it donut
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {logInfo.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      </div>
      
    </div>
  );
};

export default StatsPage;

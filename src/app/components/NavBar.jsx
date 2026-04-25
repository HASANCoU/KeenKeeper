'use client'
import { ChartLine, Clock3, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
    const pathName = usePathname();
  return (
    <div className="navbar flex justify-between rounded-none gap-4 bg-white flex-col md:flex-row items-center -base-100  py-4 px-6 ">
      <div className="flex-1">
        <Link href="/">
        <h2 className="font-bold text-3xl text-black">Keen<span className="text-[#244D3F]">Keeper</span></h2>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-[16px] font-semibold flex gap-4 justify-center items-center">
          <li>
            <Link href="/" className={`${pathName==='/'?'active':'not-active'} flex gap-1 items-center`}>
            <Home/>
            Home</Link>
          </li>
          <li>
            <Link href="/timeline" className={`${pathName==='/timeline'?'active':'not-active'} flex gap-1 items-center`}>
            <Clock3/>
            Timeline</Link>
          </li>
          <li>
            <Link href="/stats" className={`${pathName==='/stats'?'active':'not-active'} flex gap-1 items-center`}>
            <ChartLine/>
            Stats</Link>
          </li>
          
          
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

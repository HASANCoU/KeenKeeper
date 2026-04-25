import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-base-content rounded p-10">
        <h1 className="text-5xl font-extrabold">KeenKeeper</h1>
        <p className="text-[16px]">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
      
      <nav>
        <h2 className="text-xl">Social Links</h2>
        <div className="grid grid-flow-col gap-4">
          <Link href=''><Image src="/assets/instagram.png" alt='Instagram' width={30} height={30}></Image></Link>
          <Link href=''><Image src="/assets/facebook.png" alt='Instagram' width={30} height={30}></Image></Link>
          <Link href=''><Image src="/assets/twitter.png" alt='Instagram' width={30} height={30}></Image></Link>
        </div>
      </nav>
      <hr className="border-0.5 border-gray-600 w-full mt-10"></hr>
      <aside className="flex justify-between flex-col md:flex-row gap-10 md:gap-15 lg:gap-50 items-center">
        <p>
         © 2026 KeenKeeper. All rights reserved.
        </p>
        <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Terms Of Service</a>
        <a className="link link-hover">Cookies</a>
      </nav>
      </aside>
    </footer>
  );
};

export default Footer;

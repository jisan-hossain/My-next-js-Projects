"use client"
import Image from 'next/image';
import React, { useContext } from 'react';
import logo from "@/assets/logo.png"
import Link from 'next/link';
import { FitContext } from './context/FitlogContex';

const Navber = () => {
  const { todaysPlan, saveForLater } = useContext(FitContext) || {
    todaysPlan: [],
    saveForLater: [],
  };

  const planCount = todaysPlan ? todaysPlan.length : 0;
  const saveCount = saveForLater ? saveForLater.length : 0;

  const links = <>
    <li>
      <Link href="/workOutPage" className="hover:text-[#C2F800] transition">
        Workouts
      </Link>
    </li>
    <li>
      <Link href="/myPlan" className="hover:text-[#C2F800] transition">
        My plan
      </Link>
    </li>
  </>;

  return (
    <div className="navbar bg-base-100 shadow-sm px-2 md:px-6 sticky top-0 z-50">
      {/* Start: Mobile Dropdown & Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-[#17191f] border border-gray-800 rounded-box z-50 mt-3 w-52 p-2 shadow-xl">
            {links}
          </ul>
        </div>
        
        <Link href="/" className='flex items-center gap-1.5 cursor-pointer ml-1 md:ml-0'>
          <Image src={logo} alt="logo" width={26} height={26} />
          <span className="btn btn-ghost text-lg md:text-xl text-white px-0 hover:bg-transparent">FITLOG</span>
        </Link>
      </div>

      {/* Center: Desktop Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      {/* End: Dynamic Plan & Saved Count */}
      <div className="navbar-end flex items-center font-bold gap-3 md:gap-4 text-xs md:text-sm pr-1 md:pr-0">
        <Link href="/myPlan" className="hover:text-[#C2F800] transition flex items-center gap-1 cursor-pointer bg-[#1f232b] px-2.5 py-1.5 rounded-md border border-gray-800">
          Plan <span className="text-[#C2F800]">{planCount}</span>
        </Link>
        <Link href="/myPlan" className="hover:text-[#C2F800] transition flex items-center gap-1 cursor-pointer bg-[#1f232b] px-2.5 py-1.5 rounded-md border border-gray-800">
          saved <span className="text-gray-300">{saveCount}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navber;
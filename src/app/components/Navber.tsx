"use client"
import Image from 'next/image';
import React, { useContext } from 'react';
import logo from "@/assets/logo.png"
import Link from 'next/link';
import { FitContext } from './context/FitlogContex';
const Navber = () => {
  const {todaysPlan , saveForLater} = useContext(FitContext)|| {
    todaysPlan : [],
    saveForLater : [],
  }
const planCount = todaysPlan ? todaysPlan.length: 0;
const saveCount = saveForLater ? saveForLater.length : 0 ;
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
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
     {links}
      </ul>
    </div>
<div className='flex items-center gap-1'>
      <Image src={logo} alt="logo" width={26} />
    <a className="btn btn-ghost text-xl text-white">FITLOG</a>
</div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end flex items-center font-bold gap-3.5">
    <Link href="/myPlan" className="hover:text-[#C2F800] transition flex items-center gap-1 cursor-pointer">
      Plan <span className="text-[#C2F800]">{planCount}</span>
    </Link>
    <Link href="/myPlan" className="hover:text-[#C2F800] transition flex items-center gap-1 cursor-pointer">
      saved <span className="text-gray-300">{saveCount}</span>
    </Link>
  </div>
</div>
    );
};

export default Navber;
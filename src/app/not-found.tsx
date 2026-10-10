import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0e1014] text-white flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-8xl font-black text-[#C2F800] tracking-widest">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold mt-4 uppercase">
        Page Not Found
      </h2>
      <p className="text-gray-400 mt-2 max-w-md text-sm md:text-base leading-relaxed">
        The workout or page you are looking for does not exist in the FitLog library.
      </p>
      <Link 
        href="/" 
        className="mt-8 bg-[#C2F800] text-black font-bold px-6 py-3.5 rounded-xl hover:opacity-90 transition text-sm cursor-pointer"
      >
        GO BACK HOME
      </Link>
    </div>
  );
}
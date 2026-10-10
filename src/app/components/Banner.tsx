import Image from 'next/image';
import React from 'react';
import bannerImage from "@/assets/banner.png"
export default function Hero() {
  return (
    <section className="bg-[#0e1014] text-white py-12 md:py-20 px-4 md:px-8 border-b border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <span className="text-[#C2F800] font-bold text-xs uppercase tracking-widest bg-[#17191f] px-3 py-1.5 rounded-full border border-gray-800">
            WORKOUT LIBRARY
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight uppercase font-sans">
            TRAIN WITH INTENT. <br /> LOG EVERY SET.
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
          </p>
          <a
            href="#library"
            className="inline-flex items-center gap-2 bg-[#C2F800] text-black font-bold px-6 py-3.5 rounded-xl hover:opacity-90 transition text-sm cursor-pointer"
          >
            BROWSE WORKOUTS ↓
          </a>
        </div>

        {/* Right Banner Image (Skeleton/Anatomy theme) */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md h-72 md:h-96 rounded-2xl overflow-hidden border border-gray-800 bg-[#17191f]">
             <Image 
                src={bannerImage} 
                alt="FitLog Skeleton Banner" 
                className="object-cover w-full h-full opacity-90 hover:scale-105 transition duration-500" 
                height={300} width={300}
             />
          </div>
        </div>

      </div>
    </section>
  );
}
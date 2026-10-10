import Image from 'next/image';
import React from 'react';
import banner from "@/assets/banner.png"
const BannerSection = () => {
    return (
        <div className='container mx-auto bg-[#222630]  rounded-3xl p-5 my-10'>



 <div className='flex justify-between my-10'>


       <div>
               <p>
             <span className='font-bold text-[#C2F800] uppercase tracking-wide '>WORKOUT LIBRARY</span>
           </p>

            <h2 className='text-5xl font-bold text-white my-5'>TRAIN WITH INTENT. LOG <br /> EVERY SET.</h2>
              
            <p className='my-4'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> into today's plan, and watch the week's work add up.</p>
             
            <button className='btn bg-[#C2F800] font-bold text-black my-6'>BROWSE WORKOUTS</button>
        </div>



        <div>
            <Image src={banner} alt='banner img' width={350} height={400} ></Image>
        </div>


 </div>



        </div>
    );
};

export default BannerSection;
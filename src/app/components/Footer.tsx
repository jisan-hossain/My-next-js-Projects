import Image from 'next/image';
import React from 'react';
import logo from "@/assets/logo.png"
const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral border-t border-gray-800 text-gray-400  items-center container mx-auto my-10 flex justify-between items-center py-7">
  <div className='flex gap-2 items-center'>
    <Image src={logo} alt='logo' width={25} height={25}></Image>
    <h2 className='font-bold text-white'>FITLOG</h2>
  </div>
<div>
<p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
</div>
</footer>
    );
};

export default Footer;
import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.svg";
import Link from "next/link";

function Header() {
  return (
    <nav className='@container max-w-screen-xl mx-auto fixed top-0 left-0 right-0 z-50 h-'>
      <div className='bg-gray-950/20 backdrop-blur-md px-5 w-full flex items-center justify-between gap-5 py-5 '>
        <Link href='/' className='font-medium text-lg '>
          <Image src={Logo} alt='Bank logo' width={140} height={100} />
        </Link>
        <div className='md:flex gap-4 hidden '>
          <Link href='/' className='font-medium text-lg'>
            Home
          </Link>
          <Link href='/' className='font-medium text-lg'>
            Our solutions
          </Link>
          <Link href='/' className='font-medium text-lg'>
            Contact us
          </Link>
          <Link href='/' className='font-medium text-lg'>
            Blog
          </Link>
        </div>

        <button className=' bg-accent text-gray-950 font-bold py-2 px-4 rounded-md'>
          Book a demo
        </button>
      </div>
    </nav>
  );
}

export default Header;

import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.svg";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { SheetDemo } from "./SheetDemo";

function Header() {
  return (
    <nav>
      <div className=' px-5 w-full flex items-center justify-between gap-5 py-5 '>
        <Link href='/' className='font-medium text-lg '>
          <Image src={Logo} alt='Bank logo' width={140} height={100} />
        </Link>
        <div className='hidden md:flex justify-between flex-1 items-center'>
          <div className='md:flex gap-4 hidden flex-1 items-center justify-center'>
            <Link
              href='/'
              className='font-medium text-lg hover:text-accent transition-all duration-75'
            >
              Home
            </Link>
            <Link
              href='/'
              className='font-medium text-lg hover:text-accent transition-all duration-75'
            >
              Our solutions
            </Link>
            <Link
              href='/'
              className='font-medium text-lg hover:text-accent transition-all duration-75'
            >
              Contact us
            </Link>
            <Link
              href='/'
              className='font-medium text-lg hover:text-accent transition-all duration-75'
            >
              Blog
            </Link>
          </div>

          <button className=' bg-accent text-gray-950 font-bold py-2 px-4 rounded-md'>
            Book a demo
          </button>
        </div>
        <div className='md:hidden flex items-center justify-between'>
          <SheetDemo />
        </div>
      </div>
    </nav>
  );
}

export default Header;

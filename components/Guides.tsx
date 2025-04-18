import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import Logo from "@/assets/favicon.png";

function Guides() {
  return (
    <section className='mt-10 px-5'>
      <div className='flex items-center justify-center mb-12 '>
        <div className='flex justify-between items-center p-2 font-bold text-center  rounded-lg border border-gray-800/10 gap-5'>
          <Image src={Logo} alt='Welcome Account Logo' width={40} height={40} />
          <p className=' text-gray-800'>Guides</p>
        </div>
      </div>
      <Card className='bg-gradient-to-br from-secondary to-primary px-5 py-10 rounded-lg shadow-lg '>
        <h1 className='text-white text-4xl font-bold md:max-w-2/4  '>
          Bank Smarter. Save Faster. Invest Better.
        </h1>
        <div className='flex  flex-col md:flex-row justify-center items-center gap-5'>
          <div className='bg-white/15 border border-gray-50/10 rounded-lg shadow-lg p-5  backdrop-blur-sm'>
            <h1 className='text-7xl text-transparent bg-clip-text bg-gradient-to-b from-gray-500/5 from-25% to-white font-bold'>
              1
            </h1>
            <h3 className='text-accent font-bold text-2xl'>
              Create an account
            </h3>
            <p className='text-gray-300'>
              Create your account in just 2 easy and quick minutes.
            </p>
          </div>
          <div className='bg-white/15   border border-gray-50/10 rounded-lg shadow-lg p-5  backdrop-blur-sm'>
            <h1 className='text-7xl text-transparent bg-clip-text bg-gradient-to-b from-gray-500/5 from-25% to-white font-bold'>
              2
            </h1>
            <h3 className='text-accent font-bold text-2xl'>
              Create an account
            </h3>
            <p className='text-gray-300'>
              Create your account in just 2 easy and quick minutes.
            </p>
          </div>
          <div className='bg-white/15   border border-gray-50/10 rounded-lg shadow-lg p-5 '>
            <h1 className='text-7xl text-transparent bg-clip-text bg-gradient-to-b from-gray-500/5 from-25% to-white font-bold'>
              3
            </h1>
            <h3 className='text-accent font-bold text-2xl'>
              Create an account
            </h3>
            <p className='text-gray-300'>
              Create your account in just 2 easy and quick minutes.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default Guides;

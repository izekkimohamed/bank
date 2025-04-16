import Header from "@/components/Header";
import Image from "next/image";
import HeroImage from "@/assets/hero_image.png";

export default function Home() {
  return (
    <div className='h-full w-full relative py-5'>
      <Header />
      <div className='@container max-w-screen-xl flex items-center justify-between mx-auto gap-5'>
        <section className='mt-20 px-5 flex flex-col md:flex-row gap-y-10 justify-evenly gap-5 bg-gray-950/20 p-5 rounded-xl'>
          <div className='flex flex-col gap-10 items-baseline justify-center  flex-1/2'>
            <h1 className='text-accent text-5xl font-bold'>Welcome Account</h1>
            <h3 className=' md:text-4xl text-2xl font-bold   leading-12 max-w-3/4'>
              A multilingual current account for your international employees
            </h3>
            <p className='text-lg text-gray-400'>
              Make it easy for your international employees to open a payment
              account, and save your HR team valuable time!
            </p>
            <form
              action='#'
              className='flex bg-gray-950/50 rounded-xl gap-5 items-center text-gray-950 text-lg font-bold
p-3 ring-1 ring-accent/50
             '
            >
              <input
                type='text'
                placeholder='Email Address'
                className='
                  px-5 py-2 border-2
                  text-gray-200
                  border-gray-500 rounded-lg
                 placeholder-gray-500 border-none focus:outline-none focus:ring-0'
              />

              <button className='bg-accent text-gray-950 text-lg font-bold  rounded-lg  px-5 py-2'>
                Book a demo
              </button>
            </form>
          </div>
          <div className='flex-1/2'>
            <Image src={HeroImage} alt='Bank Account' layout='cover' />
          </div>
        </section>
      </div>
    </div>
  );
}

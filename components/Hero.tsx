import Header from "@/components/Header";
import Image from "next/image";
import HeroImage from "@/assets/phone-mock.png";
import MicrosoftImage from "@/assets/sponsors/microsoft.png";
import VisaImage from "@/assets/sponsors/visa.png";
import OkaliImage from "@/assets/sponsors/okali.png";
import StationImage from "@/assets/sponsors/station.png";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
function Hero() {
  return (
    <Card className='py-0 bg-linear-120 from-primary to-gray-950 from-30% to-85%  rounded-b-none rounded-t-none md:rounded-t-md shadow-md'>
      <div className='text-muted'>
        <Header />
        <div className='flex justify-between items-center gap-10 md:gap-5 flex-col md:flex-row '>
          <div className='flex flex-col justify-center items-start px-5  gap-3 pb-2'>
            <h2 className='text-sm bg-white/5 p-2 border border-gray-300/20 rounded-md '>
              Welcome Account
            </h2>
            <h1 className='text-xl md:text-5xl  font-bold tracking-wide leading-tight max-w-3/4'>
              A multilingual current account for your{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-b from-70% to-90% from-accent  to-black font-bold text-xl md:text-6xl'>
                international
              </span>{" "}
              employees
            </h1>
            <p className='text-sm font-medium md:max-w-3/4 text-gray-500'>
              Make it easy for your international employees to open a payment
              account, and save your HR team valuable time!
            </p>
            <form action='#' className='w-full md:max-w-3/4 lg:max-w-2/4'>
              <Label className='flex items-center gap-2 bg-white p-1 md:p-3 rounded-md flex-1'>
                <Input
                  type='email'
                  placeholder='Enter your email'
                  className='text-sm  border-0 focus-visible:ring-0 focus-visible:border-0 active:right-0 active:border-0 text-primary shadow-none'
                />
                <Button type='submit' className='bg-accent text-primary '>
                  Get Started
                </Button>
              </Label>
            </form>
            <div className=' w-full '>
              <p className='text-md text-gray-300 font-bold  px-2 '>
                sponsored by:
              </p>
              <div className='flex items-center justify-center md:justify-between md:max-w-3/4 gap-1 md:gap-3 relative mask  overflow-hidden md:px-3'>
                <Image
                  src={VisaImage}
                  alt='Visa'
                  className='size-20 md:size-30  object-center object-contain'
                />
                <Image
                  src={MicrosoftImage}
                  alt='Microsoft'
                  className='size-20 md:size-30  object-center object-contain'
                />
                <Image
                  src={OkaliImage}
                  alt='Okali'
                  className='size-20 md:size-30  object-center object-contain'
                />
                <Image
                  src={StationImage}
                  alt='Station'
                  className='size-20 md:size-30  object-center object-contain'
                />
              </div>
            </div>
          </div>
          <Image
            src={HeroImage}
            alt='Hero Image'
            width={500}
            // height={600}
            className='self-end'
            // objectFit=''
          />
        </div>
      </div>
    </Card>
  );
}

export default Hero;

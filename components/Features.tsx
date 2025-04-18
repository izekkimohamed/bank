import { Landmark } from "lucide-react";
import React from "react";
import { CreditCard, Languages } from "lucide-react";
import Logo from "@/assets/favicon.png";
import Image from "next/image";

const Features: React.FC = () => {
  const features = [
    {
      title: "French IBAN",
      description:
        "A payment account with a French IBAN is essential to enable your international employees to be paid by your company.",
      icon: <Landmark name='bank' size={50} className='text-primary' />,
    },
    {
      title: "Visa Card",
      description: "A Visa payment card available worldwide.",
      icon: <CreditCard name='visa' size={50} className='text-primary' />,
    },
    {
      title: "Multilingual Application",
      description: "An ultra-customized, multilingual application.",
      icon: <Languages name='globe' size={50} className='text-primary' />,
    },
  ];

  return (
    <section className='p-4 px-10 md:px-20 space-y-12 mx-auto bg-white'>
      <div className='flex items-center justify-center mb-12 '>
        <div className='flex justify-between items-center p-2 font-bold text-center  rounded-lg border border-gray-800/10 gap-5'>
          <Image src={Logo} alt='Welcome Account Logo' width={40} height={40} />
          <p className=' text-gray-800'>Advantages</p>
        </div>
      </div>
      <div className='flex  flex-col md:flex-row justify-between items-center '>
        <h2 className='text-5xl font-bold mb-4 md:max-w-3/4'>
          {" "}
          Easy access, pleasant experience
        </h2>
        <p className='text-gray-600 text-center md:text-end before:content-[""] before:block before:w-1/2 before:h-1 before:bg-primary before:rounded-full before:mb-2 before:mx-auto md:before:ml-auto'>
          Welcome Account makes it easy for your international employees to
          manage their finances in total security.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
        {features.map((feature, index) => (
          <div
            key={index}
            className='relative bg-gradient-to-br from-gray-100 to-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
          >
            <div className='bg-white rounded-md w-20 h-16 flex items-center justify-center absolute -top-8 left-10 border border-gray-800/10 transform  shadow-lg'>
              {feature.icon}
            </div>
            <h1 className='text-xl font-bold text-primary mt-8'>
              {feature.title}
            </h1>
            <p className='text-gray-600 mt-2'>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

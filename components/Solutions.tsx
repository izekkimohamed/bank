import Image from "next/image";
import PhoneDemo from "@/assets/phone-demo.png";

const Solutions: React.FC = () => {
  const features = [
    {
      title: "Budget management",
      description:
        "It analyzes expenses and revenues to provide an overview of the budget.",
    },
    {
      title: "Recommendations",
      description:
        "It offers goods and services to facilitate integration in France.",
    },
    {
      title: "Administrative assistance",
      description:
        "It provides advice to make administrative procedures easier to understand.",
    },
  ];

  return (
    <section className='p-8 bg-gray-50 md:px-20 space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
        {features.map((feature, index) => (
          <div
            key={index}
            className='p-6 bg-gradient-to-br from-gray-100 to-gray-300  rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300'
          >
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              {feature.title}
            </h3>
            <p className='text-gray-600'>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-2 md:grid-cols-2 place-items-center gap-10 relative  md:mt-20 bg-gradient-to-br from-gray-100 to-gray-300 shadow-lg md:py-20 md:p-15 rounded-lg'>
        <Image
          src={PhoneDemo}
          alt='Phone demo showing multilingual chat interface'
          className='z-10 left-1/12 -top-24 -rotate-12 size-50 md:absolute md:size-100'
        />
        <div className='hidden md:block'></div>
        <div className='flex flex-col justify-center items-center md:justify-end gap-2 ml-10'>
          <h2 className='text-3xl font-bold text-gray-800'>Multilingual</h2>
          <p className='text-gray-600'>
            It allows you to communicate in the language of your choice to
            better manage your finances.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

import Image from 'next/image';
import CompanySVG from '../../public/assets/images/delivery-boy.svg';

const Company = () => {
  return (
    <div
      className="flex flex-col bg-vetor-blue bg-cover py-36 lg:px-4 
    md:justify-center items-center lg:h-screen"
    >
      <div className="flex flex-col lg:w-1/2 container">
        <Image
          className="block lg:h-full w-80 mb-12 ml-10"
          src={CompanySVG}
          alt="Muve Logo"
          quality={100}
        />
      </div>
    </div>
  );
};

export default Company;

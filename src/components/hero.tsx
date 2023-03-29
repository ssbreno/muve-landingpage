import Image from 'next/image';
import { config } from '../config';
import Muve from '../../public/assets/images/logo.svg';

export function Hero() {
  const { mainContent, menuContent } = config;
  return (
    <main
      className="flex overflow-x-hidden w-full bg-vetor-blue bg-cover md:px-16 lg:px-4 
    md:justify-center items-center lg:h-screen h-screen"
    >
      <div className="flex flex-col lg:w-1/2 justify-center items-center sm:w-[50%] container">
        <Image
          src={Muve}
          className="md:w-4/5 mb-4 w-90"
          alt="Muve Logo"
          quality={100}
        />
        <p className="text-gray-800  font-machina  font-bold lg:text-5xl text-xl ">
          {mainContent}
        </p>
        <p className="text-gray-800  font-machina -mt-[1.2rem] font-normal text-base">
          {menuContent}
        </p>
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <img
          src="assets/images/app-photos/deliveryman.png"
          className="w-[40%] blend-multiply"
        />
      </div>
    </main>
  );
}

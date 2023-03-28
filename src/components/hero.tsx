import Image from 'next/image';
import { config } from '../config';
import Muve from '../../public/assets/images/logo.svg';
import { TypingText } from './client-components/typingText';

export function Hero() {
  const { mainContent, menuContent } = config;
  return (
    <main
      className="flex flex-col bg-vetor-blue mr-4 bg-cover w-screen md:px-6 lg:px-4 
    md:justify-center items-center lg:h-screen "
    >
      <div className="flex flex-col lg:w-1/2 w-1/2 pt-20 container ">
        <Image
          src={Muve}
          className="md:w-4/5 w-3/5 sm:mt-20 self-center "
          alt="Muve Logo"
          quality={100}
        />
        <p className="text-gray-800 self-center font-machina mt-12 font-bold lg:text-5xl">
          {mainContent}
        </p>
        <p className="text-gray-800 self-center font-machina font-normal text-base">
          {menuContent}
        </p>
      </div>
    </main>
  );
}

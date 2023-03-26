import Image from 'next/image';
import { config } from '../config';
import Muve from '../../public/assets/images/logo.svg';
import { TypingText } from './client-components/typingText';

export function Hero() {
  const { mainContent, menuContent } = config;
  return (
    <main
      className="flex flex-col bg-vetor-blue bg-cover py-36 -mt-20 px-6 lg:px-4 
    md:justify-center items-center lg:h-screen"
    >
      <div className="flex flex-col lg:w-1/2 container">
        <Image
          src={Muve}
          className="md:w-4/5 sm:mt-20 animate-pulse"
          alt="Muve Logo"
          quality={100}
        />
        <TypingText
          text={mainContent}
          className="font-poppins font-normal lg:text-5xl"
        />
        <TypingText
          text={menuContent}
          className="font-machina font-normal text-base"
        />
      </div>
    </main>
  );
}

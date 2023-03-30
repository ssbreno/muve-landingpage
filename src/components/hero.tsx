import Image from 'next/image';
import { config } from '../config';
import Muve from '../../public/assets/images/logo.svg';
import TypingText from './client-components/typingText';

export function Hero() {
  const { mainContent } = config;
  return (
    <main
      id="home"
      className="flex overflow-x-hidden flex-col bg-vetor-blue bg-cover md:px-6 lg:px-4 
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
        <TypingText />
      </div>
    </main>
  );
}

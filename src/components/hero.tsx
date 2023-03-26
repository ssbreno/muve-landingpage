import Image from 'next/image';
import { config } from '../config';
import Muve from '../../public/assets/images/logo.svg';

export function Hero() {
  const { mainContent, menuContent } = config;
  return (
    <main
      className="container mx-auto p-20 flex flex-col lg:flex-row items-center md:justify-center 
    lg:px-4 px-6 font-machina w-full h-screen bg-vetor-one"
    >
      <div className="flex gap-8 flex-col w-12/12 lg:w-6/12 items-start lg:mb-0 justify-center items-center ">
        <Image
          className="block lg:h-full"
          src={Muve}
          alt="Muve Logo"
          quality={100}
        />
        <p className="font-base font-normal">
          <b>{mainContent}</b>
        </p>
        <p>{menuContent}</p>
      </div>
    </main>
  );
}

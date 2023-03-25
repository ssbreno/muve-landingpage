import Image from 'next/image';
import { config } from '../config';

export function Hero() {
  const { mainContent, logo, menuContent } = config;
  return (
    <main className="container mx-auto pt-20 flex flex-col lg:flex-row items-center md:justify-center lg:px-4 px-6">
      <div className="flex gap-8 flex-col w-12/12 lg:w-6/12 items-start mb-20 lg:mb-0 justify-center items-center">
        <Image
          className="block lg:h-full"
          src={logo}
          alt=""
          width={450}
          height={450}
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

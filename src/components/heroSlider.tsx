'use client';
import Image from 'next/image';

export function HeroSlider() {
  return (
    <div className="bg-vetor-hero-mobile bg-cover w-screen h-screen sm:grid sm:grid-cols-2">
      <div className="flex flex-col items-center justify-center px-4 mt-20">
        <h1 className="text-black-500 font-bold text-2xl">Título do Texto 1</h1>
        <p className="text-black-500  mt-2">Conteúdo do Texto 1</p>
      </div>

      <div className="flex justify-center items-center mt-20">
        <Image
          src="/assets/images/slider/slider_entregador.jpg"
          alt=""
          width={400}
          height={400}
          quality={100}
        />
      </div>
    </div>
  );
}

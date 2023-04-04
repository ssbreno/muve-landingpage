'use client';
import Image from 'next/image';
import FadeInWhenVisible from './client-components/fadeInWhenVisible';

const DeliveryManSection = () => {
  return (
    <FadeInWhenVisible>
      <div className="hero-blue-container relative overflow-hidden">
        <div className=" bg-[#F5F6FF] justify-center items-center sm:flex hidden">
          <Image
            className="z-10"
            src="/assets/images/entregador-moto.svg"
            alt=""
            width={500}
            height={500}
            quality={100}
          />
        </div>
        <div className="hero-blue-div">
          <h1 className="h1-blue">O que nos move é fazer acontecer!</h1>
          <p className="p-blue">
            A MUVE é uma empresa de tecnologia e gestão operacional para
            logística last mile e delivery de entregas rápidas.{' '}
            <span className="text-muve-verde">
              Especializada em same day delivery, desenvolve e executa
              estratégicas de transporte leve sobre duas e quatro rodas{' '}
            </span>{' '}
            de forma a conectar negócios, entregadores e clientes finais com a
            máxima simplicidade, agilidade, segurança e economia.
          </p>
        </div>
        <img
          src="/assets/images/background-seta.svg"
          className="absolute w-[100rem] -top-24 hidden sm:block"
        ></img>
      </div>
    </FadeInWhenVisible>
  );
};

export default DeliveryManSection;

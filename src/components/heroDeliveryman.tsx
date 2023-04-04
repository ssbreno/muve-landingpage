'use client';
import FadeInWhenVisible from './client-components/fadeInWhenVisible';
import { motion } from 'framer-motion';
import Image from 'next/image';

const DeliveryManSection = () => {
  return (
    <div className="hero-blue-container relative overflow-hidden">
      <div className=" bg-[#F5F6FF] flex justify-center items-center">
        <img src="/assets/images/entregador-moto.svg" className="z-10"></img>
      </div>
      <div className="hero-blue-div">
        <h1 className="h1-blue">O que nos move é fazer acontecer!</h1>
        <p className="p-blue">
          A MUVE é uma empresa de tecnologia e gestão operacional para logística
          last mile e delivery de entregas rápidas.{' '}
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
        className="absolute left-[1.rem] w-[100rem] -top-24"
      ></img>
    </div>
  );
};

export default DeliveryManSection;

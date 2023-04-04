'use client';
import { motion } from 'framer-motion';
import FeatureList from './client-components/dropdown-component';
const HeroAbout = () => {
  return (
    <div
      className="grid sm:grid-cols-2 sm:h-screen mt-[4rem] sm:mt-0 w-full font-epilogue"
      id="souempresa"
    >
      <div className="bg-gray-0 px-4 flex flex-col justify-center text-gray-1000">
        <div className="sm:w-4/6 justify-center mx-auto gap-8">
          <h2 className="text-4xl font-semibold leading-9 mb-4">
            Gestão completa de delivery
          </h2>
          <div className="mb-[1.5rem] flex items-center gap-2 ">
            <span className="bg-muve-verde px-[0.9rem] h-[0.2rem] rounded-full"></span>
            <p className=" font-epilogue transition ease-in-out  hover:text-muve-principal hover:font-semibold hover:cursor-pointer">
              Gestão completa de delivery
            </p>
          </div>
          <div className="mb-[1.5rem] flex items-center gap-2 ">
            <span className="bg-muve-verde px-[0.9rem] h-[0.2rem] rounded-full"></span>
            <p className=" font-epilogue transition ease-in-out  hover:text-muve-principal hover:font-semibold hover:cursor-pointer">
              Tecnologia para empresas
            </p>
          </div>
          <div className="mb-[1.5rem] flex items-center gap-2 ">
            <span className="bg-muve-verde px-[0.9rem] h-[0.2rem] rounded-full"></span>
            <p className=" font-epilogue transition ease-in-out  hover:text-muve-principal hover:font-semibold hover:cursor-pointer">
              Tecnologia para entregadores
            </p>
          </div>
          <div className="mb-[1.5rem] flex items-center gap-2 ">
            <span className="bg-muve-verde px-[0.9rem] h-[0.2rem] rounded-full"></span>
            <p className=" font-epilogue transition ease-in-out  hover:text-muve-principal hover:font-semibold hover:cursor-pointer">
              Confie na experiência!
            </p>
          </div>
        </div>
      </div>
      <div className="justify-center flex flex-col gap-4 px-4 sm:px-0 mt-16 sm:mt-0 sm:pr-12">
        <div className="flex gap-4 items-center">
          <img src="/assets/images/icon-correct.svg"></img>
          <p className="text-[0.8rem]">Prospecção/captação de entregadores;</p>
        </div>
        <div className="flex gap-4 items-center">
          <img src="/assets/images/icon-correct.svg"></img>
          <p className="text-[0.8rem]">
            Recrutamento, seleção e capacitação de entregadores;
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <img src="/assets/images/icon-correct.svg"></img>
          <p className="text-[0.8rem]">
            Apoio técnico e estratégico à abertura de novas praças;
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <img src="/assets/images/icon-correct.svg"></img>
          <p className="text-[0.8rem]">
            Ativação de squad - início das atividades;
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <img src="/assets/images/icon-correct.svg"></img>
          <p className="text-[0.8rem]">
            Gestão de equipes, escalas e operações de entrega com monitoramento
            especializado;
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <img src="/assets/images/icon-correct.svg"></img>
          <p className="text-[0.8rem]">Suporte administrativo;</p>
        </div>
        <div className="flex gap-4 items-center">
          <img src="/assets/images/icon-correct.svg"></img>
          <p className="text-[0.8rem]">Inteligência de dados e informações;</p>
        </div>
        <div className="flex gap-4 items-center">
          <img src="/assets/images/icon-correct.svg"></img>
          <p className="text-[0.8rem]">Plataforma administrativa;</p>
        </div>
        <div className="flex gap-4 items-center">
          <img src="/assets/images/icon-correct.svg"></img>
          <p className="text-[0.8rem]">Aplicativo do entregador;</p>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;

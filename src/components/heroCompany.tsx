'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import FeatureList from './client-components/dropdown-component';
import FadeInWhenVisible from './client-components/fadeInWhenVisible';

const Company = () => {
  return (
    <div
      className="grid sm:grid-cols-2 sm:h-screen mt-[4rem] sm:mt-0 w-full font-epilogue"
      id="souempresa"
    >
      <div className="bg-gray-0 px-4 flex flex-col justify-center text-gray-1000">
        <div className="sm:w-4/6 justify-center mx-auto gap-8">
          <Image
            className="inline-flex w-14 mb-8"
            src="/assets/images/computador.svg"
            alt=""
            width={80}
            height={80}
            quality={100}
          />
          <h2 className="text-4xl font-semibold leading-9 mb-4">
            Agora, seu produto vai conquistar a cidade!
          </h2>
          <p className="mb-[3.4rem] font-normal">
            Estudamos o seu caso e planejamos, criamos e gerenciamos todo o seu
            serviço de delivery (pessoal, tecnologia, operação e gestão) para
            que você se liberte da árdua missão de comandar as suas entregas.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5562995727321"
            target="_blank"
            rel="noreferrer"
          >
            <motion.button
              className="font-semibold bg-muve-principal px-8 py-4 rounded-full text-gray-50"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
              }}
              initial={{ scale: 1 }}
            >
              Sou empresa
            </motion.button>
          </a>
        </div>
      </div>
      <div className="justify-center flex flex-col px-4 sm:px-0 mt-16 sm:mt-0 sm:pr-12">
        <FeatureList
          className="cursor-pointer"
          title="Tecnologia"
          features={[
            'Rastreamento em tempo real.',
            'Autocadastro de entregadores;',
            'Controle de filas;',
            'Regras operacionais configuráveis.',
            'Precificação automática;',
            'Módulo financeiro;',
            'Roteirização e atribuição automática inteligente;',
          ]}
          isVisible={true}
        />
        <FeatureList
          title="Sob demanda"
          className="mt-10 cursor-pointer"
          features={[
            'Atendimento e cobrança via entregas;',
            'Maior agilidade nas entregas;',
            'Atendimento em horários de pico.',
          ]}
        />
        <FeatureList
          title="Dedicado"
          className="mt-10 cursor-pointer"
          features={[
            'Estabelecimento de equipes;',
            'Treinamento personalizado;',
            'Engajamento na cultura da empresa;',
            'Engajamento no modelo de negócio.',
          ]}
        />
      </div>
    </div>
  );
};
export default Company;

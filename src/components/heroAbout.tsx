'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import FadeInWhenVisible from './client-components/fadeInWhenVisible';

const data = [
  {
    title: 'Gestão completa de delivery',
    info: [
      'Prospecção/captação de entregadores;',
      'Recrutamento, seleção e capacitação de entregadores;',
      'Apoio técnico e estratégico à abertura de novas praças;',
      'Ativação de squad - início das atividades;',
      'Gestão de equipes, escalas e operações de entrega com monitoramento especializado;',
      'Suporte administrativo;',
      'Inteligência de dados e informações',
      'Plataforma administrativa.',
      'Inteligência de dados e análises.',
      'Aplicativo do entregador.',
    ],
  },
  {
    title: 'Tecnologia para empresas',
    info: [
      'Monitoramento em tempo real',
      'Despacho manual e automático',
      'Relatórios',
      'Cadastro / Chat com entregadores',
      'Link de rastreio para cliente',
      'Gerenciamento de escala',
      'Dashboard com mapa de calor',
      'Sistema de pontos',
      'Lançamentos financeiros',
      'Tempo médio das corridas',
    ],
  },
  {
    title: 'Tecnologia para entregadores',
    info: [
      'Aplicativo para entregadores com roteirização e gestão de entregas;',
      'Cadastro e aprovação de entregadores;',
      'Módulo para atendimento e suporte aos entregadores;',
      'Integração com sistemas de pagamento e logística.',
    ],
  },
  {
    title: 'Confie na experiência!',
    info: [
      'Mais de 7.680.000 pedidos entregues pelo iFood',
      'Mais de 10 anos a serviço do iFood',
      'Mais de 25.000 entregadores ativos',
      'Suporte técnico 24/7;',
      'Já operamos em mais de 300 cidades, 20 estados.',
    ],
  },
];

const HeroAbout = () => {
  const [selectedItem, setSelectedItem] = useState(data[0]);
  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  return (
    <FadeInWhenVisible>
      <div className="grid sm:grid-cols-2 sm:h-screen mt-[4rem] sm:mt-0 w-full font-epilogue">
        <div className="bg-gray-0 px-4 flex flex-col justify-center text-gray-1000">
          <div className="sm:w-4/6 justify-center mx-auto gap-8">
            <h2 className="text-4xl font-semibold leading-9 mb-10">
              Gestão completa de delivery
            </h2>
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="mb-[1.5rem] flex items-center gap-2 hover:text-muve-principal hover:font-semibold hover:cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                <span
                  className={`${
                    selectedItem === item
                      ? ' bg-muve-verde px-[0.9rem] h-[0.2rem] rounded-full'
                      : ''
                  }`}
                ></span>
                <p
                  className={`${
                    selectedItem === item
                      ? ' text-muve-principal font-bold'
                      : ''
                  }`}
                >
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="justify-center flex flex-col gap-4 px-4 sm:px-0 mt-16 sm:mt-0 sm:pr-12 mb-10">
          {selectedItem.info.map((text, index) => (
            <div key={index} className="flex gap-4 items-center">
              <img src="/assets/images/icon-correct.svg"></img>
              <p className="text-[0.8rem]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

export default HeroAbout;

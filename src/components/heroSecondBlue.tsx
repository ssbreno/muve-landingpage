'use client';
import Image from 'next/image';
import MuveAbout from '../../public/assets/images/muve_about.svg';
import { motion } from 'framer-motion';
import FadeInWhenVisible from './client-components/fadeInWhenVisible';

export function HeroSecondBlue() {
  return (
    <div id="sobre" className="hero-blue-container">
      <div className="hero-blue-div">
        <h1 className="h1-blue sm:text-4xl">
          A MUVE é especialista em criar oportunidades de delivery!
        </h1>
        <p className="p-blue">
          Ou seja, organizamos a melhor parceria possível entre empresas,
          entregadores e clientes finais.
        </p>
        <p className="p-blue mb-10">
          <span className="text-muve-verde">
            Com atendimento realmente humanizado, suporte 24 horas, alta
            tecnologia
          </span>{' '}
          e vasta experiência em logística last mile, transformamos operações em
          alta lucratividade a todos os envolvidos!
        </p>
      </div>
      <div className="hero-white-second-div">
        <div className="hero-blue-second-div">
          <Image className="inline-flex" src={MuveAbout} alt="" quality={100} />
        </div>
      </div>
    </div>
  );
}

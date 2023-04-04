'use client';
import Image from 'next/image';
import MuveAbout from '../../public/assets/images/muve_about.svg';
import { motion } from 'framer-motion';

export function HeroSecondBlue() {
  return (
    <div id="sobre" className="hero-blue-container">
      <motion.div
        className="hero-blue-div"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="h1-blue">
          A MUVE é especialista em criar oportunidades de delivery!
        </h1>
        <p className="p-blue">
          Ou seja, organizamos a melhor parceria possível entre empresas,
          entregadores e clientes finais.{' '}
          <span className="text-muve-verde">
            Com atendimento realmente humanizado, suporte 24 horas, alta
            tecnologia
          </span>{' '}
          e vasta experiência em logística last mile, transformamos operações em
          alta lucratividade a todos os envolvidos!
        </p>
      </motion.div>
      <motion.div
        className="hero-white-second-div"
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="hero-blue-second-div"
          whileHover={{ scale: 1.1 }}
          initial={{ scale: 1 }}
        >
          <Image className="inline-flex" src={MuveAbout} alt="" quality={100} />
        </motion.div>
      </motion.div>
    </div>
  );
}

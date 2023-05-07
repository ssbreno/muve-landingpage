'use client';
import Image from 'next/image';
import MuveAbout from '../../public/assets/images/muve_about.svg';
import { motion } from 'framer-motion';
import { InView, useInView } from 'react-intersection-observer';

export function HeroSecondBlue() {
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <div id="sobre" className="hero-blue-container" ref={inViewRef}>
      <motion.div
        className="hero-blue-div"
        initial={{ x: '-100%', opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: '-100%', opacity: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
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
      </motion.div>
      <motion.div
        className="hero-white-second-div"
        initial={{ x: '100%', opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
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

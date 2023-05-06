'use client';
import Image from 'next/image';
import TypingText from './client-components/typingText';
import FadeInWhenVisible from './client-components/fadeInWhenVisible';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div id="home" className="main-div">
      <FadeInWhenVisible>
        <p className="hero-text text-center">Agora, seu produto</p>
        <div className="flex items-end">
          <p className="hero-text">vai conquistar a cidade!</p>
        </div>
      </FadeInWhenVisible>
      <TypingText />
      <div className="second-div">
        <div className="div-hero-infos">
          <Image
            src="/assets/images/hero_moto.svg"
            alt=""
            width={82}
            height={82}
            quality={100}
          />
          <a href="#souentregador" rel="noreferrer">
            <motion.button
              className="hero-button"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
              }}
              initial={{ scale: 1 }}
            >
              Sou entregador
            </motion.button>
          </a>
        </div>
        <div className="div-hero-infos ml-8">
          <Image
            src="/assets/images/hero_company.svg"
            alt=""
            width={82}
            height={82}
            quality={100}
          />
          <a href="#souempresa" rel="noreferrer">
            <motion.button
              className="hero-button"
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
    </div>
  );
}

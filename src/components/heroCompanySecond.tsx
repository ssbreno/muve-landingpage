'use client';
import Image from 'next/image';
import FeatureList from './client-components/dropdown-component';
import { motion } from 'framer-motion';
import FadeInWhenVisible from './client-components/fadeInWhenVisible';

const CompanySecond = () => {
  return (
    <FadeInWhenVisible>
      <div
        className="grid sm:grid-cols-2 relative sm:h-screen mt-[4rem] sm:mt-0 w-full"
        id="souentregador"
      >
        <div className="bg-gray-0 px-4 flex flex-col justify-center text-gray-1000">
          <div className="sm:w-4/6 justify-center mx-auto gap-8 z-20">
            <Image
              className="w-14 mb-8"
              src="/assets/images/profile.svg"
              alt=""
              width={80}
              height={80}
              quality={100}
            />
            <h2 className="text-4xl font-bold leading-9 sm:w-4/5 mb-4">
              Nosso time joga pra ganhar dinheiro de verdade!
            </h2>
            <p className="mb-[3.4rem]">
              Quer fazer muitas entregas? quer faturar muito mais do que nos
              apps tradicionais? quer ser realmente visto, ouvido e valorizado
              como entregador? sim? a MUVE é para você!
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=556281489641"
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
                Sou entregador
              </motion.button>
            </a>
          </div>
        </div>
        <div className="justify-center flex flex-col px-4 sm:px-0 mt-16 sm:mt-0 sm:pr-12 mb-20">
          <FeatureList
            className="cursor-pointer"
            title="Passo a passo"
            features={[
              'Fale conosco',
              'Envie seus dados (pouquinhos).',
              'Aguarde a aprovação (rapidíssima).',
              'Agende seus horários com total liberdade.',
            ]}
            isVisible={true}
          />
          <FeatureList
            title="Nossas vantagens"
            className="mt-10 cursor-pointer z-20"
            features={[
              'Pagamento diário.',
              'Garantido (altas taxas).',
              'Rápida aprovação.',
              'Aplicativo do entregador.',
              'Suporte 24 horas e humanizado (sem robôs).',
            ]}
          />
        </div>
        <Image
          className="absolute right-0 w-[140rem] bottom-0 sm:block hidden"
          src="/assets/images/background-seta-top.svg"
          alt=""
          width={80}
          height={80}
          quality={100}
        />
      </div>
    </FadeInWhenVisible>
  );
};

export default CompanySecond;

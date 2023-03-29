import Image from 'next/image';
import Muve from '../../public/assets/images/logo-white.svg';
import GooglePlay from '../../public/assets/images/google-play.png';
import { LogoBox } from './logoBox';

const Footer = () => {
  return (
    <footer id="contato" className="bg-muve-bluedark py-40 px-40 lg:px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex-1 lg:flex-none lg:w-1/4 mb-8 lg:mb-0 w-full">
            <div className="text-white">
              <p className="font-bold text-4xl sm:text-5xl font-poppins-500">
                Rede Sociais
              </p>
            </div>
            <div className="flex justify-left">
              <a
                href="https://www.instagram.com/Muve.go/"
                target="_blank"
                rel="noreferrer"
                aria-label="Link para o meu Instagram"
                title="Link para o meu Instagram"
              >
                <LogoBox
                  className="border-[2px] border-muve-verde p-2 hover:shadow-[2px_2px_0] transition-all duration-300 text-muve-verde mt-10"
                  size={70}
                  name="instagram"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:items-start justify-center mb-4">
            <div className="flex-1 lg:flex-none mb-8 lg:mb-0">
              <p className="font-bold text-4xl sm:text-5xl font-poppins-500 text-white">
                Plataformas
              </p>
              <div className="flex justify-center font-poppins-500">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link para o Google Play"
                  title="Link para o Google Play"
                >
                  <button
                    type="submit"
                    className="inline-flex items-center font-bold text-black-500 lg:text-2xl bg-muve-verde py-4 px-8 w-full rounded-lg mr-10 hover:brightness-75 mt-10"
                  >
                    <div className="flex-shrink-0 ml-4">
                      <Image
                        className="w-1/2 h-auto lg:ml-auto mb-4 lg:mb-0 sm:w-1/2"
                        src={GooglePlay}
                        alt="Muve Logo"
                        quality={100}
                      />
                    </div>
                    <b className="ml-3">Google Play</b>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-20 mb-10">
          <div className="flex flex-col lg:flex-row items-center justify-center mb-4 lg:mb-0">
            <Image
              className="h-auto lg:ml-auto mb-4 lg:mb-0 sm:w-full w-full"
              src={Muve}
              alt="Muve Logo"
              quality={100}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20">
          <div className="flex flex-col lg:flex-row items-center justify-center mb-4 lg:mb-0 font-poppins">
            <a
              href="https://muve.delivery/"
              target="_blank"
              rel="noreferrer"
              aria-label="Link para política de privacidade"
              title="Link para política de privacidade"
              className="text-white text-base sm:text-xl lg:mr-8"
            >
              Política de privacidade
            </a>
            <p className="text-white text-xl">|</p>
            <a
              href="https://muve.delivery/"
              target="_blank"
              rel="noreferrer"
              aria-label="Link para termos de uso"
              title="Link para termos de uso"
              className="text-white text-base sm:text-xl ml-8"
            >
              Termos e Condições de Uso
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-20">
          <div className="absolute lg:relative">
            <a
              href="https://www.brenosobral.com.br"
              target="_blank"
              rel="noreferrer"
              aria-label="BS"
              title="BS"
            >
              <div className="bg-green-500 text-white rounded-tl-md rounded-tr-3xl rounded-bl-md rounded-br-3xl py-2 px-5 hover:shadow-[2px_2px_0] transition-all duration-300">
                <p className="text-2xl text-center font-machina">
                  <b>BS</b>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

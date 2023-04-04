'use client';
import FadeInWhenVisible from './client-components/fadeInWhenVisible';

const CompanySecond = () => {
  return (
    <div
      className="grid sm:grid-cols-2 relative sm:h-screen mt-[4rem] sm:mt-0 w-full"
      id="souentregador"
    >
      <div className="bg-gray-0 px-4 flex flex-col justify-center text-gray-1000">
        <div className="sm:w-4/6 justify-center mx-auto gap-8">
          <img src="/assets/images/profile.svg" className="w-14 mb-8"></img>
          <h2 className="text-4xl font-bold leading-9 sm:w-4/5 mb-4">
            Nosso time joga pra ganhar dinheiro de verdade!
          </h2>
          <p className="mb-[3.4rem]">
            Quer fazer muitas entregas? quer faturar muito mais do que nos apps
            tradicionais? quer ser realmente visto, ouvido e valorizado como
            entregador? sim? a MUVE é para você!
          </p>
          <a className="font-semibold bg-muve-principal px-8 py-4 rounded-full text-gray-50">
            Sou entregador
          </a>
        </div>
      </div>
      <div className="justify-center flex flex-col px-4 sm:px-0 mt-16 sm:mt-0 sm:pr-12">
        <div className="justify-between flex-row flex">
          <h2 className="text-2xl font-bold">Passo a passo</h2>
          <p className="text-muve-principal">x</p>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <img
            src="/assets/images/icon-correct.svg"
            className="w-[1.4rem]"
          ></img>
          <p className="text-[0.8rem]">Fale conosco</p>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <img
            src="/assets/images/icon-correct.svg"
            className="w-[1.4rem]"
          ></img>
          <p className="text-[0.8rem]">Envie seus dados (pouquinhos).</p>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <img
            src="/assets/images/icon-correct.svg"
            className="w-[1.4rem]"
          ></img>
          <p className="text-[0.8rem]">Aguarde a aprovação (rapidíssima).</p>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <img
            src="/assets/images/icon-correct.svg"
            className="w-[1.4rem]"
          ></img>
          <p className="text-[0.8rem]">
            Agende seus horários com total liberdade.
          </p>
        </div>
        <div className="justify-between flex-row flex mt-8 mb-16">
          <h2 className="text-2xl font-bold">Nossas vantagens</h2>
          <p className="text-muve-principal">+</p>
        </div>
      </div>
      <img
        src="/assets/images/background-seta-top.svg"
        className="absolute  right-0 w-[100rem] bottom-0"
      ></img>
    </div>
  );
};

export default CompanySecond;

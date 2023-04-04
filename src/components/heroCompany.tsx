'use client';

const Company = () => {
  return (
    <div
      className="grid sm:grid-cols-2 sm:h-screen mt-[4rem] sm:mt-0 w-full"
      id="souempresa"
    >
      <div className="bg-gray-0 px-4 flex flex-col justify-center text-gray-1000">
        <div className="sm:w-4/6 justify-center mx-auto gap-8">
          <img src="/assets/images/computador.svg" className="w-14 mb-8"></img>
          <h2 className="text-4xl font-bold leading-9 mb-4">
            Agora, seu produto vai conquistar a cidade!
          </h2>
          <p className="mb-[3.4rem]">
            Estudamos o seu caso e planejamos, criamos e gerenciamos todo o seu
            serviço de delivery (pessoal, tecnologia, operação e gestão) para
            que você se liberte da árdua missão de comandar as suas entregas.
          </p>
          <a className="font-semibold bg-muve-principal px-8 py-4 rounded-full text-gray-50">
            Sou empresa
          </a>
        </div>
      </div>
      <div className="justify-center flex flex-col px-4 sm:px-0 mt-16 sm:mt-0 sm:pr-12">
        <div className="justify-between flex-row flex">
          <h2 className="text-2xl font-bold">Tecnologia</h2>
          <p className="text-muve-principal">x</p>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <img
            src="/assets/images/icon-correct.svg"
            className="w-[1.4rem]"
          ></img>
          <p className="text-[0.8rem]">Rastreamento em tempo real.</p>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <img
            src="/assets/images/icon-correct.svg"
            className="w-[1.4rem]"
          ></img>
          <p className="text-[0.8rem]">Autocadastro de entregadores;</p>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <img
            src="/assets/images/icon-correct.svg"
            className="w-[1.4rem]"
          ></img>
          <p className="text-[0.8rem]">Controle de filas;</p>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <img
            src="/assets/images/icon-correct.svg"
            className="w-[1.4rem]"
          ></img>
          <p className="text-[0.8rem]">Regras operacionais configuráveis.</p>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <img
            src="/assets/images/icon-correct.svg"
            className="w-[1.4rem]"
          ></img>
          <p className="text-[0.8rem]">Precificação automática;</p>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <img
            src="/assets/images/icon-correct.svg"
            className="w-[1.4rem]"
          ></img>
          <p className="text-[0.8rem]">Módulo financeiro;</p>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <img
            src="/assets/images/icon-correct.svg"
            className="w-[1.4rem]"
          ></img>
          <p className="text-[0.8rem]">Autocadastro de entregadores;</p>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <img
            src="/assets/images/icon-correct.svg"
            className="w-[1.4rem]"
          ></img>
          <p className="text-[0.8rem]">
            Roteirização e atribuição automática inteligente;
          </p>
        </div>
        <div className="justify-between flex-row flex mt-8 mb-4">
          <h2 className="text-2xl font-bold">Sob demanda</h2>
          <p className="text-muve-principal">+</p>
        </div>
        <div className="justify-between flex-row flex">
          <h2 className="text-2xl font-bold">Dedicado</h2>
          <p className="text-muve-principal">+</p>
        </div>
      </div>
    </div>
  );
};
export default Company;

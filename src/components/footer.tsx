const FooterReal = () => {
  return (
    <div className="h-3/5 w-full flex font-epilogue justify-center gap-12 flex-col items-center mt-28 py-12">
      <img src="/assets/images/logo.svg" className="w-36"></img>
      <div className="flex flex-row  text-sm gap-8">
        <a
          href="#home"
          rel="noreferrer"
          className=" border-b-2 border-transparent hover:border-blue-500  hover:duration:1000 transition-all ease"
        >
          Início
        </a>
        <a
          href="#souempresa"
          rel="noreferrer"
          className=" border-b-2 border-transparent hover:border-blue-500  hover:duration:1000 transition-all ease"
        >
          Sou empresa
        </a>
        <a
          href="#souentregador"
          rel="noreferrer"
          className=" border-b-2 border-transparent hover:border-blue-500  hover:duration:1000 transition-all ease"
        >
          Sou entregador
        </a>
        <a
          href="#sobre"
          rel="noreferrer"
          className=" border-b-2 border-transparent hover:border-blue-500  hover:duration:1000 transition-all ease"
        >
          Sobre
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=556281489641"
          rel="noreferrer"
          className=" border-b-2 border-transparent hover:border-blue-500  hover:duration:1000 transition-all ease"
        >
          Contato
        </a>
      </div>
      <div className="flex flex-row gap-4">
        <img src="/assets/images/facebook.svg"></img>
        <a
          href="https://www.instagram.com/Muve.go/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link para o Instagram"
          title="Link para o Instagram"
        >
          <img src="/assets/images/instagram.svg"></img>
        </a>
        <img src="/assets/images/linkedin.svg"></img>
      </div>
      <div
        className="mt-4  border-[#363E5533;
  ] border-t-[0.2rem] py-8 justify-center w-3/5 flex gap-4 text-sm"
      >
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          aria-label="Link para Política de privacidade"
          title="Link para Política de privacidade"
          className=" border-b-2 border-transparent hover:border-blue-500  hover:duration:1000 transition-all ease"
        >
          Política de privacidade
        </a>
        <span>|</span>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          aria-label="Link para Termos e Condições de Uso"
          title="Link para Termos e Condições de Uso"
          className=" border-b-2 border-transparent hover:border-blue-500  hover:duration:1000 transition-all ease"
        >
          Termos e Condições de Uso
        </a>
      </div>
      <div className="flex flex-col mt-12 justify-center font-epilogue text-sm items-center">
        <p>Desenvolvido por</p>
        <img src="/assets/images/logo-bs.svg" className="w-16"></img>
      </div>
    </div>
  );
};

export default FooterReal;

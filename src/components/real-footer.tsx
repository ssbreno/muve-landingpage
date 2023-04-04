const FooterReal = () => {
  return (
    <div className="h-3/5 w-full flex font-epilogue justify-center gap-12 flex-col items-center mt-28 py-12">
      <img src="/assets/images/logo.svg" className="w-36"></img>
      <div className="flex flex-row  text-sm gap-8">
        <a>Início</a>
        <a>Sou empresa</a>
        <a>Sou entregador</a>
        <a>Sobre</a>
        <a>Contato</a>
      </div>
      <div className="flex flex-row gap-4">
        <img src="/assets/images/facebook.svg"></img>
        <img src="/assets/images/instagram.svg"></img>
        <img src="/assets/images/linkedin.svg"></img>
      </div>
      <div
        className="mt-4  border-[#363E5533;
] border-t-[0.2rem] py-8 justify-center w-3/5 flex gap-4 text-sm"
      >
        <a>Política de privacidade</a>
        <span>|</span>
        <a>Termos e Condições de Uso</a>
      </div>
    </div>
  );
};

export default FooterReal;

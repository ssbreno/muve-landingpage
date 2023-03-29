import Image from 'next/image';
import Muve from '../../public/assets/images/logo-green-svg.svg';

const BlueSection = () => {
  return (
    <div
      className="flex relative flex-col overflow-x-hidden sm:flex-row
     bg-muve-principal bg-vetor-city bg-cover py-36 h-full font-machina text-muve-white"
    >
      <span className="absolute bg-gray-50 rounded-full h-24 w-24 top-[-1.5rem] left-[39.2%] sm:left-[50%]"></span>
      <div className="md:w-[50%] flex flex-col mx-[10%] my-auto items-center justify-start">
        <div className="flex justify-center items-center flex-col">
          <div className="items-center justify-center mx-auto w-full">
            <Image
              className="block w-96 "
              src={Muve}
              alt="Muve Logo"
              quality={100}
            />
            <div className="w-2/2 mt-4 mb-8 flex items-center h-4 ">
              <span className="w-20 h-4 mb-[0.3rem] mr-4 bg-muve-verde rounded-full"></span>
              <p className="text-base sm:text-xl ">
                O que nos move é <strong>fazer acontecer!</strong>
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full ">
            <h2 className="font-machina font-black uppercase mx-auto sm:mx-0 sm:text-[2.2rem] text-base">
              A MUVE é especialista em criar oportunidades de delivery!
            </h2>
            <p className="text-base mx-auto sm:mx-0 w-[80%] mt-5">
              Organizamos a melhor parceria possível entre empresas,
              entregadores e clientes finais. Com atendimento realmente
              humanizado, suporte 24 horas, alta tecnologia e vasta experiência
              em logística last mile, transformamos operações em alta
              lucratividade a todos os envolvidos!
            </p>
          </div>
        </div>
      </div>
      <div className="sm:w-[50%] w-full items-center  flex flex-col justify-center my-auto mx-[4%] text-base">
        <p className="my-4 font-poppins text-[1rem] w-[72%] sm:text-base  mx-auto">
          A MUVE é uma empresa de tecnologia e gestão operacional para logística
          last mile e delivery de entregas rápidas. Especializada em same day
          delivery, desenvolve e executa estratégicas de transporte leve sobre
          duas e quatro rodas de forma a conectar negócios, entregadores e
          clientes finais com a máxima simplicidade, agilidade, segurança e
          economia.
        </p>
        <p className="my-4 font-machina text-[1rem] w-[72%] sm:text-base mx-auto  font-semibold">
          <div className="w-2/2 mt-4 mb-8 flex items-center h-4 ">
            <span className="w-20 h-4 mb-[0.3rem] mr-4 bg-muve-verde rounded-full"></span>
            <p className="text-md sm:text-xl ">Gestão completa de delivery</p>
          </div>
        </p>
        <p className="my-4 font-machina text-[1rem] w-[72%] sm:text-base mx-auto">
          <p>- Prospecção/captação de entregadores</p>
          <p> - Recrutamento, seleção e capacitação de entregadores</p>
          <p> - Apoio técnico e estratégico à abertura de novas praças</p>

          <p>- Ativação de squad – início das atividades</p>
          <p> - Suporte administrativo</p>
          <p>
            {' '}
            - Gestão de equipes, escalas e operações de entrega com
            monitoramento especializado
          </p>
          <p> - Inteligência de dados e informações</p>
          <p> - Plataforma administrativa</p>
          <p> - Aplicativo do entregador</p>
          </p>
      </div>
    </div>
  );
};

export default BlueSection;

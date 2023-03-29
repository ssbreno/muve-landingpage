import Image from 'next/image';
import DeliveryBike from '../../public/assets/images/delivery-bike.svg';

const DeliveryManSection = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-vetor-blue bg-cover py-36 px-15 lg:px-4 h-full">
      <div className="sm:w-full md:w-1/2 flex flex-col items-center justify-center">
        <Image
          className="flex xl:w-90 md:w-[70%] w-[72%] mx-auto sm:mx-0 sm:w-90 mb-12 ml-10"
          src={DeliveryBike}
          alt="Muve Logo"
          quality={100}
        />
      </div>
      <div className="w-full  sm:mx-0 sm:w-1/2">
        <div className="flex flex-col container mx-auto">
          <div className="flex items-center ml-[8%] sm:ml-0 mb-2">
            <span className="w-16 h-4 mb-[0.4rem] rounded-full bg-muve-verde mr-4"></span>
            <h2 className="font-machina sm:text-xl font-bold">
                Nosso time joga para ganhar dinheiro de verdade!
            </h2>
          </div>
          <p className="sm:font-base text-base sm:mx-0 mx-8  font-machina">
            O que nos move é <strong>fazer acontecer!</strong>
          </p>
          <p className="sm:font-base text-base  sm:mx-0 mx-8 font-machina">
          Quer fazer muitas entregas? Quer faturar muito mais do que nos apps tradicionais? 
          Quer ser realmente visto, ouvido e valorizado como entregador? Sim? A MUVE é para você!
          </p>
        </div>
        <br></br>
        <div className="w-2/2 items-center justify-center mt-10 flex flex-col lg:flex-row container mx-auto">
        <a
          href="https://wa.me/message/FJW2SEFCU3BID1"
          target="_blank"
          rel="noreferrer"
          aria-label="Link para WhatsApp"
          title="Link para WhatsApp"
        >
          <button
            type="submit"
            className="font-bold text-black-500 sm:mx-0 mx-auto lg:text-lg  
            bg-muve-verde py-[1.7rem] px-8 sm:px-20 rounded-3xl sm:mr-10 hover:brightness-75"
          >
            Quero ser entregador
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeliveryManSection;

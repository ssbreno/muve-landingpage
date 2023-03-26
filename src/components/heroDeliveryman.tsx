import Image from 'next/image';
import DeliveryBike from '../../public/assets/images/delivery-bike.svg';

const DeliveryManSection = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-vetor-blue bg-cover py-36 px-15 lg:px-4 h-full">
      <div className="sm:w-full md:w-1/2 flex flex-col items-center justify-center">
        <Image
          className="flex xl:w-90 md:w-90 sm:w-30 mb-12 ml-10"
          src={DeliveryBike}
          alt="Muve Logo"
          quality={100}
        />
      </div>
      <div className="w-1/3">
        <div className="flex flex-col lg:flex-row items-center justify-center container mx-auto">
          <p className="font-base font-normal">
            Lorem ipsum dolor sit amet. Sit cumque molestiae quo consequuntur
          </p>
          <p className="font-base font-normal">
            Lorem ipsum dolor sit amet. Sit cumque molestiae quo consequuntur
            consectetur vel similique quaerat et tempore veritatis! Aut
            excepturi praesentium vel. Lorem ipsum dolor sit amet. Sit cumque
            molestiae quo consequuntur consectetur vel similique quaerat et
            tempore veritatis! Aut
          </p>
        </div>
        <br></br>
        <div className="flex flex-col lg:flex-row items-center justify-center container mx-auto">
          <p className="font-base font-normal">
            Lorem ipsum dolor sit amet. Sit cumque molestiae quo consequuntur
            consectetur vel similique quaerat et tempore veritatis! Aut
            excepturi praesentium vel. Lorem ipsum dolor sit amet. Sit cumque
            molestiae quo consequuntur consectetur vel similique quaerat et
            tempore veritatis! Aut
          </p>
        </div>
        <div className="w-1/2 mt-10 flex flex-col lg:flex-row container mx-auto">
          <button
            type="submit"
            className="font-bold text-black-500 lg:text-lg  
            bg-muve-verde py-3 px-20 rounded-lg mr-10 hover:brightness-75"
          >
            Quero ser entregador
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryManSection;

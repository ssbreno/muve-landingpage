import Image from 'next/image';
import DeliveryBoy from '../../public/assets/images/delivery-moto.svg';

const DeliverySecond = () => {
  return (
    <div
      className="container mx-auto p-20 flex flex-col lg:flex-row items-center md:justify-center 
    lg:px-4 px-6 font-machina w-full h-screen"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center container mx-auto mb-40">
        <Image
          className="block lg:h-full w-90 mb-12 ml-10"
          src={DeliveryBoy}
          alt="Muve Logo"
          quality={100}
        />
      </div>
    </div>
  );
};

export default DeliverySecond;
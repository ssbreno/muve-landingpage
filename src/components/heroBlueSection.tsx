import Image from 'next/image';
import Muve from '../../public/assets/images/logo-white.svg';

const BlueSection = () => {
  return (
    <div
      className="container mx-auto p-20 flex flex-col lg:flex-row items-center md:justify-center 
    lg:px-4 px-6 font-machina w-full h-screen bg-vetor-city bg-muve-principal bg-no-repeat"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center container mx-auto mb-40">
        <div className="flex flex-col">
          <Image
            className="block lg:h-full w-80 mb-12 ml-10"
            src={Muve}
            alt="Muve Logo"
            quality={100}
          />
          <span className="reactangle-green mt-20 inset-x-0 left-60"></span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center container mx-auto">
        <p className="font-base font-normal">
          Lorem ipsum dolor sit amet. Sit cumque molestiae quo consequuntur
          consectetur vel similique quaerat et tempore veritatis! Aut excepturi
          praesentium vel. Lorem ipsum dolor sit amet. Sit cumque molestiae quo
          consequuntur consectetur vel similique quaerat et tempore veritatis!
          Aut
        </p>

        <p className="font-base font-normal">
          Lorem ipsum dolor sit amet. Sit cumque molestiae quo consequuntur
          consectetur vel similique quaerat et tempore veritatis! Aut excepturi
          praesentium vel. Lorem ipsum dolor sit amet. Sit cumque molestiae quo
          consequuntur consectetur vel similique quaerat et tempore veritatis!
          Aut
        </p>
      </div>
    </div>
  );
};

export default BlueSection;

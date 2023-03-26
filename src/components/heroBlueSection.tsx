import Image from 'next/image';
import Muve from '../../public/assets/images/logo-white.svg';
//    <main className="flex flex-col bg-vetor-blue bg-cover py-36 -mt-20 px-6 lg:px-4 md:justify-center items-center">
const BlueSection = () => {
  return (
    <div
      className="flex flex-col sm:flex-row bg-vetor-city
     bg-muve-principal bg-cover py-36 px-15 lg:px-4 h-full font-machina text-muve-white"
    >
      <div className="sm:w-full md:w-1/2 flex flex-col items-center justify-center">
        <Image
          className="block w-60 my-9"
          src={Muve}
          alt="Muve Logo"
          quality={100}
        />
        <div className="w-1/2 my-4">
          <p className="text-lg ml-4">Texto ao lado da linha</p>
          <p className="text-lg ml-4">Texto ao lado da linha</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-poppins text-5xl ml-4">Texto ao lado da linha</p>
          <p className="w-2/3 text-lg ml-4">
            Lorem ipsum dolor sit amet. Sit cumque molestiae quo consequuntur
            consectetur vel similique quaerat et tempore veritatis! Aut
            excepturi praesentium vel. Lorem ipsum dolor sit amet. Sit cumque
            molestiae quo consequuntur consectetur vel similique quaerat et
            tempore veritatis! Aut
          </p>
        </div>
      </div>
      <div className="w-1/4 ml-40 flex flex-col items-center justify-center text-lg">
        <p className="my-4">
          Lorem ipsum dolor sit amet. Sit cumque molestiae quo consequuntur
          consectetur vel similique quaerat et tempore veritatis! Aut excepturi
          praesentium vel. Lorem ipsum dolor sit amet. Sit cumque molestiae quo
          consequuntur consectetur vel similique quaerat et tempore veritatis!
          Aut
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit amet. Sit cumque molestiae quo consequuntur
          consectetur vel similique quaerat et tempore veritatis! Aut excepturi
          praesentium vel. Lorem ipsum dolor sit amet. Sit cumque molestiae quo
          consequuntur consectetur vel similique quaerat et tempore veritatis!
          Aut
        </p>
        <p className="my-4">
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

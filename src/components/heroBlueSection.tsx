import Image from 'next/image';
import Muve from '../../public/assets/images/logo-green-svg.svg';

const BlueSection = () => {
  return (
    <div
      className="flex relative flex-col overflow-x-hidden sm:flex-row bg-vetor-city
     bg-muve-principal bg-cover py-36 h-full font-machina text-muve-white"
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
              <p className="text-md sm:text-xl ">
                Texto ao <strong>lado da linha</strong>
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full ">
            <h2 className="font-poppins font-black  uppercase text-[1.3rem] mx-auto sm:mx-0 sm:text-[2.2rem]">
              LOREM IPSUM DOLOR
            </h2>
            <p className="text-base mx-auto sm:mx-0 w-[80%] ">
              Lorem ipsum dolor sit amet. Sit cumque molestiae quo consequuntur
              consectetur vel similique quaerat et tempore veritatis! Aut
              excepturi praesentium vel. Lorem ipsum dolor sit amet. Sit cumque
              molestiae quo consequuntur consectetur vel similique quaerat et
              tempore veritatis! Aut
            </p>
          </div>
        </div>
      </div>
      <div className="sm:w-[50%] w-full items-center  flex flex-col items-center justify-center my-auto mx-[4%] text-base">
        <p className="my-4 font-poppins text-[1rem] w-[72%] sm:text-base  mx-auto font-semibold">
          Lorem ipsum dolor sit amet. Sit cumque molestiae quo consequuntur
          consectetur vel similique quaerat et tempore veritatis! Aut excepturi
          praesentium vel. Lorem ipsum dolor sit amet. Sit cumque molestiae quo
          consequuntur consectetur vel similique quaerat et tempore veritatis!
          Aut
        </p>
        <p className="my-4 font-poppins text-[1rem] w-[72%] sm:text-base mx-auto  font-semibold">
          Lorem ipsum dolor sit amet. Sit cumque molestiae quo consequuntur
          consectetur vel similique quaerat et tempore veritatis! Aut excepturi
          praesentium vel. Lorem ipsum dolor sit amet. Sit cumque molestiae quo
          consequuntur consectetur vel similique quaerat et tempore veritatis!
          Aut
        </p>
        <p className="my-4 font-poppins text-[1rem] w-[72%] sm:text-base mx-auto  font-semibold">
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

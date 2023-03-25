import { config } from '../config';
import Image from 'next/image';

const Content = () => {
  const { mainContent, logo, menuContent } = config;
  return (
    <>
      <div className="z-10 lg:w-3/4  sm-py-0 aligm-center w-6/6">
        <div className="z-10 flex sm:flex-col w-screen  lg:flex-row pt-2 flex  flex-col sm:px-40 justify-center">
        <Image
                className="block lg:h-full"
                src={logo}
                alt=""
                width={400}
                height={400}
                quality={100}
              />
        </div>
      </div>
      <div className="z-10 lg:w-3/4  sm-py-0 aligm-center w-6/6">
      <div className="z-10 flex sm:flex-col w-screen  lg:flex-row pt-2 flex  flex-col sm:px-40 justify-center">
          <p className="block lg:h-full text-black-50 text-5xl">
            {mainContent}
          </p>
        </div>
        </div>
        <div className="z-10 lg:w-3/4  sm-py-0 aligm-center w-6/6">
      <div className="z-10 flex sm:flex-col w-screen  lg:flex-row pt-2 flex  flex-col sm:px-40 justify-center">
          <p className="block lg:h-full text-black-50 text-5xl">
            {menuContent}
          </p>
        </div>
        </div>
    </>
  );
};

export default Content;

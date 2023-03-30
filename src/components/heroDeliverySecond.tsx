'use client';
import FadeInWhenVisible from './client-components/fadeInWhenVisible';

const DeliverySecond = () => {
  return (
    <FadeInWhenVisible>
      <div
        className="container mx-auto p-20 flex flex-col lg:flex-row items-center md:justify-center 
    lg:px-4 px-6 font-machina w-full h-screen"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center container mx-auto mb-40"></div>
      </div>
    </FadeInWhenVisible>
  );
};

export default DeliverySecond;

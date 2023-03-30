'use client';
import FadeInWhenVisible from './client-components/fadeInWhenVisible';

const Company = () => {
  return (
    <FadeInWhenVisible>
      <div
        id="souempresa"
        className="flex flex-col bg-vetor-blue bg-cover py-36 lg:px-4 
    md:justify-center items-center lg:h-screen"
      ></div>
    </FadeInWhenVisible>
  );
};

export default Company;

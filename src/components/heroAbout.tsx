'use client';

const HeroAbout = () => {
  return (
    <div className="grid sm:grid-cols-2 relative sm:h-screen mt-[4rem] sm:mt-0 w-full">
      <div className="bg-gray-0 px-4 flex flex-col justify-center text-gray-1000">
        <div className="sm:w-4/6 justify-center mx-auto gap-8 z-20"></div>
      </div>
      <div className="justify-center flex flex-col px-4 sm:px-0 mt-16 sm:mt-0 sm:pr-12 mb-20"></div>
    </div>
  );
};

export default HeroAbout;

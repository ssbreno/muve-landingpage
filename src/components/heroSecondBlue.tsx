'use client';
import FadeInWhenVisible from './client-components/fadeInWhenVisible';

const SecondblueSection = () => {
  return (
    <FadeInWhenVisible>
      <div
        className="flex flex-col sm:flex-row
     bg-muve-principal bg-cover py-36 px-15 lg:px-4 h-30 font-machina text-muve-white"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center container mx-auto mb-40">
          <div className="flex flex-col"></div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

export default SecondblueSection;

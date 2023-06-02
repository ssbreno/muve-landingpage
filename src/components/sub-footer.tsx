'use client';
import FadeInWhenVisible from './client-components/fadeInWhenVisible';

const Footer = () => {
  return (
    <div className="h-screen w-full relative sm:block hidden">
      <img
        src="/assets/images/location-svg.svg"
        className="absolute left-[48.8%] transform -translate-x-1/2 w-16 top-64"
        alt=""
      />
      <img
        src="/assets/images/background-footer.svg"
        className="w-full h-full object-cover"
        alt=""
      />
    </div>
  );
};

export default Footer;

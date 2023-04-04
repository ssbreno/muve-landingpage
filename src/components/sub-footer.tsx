'use client';
import FadeInWhenVisible from './client-components/fadeInWhenVisible';

const Footer = () => {
  return (
    <FadeInWhenVisible>
      <div className="h-screen w-full relative">
        <img
          src="/assets/images/location-svg.svg"
          className="absolute left-[46.7%] w-16 top-64"
        ></img>
        <img
          src="/assets/images/background-footer.svg"
          className="w-full"
        ></img>
      </div>
    </FadeInWhenVisible>
  );
};

export default Footer;

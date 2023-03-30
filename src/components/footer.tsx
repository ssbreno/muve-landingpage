'use client';
import FadeInWhenVisible from './client-components/fadeInWhenVisible';

const Footer = () => {
  return (
    <FadeInWhenVisible>
      <footer id="contato" className="py-40 px-40 lg:px-4"></footer>
    </FadeInWhenVisible>
  );
};

export default Footer;

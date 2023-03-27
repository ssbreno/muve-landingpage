'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Navigation } from './client-components/navigation';

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${scroll ? 'bg-white shadow-md' : ''} fixed z-10 container mx-auto py-5 flex flex-wrap justify-between lg:px-4 top-0 left-0 right-0`}>
      <Link href="/" passHref={true} title="Home" aria-label="Link para a Home">
        <Image
          className="h-6 lg:h-10"
          src="/assets/images/logo.svg"
          alt=""
          width={140}
          height={140}
          quality={100}
        />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;

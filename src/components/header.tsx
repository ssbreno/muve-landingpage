import { config } from '../config';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from './client-components/navigation';

const Header = () => {
  return (
    <header
      className="container mx-auto py-5 flex flex-wrap 
    justify-between lg:px-4 px-6 bg-vetor-one"
    >
      <Link href="/" passHref={true} title="Home" aria-label="Link para a Home">
        <Image
          className="flex lg:h-full ml-10"
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

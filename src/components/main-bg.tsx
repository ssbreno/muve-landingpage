import Image from 'next/image';
import Background from '../../public/assets/images/background.png';

const MainBg = () => {
  return (
    <div className="absolute  bg-no-repeat after:bg-no-repeat w-full h-3/6 sm:h-4/5 lg:h-4/6 after:content-['*'] after:scale-125 after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-black  after:opacity-60  ">
      <div className="sm:h-full  h-full scale-125 h-min-full sm-scale-100 w-full bg-cover sm:h-50 md:h-6/6 lg:w-full">
        <Image
          className="block lg:h-full"
          src={Background}
          alt=""
          placeholder="blur"
          quality={100}
        />
      </div>
    </div>
  );
};

export default MainBg;

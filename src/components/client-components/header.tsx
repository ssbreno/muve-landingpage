'use client';
import { Fragment } from 'react';
import { config } from '../../config';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { Link } from 'react-scroll';

const Header = () => {
  const { navigation, mainTitle, logo } = config;
  return (
    <Popover>
      <div
        className="h-4 w-screen mb-2 text-xs md:px-28  flex py-8 sm:py-10 px-10 
      sm:px-20 sm:justify-between text-gray-50 font-semibold bg-center font-poppins items-center mt-7"
      >
        <nav className="z-20 flex max-sm:hidden sm:gap-3 sm:mx-0 mx-auto sm:mr-10">
          <div className="flex gap-2 justify-center relative">
              <Image
                className="flex lg:h-full"
                src={logo}
                alt=""
                width={140}
                height={140}
                quality={100}
              />
          </div>
          <div className="flex relative mr-8 ml-20 flex-row lg:text-xs xl:text-sm hidden lg:block text-gray-50">
            {navigation.map((items: any) => (
              <Link
                spy={true}
                active="active"
                smooth={true}
                duration={1000}
                to={items.href}
                key={items.name}
                className="mr-14 after:bg text-base hover:from-pink-500 hover:to-yellow-500"
              >
                {items.name}
              </Link>
            ))}
          <button
            type="submit"
            className="font-bold text-xs lg:text-sm bg-gradient-to-r  mx-auto 
            from-secondary to-primary  py-2 px-12 rounded-full ml-20">
            Entrar
          </button>
          </div>
        </nav>
        <div className="md:flex flex gap-10 sm:mx-0 mx-auto  md:items-center md:gap-4 z-10 ml-20 ">
          <div className="-mr-2 flex items-center md:hidden">
            <Popover.Button
              className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div
            className={`rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden`}
          >
            <div className="px-5 pt-4 flex items-center justify-between">
              <div className="h-7 sm:absolute -top-2 -left-6">
                <Image
                  className="h-8 w-auto"
                  src={logo}
                  alt="MagicFire"
                  width={20}
                  height={30}
                  quality={100}
                />
              </div>
              <div className="-mr-2">
                <Popover.Button
                  className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                >
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  spy={true}
                  active="active"
                  smooth={true}
                  duration={1000}
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <a
              href="#"
              className={`block w-full px-5 py-3 text-center font-medium text-primary bg-gray-50 hover:bg-gray-100`}
            >
              Entrar
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;

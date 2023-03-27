'use client';
import { Link } from 'react-scroll';
import { useRef } from 'react';
import { config } from '../../config';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export function Navigation() {
  const navigation = useRef<HTMLDivElement>(null);

  const { nameNavigation } = config;

  function handleMenu() {
    if (navigation?.current) {
      navigation.current.classList.toggle('translate-x-full');
    }
  }

  return (
    <div className="relative font-machina">
      <nav className="hidden lg:block">
        <div className="flex gap-7 items-center">
          {nameNavigation.map((items: any) => (
            <Link
              spy={true}
              active="active"
              smooth={true}
              duration={1000}
              to={items.href}
              key={items.name}
              className="text-base mr-20 border-b-2 border-transparent hover:border-blue-500"
            >
              <b>{items.name}</b>
            </Link>
          ))}
          <button
            type="submit"
            className="font-bold text-muve-white lg:text-base mx-auto 
            bg-muve-principal py-2 px-6 rounded-lg mr-20"
          >
            ENTRAR
          </button>
        </div>
      </nav>

      <button
        className="flex lg:hidden items-center justify-center p-1 border border-black mr-10"
        onClick={handleMenu}
        role="button"
        title="Botão do menu"
        aria-label="Botão do menu"
      >
        <AiOutlineMenu size={20} color="#000" />
      </button>
      <nav
        ref={navigation}
        className="fixed top-0 right-0 h-full w-full p-4 bg-white z-20 lg:hidden translate-x-full transition-all duration-500"
      >
        <button
          onClick={handleMenu}
          className="p-1 items-center justify-center border border-black flex ml-auto mb-10 mr-10"
          role="button"
          title="Botão de fechar o menu"
          aria-label="Botão de fechar o menu"
        >
          <AiOutlineClose size={20} color="#000" />
        </button>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {nameNavigation.map((item) => (
            <Link
              spy={true}
              active="active"
              smooth={true}
              duration={1000}
              key={item.name}
              to={item.href}
              className="flex flex-col gap-4 items-center text-2xl font-medium  hover:text-muve-principal"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <a
          href="#"
          className={`block w-full px-5 py-3 text-center font-medium text-primary bg-gray-200 hover:bg-gray-100`}
        >
          Entrar
        </a>
      </nav>
    </div>
  );
}

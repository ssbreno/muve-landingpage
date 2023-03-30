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
    <div className="relative font-sans">
      <nav className="hidden lg:block">
        <div className="flex items-center">
          {nameNavigation.map((items: any) => (
            <Link
              spy={true}
              active="active"
              smooth={true}
              duration={1000}
              to={items.href}
              key={items.name}
              className="text-base mr-20 border-b-2 border-transparent hover:border-blue-500  hover:duration:1000 transition-all ease"
            >
              <b>{items.name}</b>
            </Link>
          ))}
          <a
            href="https://sistema.muve.delivery"
            target="_blank"
            rel="noreferrer"
            aria-label="Link para o sistema"
            title="Link para o sistema"
          >
            <button
              type="submit"
              className="text-muve-white lg:text-base 
            bg-muve-principal py-2 px-8 text-center items-center rounded-2xl "
            >
              ENTRAR
            </button>
          </a>
        </div>
      </nav>

      <button
        className="flex lg:hidden items-center justify-center p-1 border border-black"
        onClick={handleMenu}
        role="button"
        title="Botão do menu"
        aria-label="Botão do menu"
      >
        <AiOutlineMenu size={20} color="#000" />
      </button>

      <nav
        ref={navigation}
        className="fixed top-0 right-0 h-screen w-screen p-4 bg-white z-20 lg:hidden translate-x-full transition-all duration-500"
      >
        <div className=" flex items-end justify-end">
          <button
            onClick={handleMenu}
            className="p-1 border border-black"
            role="button"
            title="Botão de fechar o menu"
            aria-label="Botão de fechar o menu"
          >
            <AiOutlineClose size={20} color="#000" />
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {nameNavigation.map((item) => (
            <Link
              spy={true}
              active="active"
              smooth={true}
              duration={1000}
              key={item.name}
              to={item.href}
              className="flex flex-col gap-4  items-center justify-center text-2xl font-medium  hover:text-muve-principal"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <a
          href="https://sistema.muve.delivery"
          target="_blank"
          rel="noreferrer"
          aria-label="Link para o sistema"
          title="Link para o sistema"
          className={`flex px-5 py-3 text-center items-center justify-center font-medium text-primary bg-gray-200 hover:bg-gray-100`}
        >
          Entrar
        </a>
      </nav>
    </div>
  );
}

'use client';
import { Link } from 'react-scroll';
import { useRef, useState } from 'react';
import { config } from '../../config';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion } from 'framer-motion';

export function Navigation() {
  const navigation = useRef<HTMLDivElement>(null);
  const { nameNavigation } = config;

  function handleMenu() {
    if (navigation?.current) {
      navigation.current.classList.toggle('translate-x-full');
    }
  }

  return (
    <div className="relative font-sans font-normal">
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
              className="text-lg mr-20 cursor-pointer hover:text-muve-principal hover:font-semibold"
            >
              <b>{items.name}</b>
            </Link>
          ))}
          <a
            href="https://sistema.muve.delivery"
            target="_blank"
            rel="noreferrer"
          >
            <motion.button
              className=" bg-muve-principal text-white py-2 px-11 text-center items-center rounded-full"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
              }}
              initial={{ scale: 1 }}
            >
              Entrar
            </motion.button>
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
        className="fixed  top-0 right-0 h-screen w-screen p-4 bg-white z-20 lg:hidden translate-x-full transition-all duration-500"
      >
        <div className=" flex items-end justify-end">
          <button
            onClick={handleMenu}
            className="p-1 border border-black"
            role="button"
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
              onClick={handleMenu}
              className="flex flex-col gap-4  items-center justify-center text-2xl font-medium hover:text-muve-principal hover:font-semibold"
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

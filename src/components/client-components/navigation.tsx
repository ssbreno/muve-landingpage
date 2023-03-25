'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { config } from '../../config';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export function Navigation() {
  const navigation = useRef<HTMLDivElement>(null)

  const { navigation, mainTitle, logo } = config;

  function handleMenu() {
    if (navigation?.current) {
      navigation.current.classList.toggle('translate-x-full')
    }
  }

  return (
    <div className="relative">
      <nav className="hidden lg:block">
        <div className="flex gap-7 items-center">
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
        <button
          onClick={handleMenu}
          className="p-1 items-center justify-center border border-black flex ml-auto mb-5"
          role="button"
          title="Botão de fechar o menu"
          aria-label="Botão de fechar o menu"
        >
          <AiOutlineClose size={20} color="#000" />
        </button>
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
      </nav>
    </div>
  )
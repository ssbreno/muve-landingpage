import { LogoBox } from './client-components/logoBox';

const Footer = () => {
  return (
    <footer className="bg-muve-bluedark py-40 px-40 lg:px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between container mx-auto">
        <ul className="flex items-center gap-6 text-white text-sm">
          <li>
            <a
              href="https://www.instagram.com/Muve.go/"
              target="_blank"
              rel="noreferrer"
              aria-label="Link para o meu Instagram"
              title="Link para o meu Instagram"
            >
              <LogoBox
                className="border-[2px] border-white p-2 hover:shadow-[2px_2px_0] hover:shadow-app-purple hover:border-app-purple transition-all duration-300 text-white hover:text-app-purple"
                size={20}
                name="instagram"
              />
            </a>
          </li>
        </ul>
        <span className="text-sm italic text-white mb-5 lg:mb-0">
          <h2>Plataformas</h2>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

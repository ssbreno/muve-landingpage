import { config } from '../config';
import TypingText from './client-components/typingText';

export function Hero() {
  const { mainContent } = config;
  return (
    <main
      id="home"
      className="flex overflow-x-hidden flex-col bg-muve-principal md:px-6 lg:px-4 
    md:justify-center items-center lg:h-screen h-screen"
    >
      <div className="flex flex-col lg:w-screen w-screen justify-center items-center container">
        <p className="text-muve-white font-epilogue font-bold lg:text-5xl text-xl ">
          {mainContent}
        </p>
        <TypingText />
      </div>
    </main>
  );
}

import { config } from '../config';

const { titleNotFound } = config;

export const metadata = {
  title: titleNotFound,
};

export default function NotFound() {
  return (
    <main className="py-20 container mx-auto px-6 lg:px-4">
      <h1 className="text-4xl lg:text-6xl font-bold mb-10 lg:mb-12 text-shadow-purple">
        O que você procura não está aqui... <br />
      </h1>
      <div className="flex mb-10 lg:mb-12 gap-10"></div>
    </main>
  );
}

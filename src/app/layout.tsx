import '../styles/styles.css';
import { ReactNode } from 'react';
import Header from '../components/header';
import * as gtag from '../lib/gtag';
import Footer from '../components/footer';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';

const machina = localFont({
  src: [
    {
      path: '../../public/fonts/PPNeueMachina-PlainRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMachina-InktrapRegular.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMachina-PlainUltrabold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-machina',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '800', '500'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${machina.variable} ${poppins.variable}`}>
      <head />
      <body className="flex flex-col">
        <Header />
        {children}
        <Footer />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtag.GA_TRACKING_ID}`}
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}

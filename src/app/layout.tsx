import '../styles/styles.css';
import { ReactNode } from 'react';
import Header from '../components/header';
import * as gtag from '../lib/gtag';
import FooterReal from './../components/footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head />
      <body className="flex flex-col">
        <Header />
        {children}
        <FooterReal />
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

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { AppConfig } from '../utils/AppConfig';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <meta charSet="utf-8" />
        <title>{AppConfig.site_name}</title>
        <meta name="description" content={AppConfig.description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Muve Delivery Sistemas de Entregas"
      />
      <meta property="og:title" content={`${AppConfig.site_name} | Themeptation`} />
      <meta
        property="og:description"
        content="Muve Delivery Sistemas de Entregas"
      />
      <meta property="og:url" content="https://muve.delivery/" />
      <meta property="og:type" content="website" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import { AnimatedSection } from '../components/animatedSection';
import MainBg from '../components/main-bg';
import Content from '../components/main-content';
import { AppConfig } from '../utils/app-config';

const { site_name, description } = AppConfig;

export const metadata = {
  title: site_name,
  description: description,
  openGraph: {
    url: `https://muve.delivery/`,
    images: [
      {
        url: `https://muve.delivery/api/og`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: `https://muve.delivery/api/og`,
    title: site_name,
    description: description,
    creator: '@firemagic',
    site: 'https://muve.delivery',
  },
};

export default function Page() {
  return (
    <>
      <MainBg />
      <Content />
      <AnimatedSection />
    </>
  );
}

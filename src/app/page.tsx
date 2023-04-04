import { AnimatedSection } from '../components/animatedSection';
import { Hero } from '../components/hero';
import HeroAbout from '../components/heroAbout';
import Company from '../components/heroCompany';
import CompanySecond from '../components/heroCompanySecond';
import DeliveryManSection from '../components/heroDeliveryman';
import Footer from '../components/sub-footer';
import { HeroSecondBlue } from '../components/heroSecondBlue';
import { HeroSlider } from '../components/heroSlider';
import { AppConfig } from '../utils/app-config';

const { site_name, description } = AppConfig;

export const metadata = {
  title: site_name,
  description: description,
  openGraph: {
    url: `https://muve.delivery/`,
    title: 'Muve Delivery',
    locale: 'pt-br',
    type: 'website',
    description: description,
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
    creator: '@muve.go',
    site: 'https://muve.delivery',
  },
};

export default function Page() {
  return (
    <>
      <Hero />
      <HeroSlider />
      <HeroSecondBlue />
      <Company />
      <CompanySecond />
      <DeliveryManSection />
      <HeroAbout />
      <AnimatedSection />
      <Footer />
    </>
  );
}

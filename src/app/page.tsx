import { AnimatedGreen } from '../components/animatedGreen';
import { AnimatedSection } from '../components/animatedSection';
import { Hero } from '../components/hero';
import BlueSection from '../components/heroBlueSection';
import Company from '../components/heroCompany';
import CompanySecond from '../components/heroCompanySecond';
import DeliveryManSection from '../components/heroDeliveryman';
import DeliverySecond from '../components/heroDeliverySecond';
import SecondblueSection from '../components/heroSecondBlue';
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
      <AnimatedSection />
      <BlueSection />
      <DeliveryManSection />
      <DeliverySecond />
      <Company />
      <CompanySecond />
      <SecondblueSection />
      <AnimatedGreen />
    </>
  );
}

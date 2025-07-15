import React from 'react';
import type { Metadata } from 'next';
import Layout from '../components/layout/Layout/Layout';
import Hero from '../components/sections/Hero/Hero';
import AboutMe from '../components/sections/AboutMe/AboutMe';
import FeaturedServices from '../components/sections/FeaturedServices/FeaturedServices';
import Testimonials from '../components/sections/Testimonials/Testimonials';
import SecondaryCTA from '../components/sections/SecondaryCTA/SecondaryCTA';
import NewsletterSection from '../components/sections/Newsletter/NewsletterSection';

export const metadata: Metadata = {
  title: 'Ainara Coach | Inteligencia Emocional y Liderazgo',
  description: 'Transforma tu liderazgo desde la inteligencia emocional. Coaching, talleres y consultoría para profesionales y empresas. Agenda tu sesión gratuita.',
  keywords: [
    'Coaching',
    'Inteligencia Emocional',
    'Liderazgo',
    'PNL',
    'Talleres',
    'Consultoría',
    'Ainara Coach',
    'Desarrollo profesional',
    'Empresas',
  ],
  openGraph: {
    title: 'Ainara Coach | Inteligencia Emocional y Liderazgo',
    description: 'Transforma tu liderazgo desde la inteligencia emocional. Coaching, talleres y consultoría para profesionales y empresas.',
    url: 'https://ainaracoach.com',
    siteName: 'Ainara Coach',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ainara Coach | Inteligencia Emocional y Liderazgo',
    description: 'Transforma tu liderazgo desde la inteligencia emocional. Coaching, talleres y consultoría para profesionales y empresas.',
  },
};

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <FeaturedServices />
      <Testimonials />
      <SecondaryCTA />
      <NewsletterSection />
    </Layout>
  );
} 
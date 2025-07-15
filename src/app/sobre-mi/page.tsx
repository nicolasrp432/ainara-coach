import React from 'react';
import type { Metadata } from 'next';
import Layout from '../../components/layout/Layout/Layout';
import AboutMeFull from '../../components/sections/AboutMe/AboutMeFull';

export const metadata: Metadata = {
  title: 'Sobre mí | Ainara Coach',
  description: 'Conoce la historia, valores y metodología de Ainara Unamunzaga Santin, especialista en inteligencia emocional, PNL y liderazgo.',
  keywords: [
    'Sobre mí',
    'Ainara Coach',
    'Inteligencia Emocional',
    'PNL',
    'Liderazgo',
    'Coach',
    'Transformación Consciente',
    'Valores',
    'Certificaciones',
  ],
  openGraph: {
    title: 'Sobre mí | Ainara Coach',
    description: 'Conoce la historia, valores y metodología de Ainara Unamunzaga Santin, especialista en inteligencia emocional, PNL y liderazgo.',
    url: 'https://ainaracoach.com/sobre-mi',
    siteName: 'Ainara Coach',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Sobre mí | Ainara Coach',
    description: 'Conoce la historia, valores y metodología de Ainara Unamunzaga Santin, especialista en inteligencia emocional, PNL y liderazgo.',
  },
};

export default function SobreMiPage() {
  return (
    <Layout>
      {/* Hero/Intro */}
      <section className="py-16 bg-primary-blue text-snow-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-poppins font-bold mb-4">Sobre mí</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            Mi historia, valores y metodología para acompañar tu transformación consciente.
          </p>
        </div>
      </section>
      <AboutMeFull />
    </Layout>
  );
} 
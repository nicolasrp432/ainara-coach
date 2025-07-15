import React from 'react';
import type { Metadata } from 'next';
import Layout from '../../components/layout/Layout/Layout';
import TestimonialsGrid from '../../components/sections/Testimonials/TestimonialsGrid';

export const metadata: Metadata = {
  title: 'Testimonios | Ainara Coach',
  description: 'Historias reales de transformación y éxito de profesionales y empresas que confiaron en el acompañamiento de Ainara Coach.',
  keywords: [
    'Testimonios',
    'Casos de éxito',
    'Clientes',
    'Ainara Coach',
    'Coaching',
    'Liderazgo',
    'Inteligencia Emocional',
    'Empresas',
  ],
  openGraph: {
    title: 'Testimonios | Ainara Coach',
    description: 'Historias reales de transformación y éxito de profesionales y empresas que confiaron en el acompañamiento de Ainara Coach.',
    url: 'https://ainaracoach.com/testimonios',
    siteName: 'Ainara Coach',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Testimonios | Ainara Coach',
    description: 'Historias reales de transformación y éxito de profesionales y empresas que confiaron en el acompañamiento de Ainara Coach.',
  },
};

export default function TestimoniosPage() {
  return (
    <Layout>
      {/* Hero/Intro */}
      <section className="py-16 bg-primary-blue text-snow-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-poppins font-bold mb-4">Testimonios</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            Historias reales de transformación y éxito de profesionales y empresas que confiaron en nuestro acompañamiento.
          </p>
        </div>
      </section>
      <TestimonialsGrid />
    </Layout>
  );
} 
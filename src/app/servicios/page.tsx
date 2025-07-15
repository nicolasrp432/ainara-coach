import React from 'react';
import type { Metadata } from 'next';
import Layout from '../../components/layout/Layout/Layout';
import ServicesList from '../../components/sections/Services/ServicesList';

export const metadata: Metadata = {
  title: 'Servicios | Ainara Coach',
  description: 'Coaching, talleres, programas de liderazgo, PNL y consultoría para profesionales y empresas. Descubre los servicios de Ainara Coach.',
  keywords: [
    'Servicios',
    'Coaching',
    'Talleres',
    'Liderazgo',
    'PNL',
    'Consultoría',
    'Ainara Coach',
    'Desarrollo profesional',
    'Empresas',
  ],
  openGraph: {
    title: 'Servicios | Ainara Coach',
    description: 'Coaching, talleres, programas de liderazgo, PNL y consultoría para profesionales y empresas. Descubre los servicios de Ainara Coach.',
    url: 'https://ainaracoach.com/servicios',
    siteName: 'Ainara Coach',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Servicios | Ainara Coach',
    description: 'Coaching, talleres, programas de liderazgo, PNL y consultoría para profesionales y empresas. Descubre los servicios de Ainara Coach.',
  },
};

export default function ServiciosPage() {
  return (
    <Layout>
      {/* Hero/Intro */}
      <section className="py-16 bg-primary-blue text-snow-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-poppins font-bold mb-4">Servicios</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            Soluciones personalizadas para tu desarrollo profesional y emocional. Descubre el servicio ideal para ti o tu empresa.
          </p>
        </div>
      </section>
      <ServicesList />
    </Layout>
  );
} 
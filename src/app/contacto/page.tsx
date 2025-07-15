import React from 'react';
import type { Metadata } from 'next';
import Layout from '../../components/layout/Layout/Layout';
import ContactSection from '../../components/sections/Contact/ContactSection';

export const metadata: Metadata = {
  title: 'Contacto | Ainara Coach',
  description: 'Contacta con Ainara Coach para agendar tu sesión gratuita, resolver dudas o solicitar información sobre servicios de coaching, talleres y consultoría.',
  keywords: [
    'Contacto',
    'Ainara Coach',
    'Coaching',
    'Talleres',
    'Consultoría',
    'Liderazgo',
    'Inteligencia Emocional',
    'Empresas',
    'Sesión gratuita',
  ],
  openGraph: {
    title: 'Contacto | Ainara Coach',
    description: 'Contacta con Ainara Coach para agendar tu sesión gratuita, resolver dudas o solicitar información sobre servicios de coaching, talleres y consultoría.',
    url: 'https://ainaracoach.com/contacto',
    siteName: 'Ainara Coach',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contacto | Ainara Coach',
    description: 'Contacta con Ainara Coach para agendar tu sesión gratuita, resolver dudas o solicitar información sobre servicios de coaching, talleres y consultoría.',
  },
};

export default function ContactoPage() {
  return (
    <Layout>
      {/* Hero/Intro */}
      <section className="py-16 bg-primary-blue text-snow-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-poppins font-bold mb-4">Contacto</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            ¿Listo para dar el siguiente paso? Completa el formulario o utiliza los datos de contacto para agendar tu sesión gratuita.
          </p>
        </div>
      </section>
      <ContactSection />
    </Layout>
  );
} 
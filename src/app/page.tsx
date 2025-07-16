import React from 'react';
import Layout from '../components/layout/Layout/Layout';
import Image from 'next/image';
import { Button } from '../components/common/Button/Button';

export default function HomePage() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative bg-pearl-gray/60 pt-12 pb-20 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-background.jpg" alt="Fondo" fill className="object-cover opacity-30" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <span className="font-playfair text-warm-gold text-xl mb-2 tracking-widest">Coaching & Liderazgo</span>
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-primary-blue mb-4 leading-tight">Transforma tu vida profesional<br />con inteligencia emocional</h1>
          <p className="text-lg md:text-xl text-primary-blue/80 mb-6 max-w-xl">Acompañamiento personalizado para mujeres y profesionales que buscan crecer, liderar y vivir con propósito.</p>
          <Button variant="primary" size="lg" className="mb-8">Agenda tu Sesión Gratuita</Button>
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-warm-gold shadow-lg mb-4">
            <Image src="/images/ainara-profile.jpg" alt="Coach" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-primary-blue text-center mb-10">Servicios Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-pearl-gray rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-warm-gold">
                  <Image src={`/images/testimonials/maria.jpg`} alt="Servicio" width={96} height={96} className="object-cover" />
                </div>
                <h3 className="font-poppins text-xl font-semibold text-primary-blue mb-2">Servicio {i}</h3>
                <p className="text-gray-700 mb-3">Descripción breve del servicio destacado, beneficios y resultados esperados.</p>
                <Button variant="outline" size="md">Ver más</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 bg-pearl-gray/60">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg flex-shrink-0 mx-auto md:mx-0 border-4 border-warm-gold">
            <Image src="/images/ainara-profile.jpg" alt="Coach" fill className="object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-primary-blue mb-4">Sobre mí</h2>
            <p className="text-gray-700 mb-4">Soy coach especialista en inteligencia emocional y liderazgo. Mi misión es ayudarte a descubrir tu potencial y acompañarte en tu proceso de transformación personal y profesional.</p>
            <Button variant="outline" className="mt-2">Conoce mi historia</Button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-poppins text-2xl md:text-3xl font-bold text-primary-blue mb-4">Descarga tu guía gratuita</h2>
          <p className="text-gray-700 mb-8">Recibe recursos exclusivos y herramientas para potenciar tu liderazgo e inteligencia emocional.</p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input type="text" placeholder="Nombre" className="flex-1 border border-pearl-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-blue" />
            <input type="email" placeholder="Email" className="flex-1 border border-pearl-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-blue" />
            <Button type="submit" variant="primary">Descargar</Button>
          </form>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 bg-pearl-gray/60">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins text-2xl md:text-3xl font-bold text-primary-blue text-center mb-10">Testimonios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="w-20 h-20 mb-4 relative rounded-full overflow-hidden border-4 border-warm-gold">
                  <Image src={`/images/testimonials/ana.jpg`} alt="Testimonio" width={80} height={80} className="object-cover" />
                </div>
                <p className="text-gray-700 italic mb-4">"Testimonio de ejemplo sobre la experiencia positiva con el coaching."</p>
                <div>
                  <h4 className="font-poppins font-semibold text-primary-blue text-lg">Nombre Cliente</h4>
                  <p className="text-sage-green text-sm">Rol en Empresa</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL SECTION */}
      <section className="py-12 bg-warm-gold/90 text-center">
        <h2 className="font-poppins text-2xl md:text-3xl font-bold text-primary-blue mb-4">¿Lista para dar el primer paso?</h2>
        <Button variant="primary" size="lg">Reserva una llamada gratuita</Button>
      </section>
    </Layout>
  );
} 
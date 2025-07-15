'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutMeFull = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Foto profesional */}
        <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg flex-shrink-0 mx-auto md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/ainara-profile.jpg"
              alt="Ainara Unamunzaga Santin"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
        {/* Contenido */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-primary-blue mb-4">
              Ainara Unamunzaga Santin
            </h2>
            <p className="text-gray-700 mb-4">
              Soy coach especialista en Inteligencia Emocional y PNL, con más de 10 años de experiencia acompañando a líderes y profesionales en su evolución personal y profesional. Mi enfoque combina ciencia, práctica y una visión holística para lograr resultados auténticos y sostenibles.
            </p>
            <div className="mb-4">
              <h3 className="font-poppins font-semibold text-lg text-sage-green mb-2">Certificaciones y Formación</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Máster en Programación Neurolingüística (PNL)</li>
                <li>Certificación en Inteligencia Emocional</li>
                <li>Formación en Reiki</li>
                <li>Coach Ejecutivo Certificado</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-poppins font-semibold text-lg text-sage-green mb-2">Metodología "Transformación Consciente"</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Autoconocimiento emocional</li>
                <li>Desarrollo de herramientas prácticas</li>
                <li>Aplicación en contexto profesional</li>
                <li>Medición de resultados</li>
              </ul>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-lg text-sage-green mb-2">Valores y Filosofía</h3>
              <ul className="flex flex-wrap gap-4 text-primary-blue font-medium">
                <li>Autenticidad</li>
                <li>Crecimiento</li>
                <li>Empatía</li>
                <li>Resultados</li>
                <li>Integralidad</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeFull; 
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '../../common/Button/Button';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Imagen profesional */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg flex-shrink-0 mx-auto md:mx-0">
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
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-primary-blue mb-4">
              Sobre mí
            </h2>
            <p className="text-gray-700 mb-4">
              Soy Ainara Unamunzaga Santin, coach especialista en Inteligencia Emocional y PNL. Mi misión es acompañar a líderes y profesionales a transformar sus desafíos en oportunidades de crecimiento, combinando ciencia y práctica para lograr resultados auténticos y sostenibles.
            </p>
            <ul className="text-sage-green font-medium mb-4 flex flex-wrap gap-4 justify-center md:justify-start">
              <li>PNL</li>
              <li>Reiki</li>
              <li>Inteligencia Emocional</li>
              <li>Metodología Transformación Consciente</li>
            </ul>
            <Link href="/sobre-mi">
              <Button
                variant="outline"
                className="mt-2"
              >
                Conoce mi historia
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 
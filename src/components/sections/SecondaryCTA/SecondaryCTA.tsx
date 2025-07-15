'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../common/Button/Button';
import Link from 'next/link';

const SecondaryCTA = () => {
  return (
    <section className="py-16 bg-warm-gold/90">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-poppins font-bold text-primary-blue mb-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ¿Listo para transformar tu liderazgo?
          </motion.span>
        </h2>
        <p className="text-lg text-primary-blue mb-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Da el siguiente paso y agenda tu sesión gratuita para descubrir cómo la inteligencia emocional puede potenciar tu vida profesional y personal.
          </motion.span>
        </p>
        <Link href="/contacto">
          <Button
            variant="primary"
            size="lg"
            className="bg-primary-blue text-snow-white hover:bg-primary-blue/90"
          >
            Agenda tu Sesión Gratuita
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default SecondaryCTA; 
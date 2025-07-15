'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: '1',
    client_name: 'María Rodríguez',
    client_role: 'Directora de RRHH',
    client_company: 'Tech Solutions',
    testimonial: 'El programa de coaching con Ainara transformó por completo mi enfoque del liderazgo. Ahora tengo herramientas prácticas para gestionar mejor mis emociones y las de mi equipo.',
    image_url: '/images/testimonials/maria.jpg',
  },
  {
    id: '2',
    client_name: 'Carlos Martínez',
    client_role: 'CEO',
    client_company: 'Innovate Corp',
    testimonial: 'La metodología de Ainara es única. Combina perfectamente la teoría con ejercicios prácticos que han mejorado significativamente mi capacidad de toma de decisiones.',
    image_url: '/images/testimonials/carlos.jpg',
  },
  {
    id: '3',
    client_name: 'Ana Sánchez',
    client_role: 'Gerente de Proyecto',
    client_company: 'Global Services',
    testimonial: 'Los talleres de inteligencia emocional me dieron exactamente lo que necesitaba para manejar situaciones de alta presión. Recomiendo totalmente trabajar con Ainara.',
    image_url: '/images/testimonials/ana.jpg',
  },
  // Puedes agregar más testimonios aquí
];

const gridVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, type: "spring" as const },
  }),
};

const TestimonialsGrid = () => {
  return (
    <section className="py-20 bg-pearl-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={t.id} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <motion.div
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={gridVariants}
              >
                <div className="w-24 h-24 mb-4 relative rounded-full overflow-hidden border-4 border-warm-gold">
                  <Image
                    src={t.image_url}
                    alt={t.client_name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 italic mb-4">"{t.testimonial}"</p>
                <div>
                  <h4 className="font-poppins font-semibold text-primary-blue text-lg">{t.client_name}</h4>
                  <p className="text-sage-green text-sm">{t.client_role} en {t.client_company}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid; 
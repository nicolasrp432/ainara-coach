'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/common/Card/Card';

interface Testimonial {
  id: string;
  client_name: string;
  client_role: string;
  client_company: string;
  testimonial: string;
  image_url: string;
}

const testimonials: Testimonial[] = [
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
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary-blue mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-600">
            Historias de transformación y crecimiento de profesionales que han confiado en nuestra metodología
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="relative">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentIndex].image_url}
                      alt={testimonials[currentIndex].client_name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-600 italic mb-4">
                      "{testimonials[currentIndex].testimonial}"
                    </p>
                    <div>
                      <h4 className="font-poppins font-semibold text-primary-blue">
                        {testimonials[currentIndex].client_name}
                      </h4>
                      <p className="text-sage-green">
                        {testimonials[currentIndex].client_role} en {testimonials[currentIndex].client_company}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0">
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                className="transform -translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-blue hover:bg-pearl-gray transition-colors"
                aria-label="Testimonio anterior"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="transform translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-blue hover:bg-pearl-gray transition-colors"
                aria-label="Siguiente testimonio"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-primary-blue'
                    : 'bg-pearl-gray hover:bg-sage-green'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

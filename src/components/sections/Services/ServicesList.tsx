'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../common/Card/Card';
import { Button } from '../../common/Button/Button';

const services = [
  {
    id: 'coaching-individual',
    title: 'Coaching Individual Ejecutivo',
    description: 'Sesiones personalizadas para líderes y profesionales que buscan potenciar su inteligencia emocional y liderazgo.',
    benefits: [
      'Plan de desarrollo a medida',
      'Seguimiento personalizado',
      'Resultados medibles',
    ],
    methodology: 'Enfoque basado en PNL, inteligencia emocional y coaching ejecutivo.',
    duration: '60 min/sesión',
    modality: 'Online / Presencial',
    price: 'Consultar',
  },
  {
    id: 'talleres',
    title: 'Talleres de Inteligencia Emocional',
    description: 'Experiencias grupales para fortalecer habilidades emocionales y de liderazgo en equipos.',
    benefits: [
      'Dinámicas prácticas',
      'Casos reales',
      'Networking profesional',
    ],
    methodology: 'Metodología participativa y vivencial.',
    duration: '2-4h',
    modality: 'Online / Presencial',
    price: 'Consultar',
  },
  {
    id: 'liderazgo',
    title: 'Programas de Liderazgo Empresarial',
    description: 'Programas integrales para empresas que buscan desarrollar líderes auténticos y equipos cohesionados.',
    benefits: [
      'Diagnóstico organizacional',
      'Plan de acción estratégico',
      'Medición de resultados',
    ],
    methodology: 'Combinación de coaching, mentoring y formación.',
    duration: 'A medida',
    modality: 'In Company / Online',
    price: 'Consultar',
  },
  {
    id: 'pnl',
    title: 'Sesiones de PNL Aplicada',
    description: 'Aplicación de técnicas de PNL para superar bloqueos, mejorar comunicación y alcanzar objetivos.',
    benefits: [
      'Herramientas prácticas',
      'Resultados rápidos',
      'Enfoque personalizado',
    ],
    methodology: 'Técnicas avanzadas de PNL adaptadas a cada persona.',
    duration: '60 min/sesión',
    modality: 'Online / Presencial',
    price: 'Consultar',
  },
  {
    id: 'consultoria',
    title: 'Consultoría en Resolución de Conflictos',
    description: 'Soluciones estratégicas para empresas y equipos que enfrentan retos de comunicación y clima laboral.',
    benefits: [
      'Análisis de conflictos',
      'Intervención profesional',
      'Mejora del clima laboral',
    ],
    methodology: 'Diagnóstico, intervención y seguimiento.',
    duration: 'A medida',
    modality: 'In Company / Online',
    price: 'Consultar',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: "spring" as const },
  }),
};

const ServicesList = () => {
  return (
    <section className="py-20 bg-pearl-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div key={service.id} className="h-full flex flex-col shadow-xl border-0">
              <motion.div
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <h3 className="text-xl font-poppins font-semibold text-primary-blue mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-3 flex-1">{service.description}</p>
                <ul className="mb-3 text-sage-green text-sm space-y-1">
                  {service.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="mr-2">•</span>{b}
                    </li>
                  ))}
                </ul>
                <div className="mb-3 text-gray-600 text-xs">
                  <div><span className="font-semibold">Metodología:</span> {service.methodology}</div>
                  <div><span className="font-semibold">Duración:</span> {service.duration}</div>
                  <div><span className="font-semibold">Modalidad:</span> {service.modality}</div>
                  <div><span className="font-semibold">Precio:</span> {service.price}</div>
                </div>
                <Button variant="primary" className="mt-auto" size="md">
                  Solicitar información
                </Button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList; 
'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/common/Card/Card';
import { Button } from '@/components/common/Button/Button';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

const featuredServices: Service[] = [
  {
    id: 'coaching-individual',
    title: 'Coaching Individual',
    description: 'Sesiones personalizadas para desarrollar tu potencial de liderazgo y gestión emocional.',
    icon: '🎯',
    benefits: [
      'Plan de desarrollo personalizado',
      'Seguimiento continuo',
      'Herramientas prácticas',
    ],
  },
  {
    id: 'talleres',
    title: 'Talleres de Inteligencia Emocional',
    description: 'Experiencias grupales para fortalecer habilidades emocionales y de liderazgo.',
    icon: '🌱',
    benefits: [
      'Dinámicas interactivas',
      'Casos prácticos',
      'Networking profesional',
    ],
  },
  {
    id: 'consultoria',
    title: 'Consultoría Empresarial',
    description: 'Soluciones estratégicas para desarrollar equipos emocionalmente inteligentes.',
    icon: '💡',
    benefits: [
      'Diagnóstico organizacional',
      'Plan de acción',
      'Medición de resultados',
    ],
  },
];

const FeaturedServices = () => {
  return (
    <section className="py-20 bg-pearl-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-poppins font-bold text-primary-blue mb-4"
          >
            Servicios Destacados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Descubre cómo podemos trabajar juntos para potenciar tu desarrollo personal y profesional
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                variant="default"
                hover
                className="h-full flex flex-col"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-poppins font-semibold text-primary-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="text-sage-green mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => {
                    // Add navigation or modal trigger here
                  }}
                >
                  Saber más
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              // Add navigation to services page
            }}
          >
            Ver todos los servicios
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServices;

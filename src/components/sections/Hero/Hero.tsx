'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/common/Button/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  backgroundImage?: string;
}

const defaultProps: HeroProps = {
  title: "Transforma tu Liderazgo desde la Inteligencia Emocional",
  subtitle: "Acompaño a profesionales y empresarios a desarrollar un liderazgo auténtico que inspire resultados",
  ctaText: "Agenda tu Sesión Gratuita",
  backgroundImage: "/images/hero-background.jpg"
};

const Hero = ({
  title = defaultProps.title,
  subtitle = defaultProps.subtitle,
  ctaText = defaultProps.ctaText,
  backgroundImage = defaultProps.backgroundImage
}: HeroProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-primary-blue/40 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-snow-white mb-6"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-pearl-gray mb-8"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              variant="primary"
              className="bg-warm-gold hover:bg-warm-gold/90 text-primary-blue"
            >
              {ctaText}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-snow-white to-transparent z-10" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-snow-white rounded-full p-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-2 h-2 bg-snow-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

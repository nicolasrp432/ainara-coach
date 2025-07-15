import React from 'react';
import NewsletterForm from './NewsletterForm';

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-2xl md:text-3xl font-poppins font-bold text-primary-blue mb-4 text-center">Suscríbete a la Newsletter</h2>
        <p className="text-gray-700 mb-8 text-center">
          Recibe recursos exclusivos, novedades y herramientas para potenciar tu liderazgo e inteligencia emocional.
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
};

export default NewsletterSection; 
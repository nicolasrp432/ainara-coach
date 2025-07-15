import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section className="py-20 bg-pearl-gray">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12">
        {/* Formulario */}
        <div className="flex-1 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-poppins font-bold text-primary-blue mb-6 text-center md:text-left">Formulario de Contacto</h2>
          <ContactForm />
        </div>
        {/* Datos de contacto */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h3 className="font-poppins font-semibold text-lg text-primary-blue mb-4">Información de Contacto</h3>
          <p className="text-gray-700 mb-2">Email: <a href="mailto:contacto@ainaracoach.com" className="text-primary-blue underline">contacto@ainaracoach.com</a></p>
          <p className="text-gray-700 mb-2">Teléfono: <a href="tel:+34123456789" className="text-primary-blue underline">+34 123 456 789</a></p>
          <p className="text-gray-700 mb-2">LinkedIn: <a href="https://linkedin.com/in/ainara" target="_blank" rel="noopener" className="text-primary-blue underline">ainara</a></p>
          <p className="text-gray-700 mb-2">Instagram: <a href="https://instagram.com/ainaracoach" target="_blank" rel="noopener" className="text-primary-blue underline">@ainaracoach</a></p>
          {/* Aquí puedes agregar mapa o dirección si aplica */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 
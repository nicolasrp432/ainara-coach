'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Enlaces',
      links: [
        { name: 'Inicio', href: '/' },
        { name: 'Sobre mí', href: '/sobre-mi' },
        { name: 'Servicios', href: '/servicios' },
        { name: 'Testimonios', href: '/testimonios' },
        { name: 'Contacto', href: '/contacto' },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { name: 'Coaching Individual', href: '/servicios#coaching-individual' },
        { name: 'Talleres', href: '/servicios#talleres' },
        { name: 'Programas de Liderazgo', href: '/servicios#liderazgo' },
        { name: 'Consultoría', href: '/servicios#consultoria' },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { name: 'Email', href: 'mailto:contacto@ainaracoach.com' },
        { name: 'LinkedIn', href: 'https://linkedin.com/in/ainara' },
        { name: 'Instagram', href: 'https://instagram.com/ainaracoach' },
      ],
    },
  ];

  return (
    <footer className="bg-primary-blue text-snow-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-playfair text-2xl">Ainara</span>
            </Link>
            <p className="text-pearl-gray/80 text-sm">
              Especialista en Inteligencia Emocional y PNL. Transformando el liderazgo a través del autoconocimiento.
            </p>
          </div>

          {/* Navigation Sections */}
          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-poppins font-medium text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-pearl-gray/80 hover:text-snow-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-pearl-gray/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-pearl-gray/60 text-sm">
              © {currentYear} Ainara Coach. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacidad"
                className="text-pearl-gray/60 hover:text-snow-white transition-colors text-sm"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terminos"
                className="text-pearl-gray/60 hover:text-snow-white transition-colors text-sm"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

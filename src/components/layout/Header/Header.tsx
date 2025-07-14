'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isScrolled?: boolean;
  currentPage?: string;
}

const navigationItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Sobre mí', path: '/sobre-mi' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Testimonios', path: '/testimonios' },
  { name: 'Contacto', path: '/contacto' },
];

export const Header = ({ isScrolled = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(isScrolled);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `
    fixed top-0 w-full z-50 transition-all duration-300
    ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}
  `;

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
  };

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-playfair text-2xl font-medium text-primary-blue">
              Ainara
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`
                  font-poppins text-sm font-medium transition-colors
                  ${pathname === item.path
                    ? 'text-primary-blue'
                    : 'text-gray-600 hover:text-primary-blue'
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="btn btn-primary"
            >
              Agenda tu Sesión
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`
                block w-full h-0.5 bg-primary-blue transition-transform
                ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}
              `} />
              <span className={`
                block w-full h-0.5 bg-primary-blue transition-opacity
                ${isMenuOpen ? 'opacity-0' : ''}
              `} />
              <span className={`
                block w-full h-0.5 bg-primary-blue transition-transform
                ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}
              `} />
            </div>
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="
                  fixed top-0 right-0 h-screen w-64 bg-white shadow-lg
                  md:hidden p-6 pt-20
                "
              >
                <div className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`
                        font-poppins text-lg transition-colors
                        ${pathname === item.path
                          ? 'text-primary-blue'
                          : 'text-gray-600 hover:text-primary-blue'
                        }
                      `}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/contacto"
                    className="btn btn-primary mt-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Agenda tu Sesión
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Jugadores', href: '#jugadores' },
  { label: 'Estadísticas', href: '#estadisticas' },
  { label: 'Trofeos', href: '#trofeos' },
  { label: 'Historia', href: '#historia' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#inicio" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#inicio'); }}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-sm">FCB</span>
              </div>
              <span className={`font-bold text-lg transition-colors ${isScrolled ? 'text-white' : 'text-white'}`}>
                Barcelona
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-slate-300 hover:text-white hover:bg-white/10' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#jugadores"
                onClick={(e) => { e.preventDefault(); scrollToSection('#jugadores'); }}
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300"
              >
                Ver Plantilla
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div 
          className={`absolute top-20 left-4 right-4 bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl transition-all duration-300 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-800">
              <a
                href="#jugadores"
                onClick={(e) => { e.preventDefault(); scrollToSection('#jugadores'); }}
                className="block w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center font-semibold rounded-xl"
              >
                Ver Plantilla
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

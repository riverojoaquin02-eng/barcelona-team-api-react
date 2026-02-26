import React from 'react';
import { ClubInfo } from '../data/barcaData';
import { Instagram, Twitter, Facebook, Youtube, Globe, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  clubInfo: ClubInfo;
}

export const Footer: React.FC<FooterProps> = ({ clubInfo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-red-600 flex items-center justify-center">
                <span className="text-white font-bold">FCB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">FC Barcelona</h3>
                <p className="text-slate-400 text-sm">Més que un club</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              {clubInfo.cantera.descripcion.substring(0, 120)}...
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-800 hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#jugadores" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Plantilla</a>
              </li>
              <li>
                <a href="#estadisticas" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Estadísticas</a>
              </li>
              <li>
                <a href="#trofeos" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Palmarés</a>
              </li>
              <li>
                <a href="#historia" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Historia</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Noticias</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Entradas</a>
              </li>
            </ul>
          </div>

          {/* Club Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Información</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">{clubInfo.estadio.direccion}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <span className="text-slate-400 text-sm">+34 902 189 900</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <span className="text-slate-400 text-sm">oab@fcbarcelona.cat</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <a href={clubInfo.web_oficial} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  www.fcbarcelona.es
                </a>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h4 className="text-white font-bold mb-6">El Club en Números</h4>
            <div className="space-y-4">
              <div className="p-4 bg-slate-800/50 rounded-xl">
                <p className="text-2xl font-bold text-white">{clubInfo.socios}</p>
                <p className="text-slate-400 text-sm">Socios</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl">
                <p className="text-2xl font-bold text-white">{clubInfo.trofeos.reduce((a, b) => a + b.cantidad, 0)}</p>
                <p className="text-slate-400 text-sm">Títulos</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl">
                <p className="text-2xl font-bold text-white">{clubInfo.estadio.capacidad}</p>
                <p className="text-slate-400 text-sm">Capacidad</p>
              </div>
            </div>
          </div>
        </div>

        {/* Patrocinadores */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <p className="text-xs text-slate-500 mb-2">Patrocinador Principal</p>
              <div className="px-6 py-3 bg-slate-800 rounded-xl">
                <span className="text-white font-bold text-lg">Spotify</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500 mb-2">Equipación</p>
              <div className="px-6 py-3 bg-slate-800 rounded-xl">
                <span className="text-white font-bold text-lg">Nike</span>
              </div>
            </div>
            {clubInfo.patrocinadores.otros.map((patrocinador, index) => (
              <div key={index} className="text-center">
                <p className="text-xs text-slate-500 mb-2">Patrocinador</p>
                <div className="px-6 py-3 bg-slate-800 rounded-xl">
                  <span className="text-slate-300 font-medium">{patrocinador}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {currentYear} Fútbol Club Barcelona. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Política de Privacidad</a>
              <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Términos de Uso</a>
              <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

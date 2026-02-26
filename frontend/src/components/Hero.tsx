import React from 'react';
import { ClubInfo } from '../data/barcaData';
import { Trophy, Users, Calendar, MapPin } from 'lucide-react';

interface HeroProps {
  clubInfo: ClubInfo;
}

export const Hero: React.FC<HeroProps> = ({ clubInfo }) => {
  const totalTrofeos = clubInfo.trofeos.reduce((acc, t) => acc + t.cantidad, 0);

  return (
    <div className="relative overflow-hidden">
      {/* Fondo con gradiente y patrón */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-red-900">
        {/* Patrón de rombos sutil */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Círculos decorativos */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lado izquierdo - Texto */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
              <span className="text-sm font-medium text-white/90">Fundado en 1899</span>
            </div>

            {/* Título principal */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">Fútbol Club</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                Barcelona
              </span>
            </h1>

            {/* Lema */}
            <p className="text-2xl lg:text-3xl font-light text-white/80 mb-4 italic">
              "Més que un club"
            </p>

            {/* Descripción */}
            <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto lg:mx-0">
              {clubInfo.cantera.descripcion.substring(0, 150)}...
            </p>

            {/* Botones */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#jugadores"
                className="px-8 py-4 bg-gradient-to-r from-red-700 to-red-600 text-white font-semibold rounded-xl shadow-lg shadow-red-700/30 hover:shadow-xl hover:shadow-red-700/40 transform hover:-translate-y-1 transition-all duration-300"
              >
                Ver Plantilla
              </a>
              <a
                href="#trofeos"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300"
              >
                Ver Trofeos
              </a>
            </div>
          </div>

          {/* Lado derecho - Stats y escudo */}
          <div className="relative">
            {/* Círculo decorativo detrás */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 blur-2xl"></div>
            </div>

            {/* Escudo simulado */}
            <div className="relative flex justify-center mb-12">
              <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-blue-600 via-red-700 to-yellow-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-800 to-red-900 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl lg:text-8xl font-bold text-white">FCB</span>
                    <div className="flex justify-center gap-2 mt-2">
                      <span className="text-yellow-400 text-2xl">★</span>
                      <span className="text-yellow-400 text-2xl">★</span>
                      <span className="text-yellow-400 text-2xl">★</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                <Trophy className="w-8 h-8 text-yellow-400 mb-3" />
                <p className="text-3xl font-bold text-white">{totalTrofeos}</p>
                <p className="text-sm text-white/70">Títulos Oficiales</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                <Users className="w-8 h-8 text-blue-400 mb-3" />
                <p className="text-3xl font-bold text-white">{clubInfo.socios}</p>
                <p className="text-sm text-white/70">Socios</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                <Calendar className="w-8 h-8 text-red-400 mb-3" />
                <p className="text-3xl font-bold text-white">125</p>
                <p className="text-sm text-white/70">Años de Historia</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                <MapPin className="w-8 h-8 text-green-400 mb-3" />
                <p className="text-3xl font-bold text-white">99k</p>
                <p className="text-sm text-white/70">Capacidad Camp Nou</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ola decorativa en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="rgba(15, 23, 42, 0.5)"
          />
        </svg>
      </div>
    </div>
  );
};

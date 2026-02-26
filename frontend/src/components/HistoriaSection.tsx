import React, { useState } from 'react';
import { Historia as HistoriaType } from '../data/barcaData';
import { BookOpen, Award, Users, Star, ChevronRight } from 'lucide-react';

interface HistoriaSectionProps {
  historia: HistoriaType;
}

export const HistoriaSection: React.FC<HistoriaSectionProps> = ({ historia }) => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <section id="historia" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 text-sm font-semibold mb-4">
            Desde 1899
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-500">Historia</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {historia.leyendas.length} años de pasión, triunfos y un estilo de juego único que ha revolucionado el fútbol mundial.
          </p>
        </div>

        {/* Info principal */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Fundación y valores */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Fundación</h3>
                  <p className="text-blue-400">{historia.fundacion}</p>
                </div>
              </div>

              <p className="text-slate-400 mb-6 leading-relaxed">
                El {historia.fundacion}, un grupo de jóvenes aficionados al fútbol liderados por
                <span className="text-white font-semibold"> {historia.fundadores[0]}</span> decidieron formar un club
                que representara a Barcelona y Cataluña. Nació así el <span className="text-blue-400 font-semibold">Foot-Ball Club Barcelona</span>.
              </p>

              <div className="p-4 bg-blue-500/10 rounded-xl border-l-4 border-blue-500">
                <p className="text-xl italic text-white">"{historia.lema}"</p>
                <p className="text-sm text-slate-400 mt-2">- Lema del club</p>
              </div>
            </div>

            {/* Colores */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4">Colores del Club</h3>
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="h-24 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 mb-2"></div>
                  <p className="text-center text-slate-400 text-sm">{historia.colores[0]}</p>
                </div>
                <div className="flex-1">
                  <div className="h-24 rounded-xl bg-gradient-to-br from-red-700 to-red-800 mb-2"></div>
                  <p className="text-center text-slate-400 text-sm">{historia.colores[1]}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Records */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-600 to-yellow-700 flex items-center justify-center">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Récords del Club</h3>
                  <p className="text-yellow-400">Marcos históricos</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-800/50 rounded-xl">
                  <p className="text-sm text-slate-400 mb-1">Máximo goleador</p>
                  <p className="text-white font-semibold">{historia.records_club.maximo_goleador}</p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-xl">
                  <p className="text-sm text-slate-400 mb-1">Más partidos disputados</p>
                  <p className="text-white font-semibold">{historia.records_club.mas_partidos}</p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-xl">
                  <p className="text-sm text-slate-400 mb-1">Más títulos ganados</p>
                  <p className="text-white font-semibold">{historia.records_club.mas_titulos}</p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-xl">
                  <p className="text-sm text-slate-400 mb-1">Máxima goleada</p>
                  <p className="text-white font-semibold">{historia.records_club.maxima_goleada}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leyendas */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Leyendas del Club</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {historia.leyendas.map((leyenda, index) => (
              <div
                key={index}
                className="group p-4 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-purple-500/50 hover:bg-slate-800/50 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-purple-400" />
                </div>
                <p className="text-white text-sm font-medium">{leyenda}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Línea de tiempo */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Momentos Históricos</h3>

          <div className="relative">
            {/* Línea central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-red-500 to-yellow-500 rounded-full hidden md:block"></div>

            <div className="space-y-8">
              {historia.momentos_historicos.map((momento, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                >
                  {/* Contenido */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div
                      className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group ${selectedYear === momento.anio ? 'border-blue-500 ring-2 ring-blue-500/20' : ''}`}
                      onClick={() => setSelectedYear(selectedYear === momento.anio ? null : momento.anio)}
                    >
                      <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-500">
                          {momento.anio}
                        </span>
                        <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${selectedYear === momento.anio ? 'rotate-90' : ''}`} />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {momento.titulo}
                      </h4>
                      <p className={`text-slate-400 text-sm ${selectedYear === momento.anio ? '' : 'line-clamp-2'}`}>
                        {momento.descripcion}
                      </p>
                    </div>
                  </div>

                  {/* Punto en la línea */}
                  <div className="hidden md:flex w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-red-500 items-center justify-center shadow-lg shadow-blue-500/30 z-10">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>

                  {/* Espacio vacío para el otro lado */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Presidentes notables */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Presidentes Notables</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {historia.presidentes_notables.map((presidente, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-slate-800/50 rounded-full text-slate-300 border border-slate-700 hover:border-blue-500/50 hover:text-white transition-all"
              >
                {presidente}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

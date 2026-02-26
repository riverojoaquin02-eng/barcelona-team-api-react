import React, { useState } from 'react';
import { Trofeo } from '../data/barcaData';
import { Trophy, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

interface TrofeosSectionProps {
  trofeos: Trofeo[];
}

export const TrofeosSection: React.FC<TrofeosSectionProps> = ({ trofeos }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Ordenar por cantidad de trofeos
  const trofeosOrdenados = [...trofeos].sort((a, b) => b.cantidad - a.cantidad);
  const totalTrofeos = trofeos.reduce((acc, t) => acc + t.cantidad, 0);

  return (
    <section id="trofeos" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-600/20 text-yellow-400 text-sm font-semibold mb-4">
            Palmarés Histórico
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Sala de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Trofeos</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            El Barcelona es uno de los clubes más laureados del mundo. Un legado de éxitos que se construye día a día.
          </p>

          {/* Total de trofeos */}
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 rounded-2xl border border-yellow-500/30">
            <Trophy className="w-10 h-10 text-yellow-400" />
            <div className="text-left">
              <p className="text-4xl font-bold text-white">{totalTrofeos}</p>
              <p className="text-yellow-400 text-sm">Títulos Oficiales</p>
            </div>
          </div>
        </div>

        {/* Grid de trofeos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trofeosOrdenados.map((trofeo, index) => (
            <div
              key={trofeo.id}
              className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border transition-all duration-500 cursor-pointer ${expandedId === trofeo.id
                  ? 'border-yellow-500/50 shadow-xl shadow-yellow-500/10'
                  : 'border-slate-700 hover:border-yellow-500/30'
                }`}
              onClick={() => setExpandedId(expandedId === trofeo.id ? null : trofeo.id)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="p-6">
                {/* Icono y número */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg shadow-yellow-500/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{trofeo.imagen}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-5xl font-bold text-white">{trofeo.cantidad}</p>
                    <p className="text-yellow-400 text-sm">títulos</p>
                  </div>
                </div>

                {/* Nombre y descripción */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {trofeo.nombre}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {trofeo.descripcion}
                </p>

                {/* Último ganado */}
                <div className="flex items-center gap-2 text-sm mb-4">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-400">Último: </span>
                  <span className="text-yellow-400 font-medium">{trofeo.ultimo_ganado}</span>
                </div>

                {/* Expandible */}
                <div className={`overflow-hidden transition-all duration-500 ${expandedId === trofeo.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-4 border-t border-slate-700">
                    <p className="text-sm text-slate-400 mb-3">Años ganados:</p>
                    <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                      {trofeo.anios_ganados.map((anio) => (
                        <span
                          key={anio}
                          className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded-lg text-xs font-medium"
                        >
                          {anio}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botón expandir */}
                <button className="w-full mt-4 flex items-center justify-center gap-2 py-2 text-slate-400 hover:text-white transition-colors">
                  {expandedId === trofeo.id ? (
                    <>
                      <span className="text-sm">Ver menos</span>
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span className="text-sm">Ver todos los años</span>
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de éxitos destacados */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-900/30 to-slate-800/30 rounded-2xl p-6 border border-blue-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">5</p>
                <p className="text-blue-400 text-sm">Champions League</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Última conquista en 2015 con la MSN. Uno de los clubes más exitosos de la competición.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-900/30 to-slate-800/30 rounded-2xl p-6 border border-red-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">27</p>
                <p className="text-red-400 text-sm">Ligas Españolas</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              El club ganó la primera edición de la Liga en 1929 y es uno de los más laureados.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-900/30 to-slate-800/30 rounded-2xl p-6 border border-yellow-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-yellow-600 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">31</p>
                <p className="text-yellow-400 text-sm">Copas del Rey</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Récord absoluto de la competición. Máximo ganador histórico de la Copa de Su Majestad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

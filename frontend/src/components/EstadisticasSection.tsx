import React from 'react';
import { EstadisticasTemporada } from '../data/barcaData';
import { Target, Shield, Swords, TrendingUp, Award, Globe } from 'lucide-react';

interface EstadisticasSectionProps {
  estadisticas: EstadisticasTemporada;
}

export const EstadisticasSection: React.FC<EstadisticasSectionProps> = ({ estadisticas }) => {
  const { liga, champions, copa_rey } = estadisticas;

  // Calcular porcentajes
  const winRate = Math.round((liga.ganados / liga.partidos_jugados) * 100);
  const goalsPerGame = (liga.goles_favor / liga.partidos_jugados).toFixed(1);

  return (
    <section id="estadisticas" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 text-sm font-semibold mb-4">
            Temporada {estadisticas.temporada}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Estadísticas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-500">2024-25</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Rendimiento del equipo en todas las competiciones esta temporada
          </p>
        </div>

        {/* Stats principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* La Liga */}
          <div className="bg-gradient-to-br from-blue-900/50 to-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">La Liga</h3>
                  <p className="text-blue-400 text-sm">España</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-white">{liga.posicion}º</p>
                <p className="text-slate-400 text-sm">Posición</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-white/5 rounded-xl">
                <p className="text-2xl font-bold text-green-400">{liga.ganados}</p>
                <p className="text-xs text-slate-400">Victorias</p>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-xl">
                <p className="text-2xl font-bold text-yellow-400">{liga.empatados}</p>
                <p className="text-xs text-slate-400">Empates</p>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-xl">
                <p className="text-2xl font-bold text-red-400">{liga.perdidos}</p>
                <p className="text-xs text-slate-400">Derrotas</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Puntos</span>
                <span className="text-white font-semibold">{liga.puntos}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Goles a favor</span>
                <span className="text-green-400 font-semibold">{liga.goles_favor}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Goles en contra</span>
                <span className="text-red-400 font-semibold">{liga.goles_contra}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Diferencia</span>
                <span className="text-blue-400 font-semibold">+{liga.diferencia_goles}</span>
              </div>
            </div>
          </div>

          {/* Champions League */}
          <div className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Champions</h3>
                  <p className="text-purple-400 text-sm">Europa</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-white">{champions.fase}</p>
                <p className="text-slate-400 text-sm">Fase actual</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-white/5 rounded-xl">
                <p className="text-2xl font-bold text-green-400">{champions.ganados}</p>
                <p className="text-xs text-slate-400">Victorias</p>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-xl">
                <p className="text-2xl font-bold text-yellow-400">{champions.empatados}</p>
                <p className="text-xs text-slate-400">Empates</p>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-xl">
                <p className="text-2xl font-bold text-red-400">{champions.perdidos}</p>
                <p className="text-xs text-slate-400">Derrotas</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Partidos</span>
                <span className="text-white font-semibold">{champions.partidos_jugados}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Goles a favor</span>
                <span className="text-green-400 font-semibold">{champions.goles_favor}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Goles en contra</span>
                <span className="text-red-400 font-semibold">{champions.goles_contra}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Diferencia</span>
                <span className="text-purple-400 font-semibold">+{champions.goles_favor - champions.goles_contra}</span>
              </div>
            </div>
          </div>

          {/* Copa del Rey */}
          <div className="bg-gradient-to-br from-yellow-900/50 to-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-yellow-600 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Copa del Rey</h3>
                  <p className="text-yellow-400 text-sm">España</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-white">{copa_rey.fase}</p>
                <p className="text-slate-400 text-sm">Fase actual</p>
              </div>
            </div>

            <div className="flex items-center justify-center py-8">
              <div className="text-center">
                <p className="text-5xl mb-2">🏆</p>
                <p className="text-xl text-white font-semibold">{copa_rey.resultado}</p>
                <p className="text-slate-400 mt-2">Competición en disputa</p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-500/10 rounded-xl">
              <p className="text-yellow-400 text-sm text-center">
                31 títulos históricos en esta competición
              </p>
            </div>
          </div>
        </div>

        {/* Stats destacadas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-green-400" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{winRate}%</p>
                <p className="text-slate-400 text-sm">% Victorias</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-red-500/50 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Swords className="w-7 h-7 text-red-400" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{goalsPerGame}</p>
                <p className="text-slate-400 text-sm">Goles/Partido</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-yellow-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-yellow-400" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{liga.goles_favor}</p>
                <p className="text-slate-400 text-sm">Goles Totales</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-purple-400" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">+{liga.diferencia_goles}</p>
                <p className="text-slate-400 text-sm">Diferencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

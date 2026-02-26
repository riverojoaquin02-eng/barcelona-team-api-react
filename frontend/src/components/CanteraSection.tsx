import React from 'react';
import { ClubInfo } from '../data/barcaData';
import { GraduationCap, Users, Star, Lightbulb, Heart } from 'lucide-react';

interface CanteraSectionProps {
  cantera: ClubInfo['cantera'];
  filiales: ClubInfo['filiales'];
}

export const CanteraSection: React.FC<CanteraSectionProps> = ({ cantera, filiales }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-600/20 text-amber-400 text-sm font-semibold mb-4">
            La Masia
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {cantera.nombre}
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            {cantera.descripcion}
          </p>
        </div>

        {/* Filosofía */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-amber-900/20 to-slate-800/50 rounded-3xl p-8 border border-amber-500/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Filosofía</h3>
            </div>
            <div className="p-6 bg-amber-500/10 rounded-2xl border border-amber-500/20">
              <p className="text-xl italic text-amber-400 text-center">
                "{cantera.filosofia}"
              </p>
            </div>
            <p className="text-slate-400 mt-6 leading-relaxed">
              La Masia no solo forma futbolistas, forma personas íntegras que representan
              los valores del club tanto dentro como fuera del campo.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-slate-800/50 rounded-3xl p-8 border border-blue-500/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Método</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                <p className="text-slate-300">Juego de posición y dominio del balón</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                <p className="text-slate-300">Desarrollo técnico individual desde edades tempranas</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                <p className="text-slate-300">Formación académica complementaria</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                <p className="text-slate-300">Valores de respeto, humildad y trabajo en equipo</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                <p className="text-slate-300">Competitividad y espíritu de superación</p>
              </div>
            </div>
          </div>
        </div>

        {/* Jugadores famosos */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Jugadores Formados</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {cantera.jugadores_famosos.map((jugador, index) => (
              <div
                key={index}
                className="group p-4 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-purple-500/50 hover:bg-slate-800/50 transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-white text-sm font-medium">{jugador}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filiales */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Equipos Filiales</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filiales.map((filial, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-300 group"
              >
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {filial.nombre}
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Categoría:</span>
                    <span className="text-white">{filial.categoria}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Estadio:</span>
                    <span className="text-white">{filial.estadio}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

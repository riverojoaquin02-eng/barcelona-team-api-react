import React from 'react';
import { Estadio, Entrenador } from '../data/barcaData';
import { MapPin, Users, Calendar, Ruler, Building2, Briefcase, Award, History, Target } from 'lucide-react';

interface EstadioEntrenadorSectionProps {
  estadio: Estadio;
  entrenador: Entrenador;
}

export const EstadioEntrenadorSection: React.FC<EstadioEntrenadorSectionProps> = ({ estadio, entrenador }) => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-green-600/20 text-green-400 text-sm font-semibold mb-4">
            Institución
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Estadio y <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Cuerpo Técnico</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Sección Estadio */}
          <div className="bg-gradient-to-br from-blue-900/20 to-slate-800/50 rounded-3xl p-8 border border-blue-500/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-600/30">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{estadio.nombre}</h3>
                <p className="text-blue-400">Nuestra casa</p>
              </div>
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed">
              {estadio.historia}
            </p>

            {/* Stats del estadio */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl">
                <Users className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-sm text-slate-400">Capacidad</p>
                  <p className="font-semibold text-white">{estadio.capacidad}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl">
                <Calendar className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-sm text-slate-400">Inauguración</p>
                  <p className="font-semibold text-white">{estadio.inauguracion}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl">
                <Ruler className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="text-sm text-slate-400">Dimensiones</p>
                  <p className="font-semibold text-white">{estadio.dimensiones}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl">
                <MapPin className="w-5 h-5 text-red-400" />
                <div>
                  <p className="text-sm text-slate-400">Ubicación</p>
                  <p className="font-semibold text-white text-sm">Barcelona, España</p>
                </div>
              </div>
            </div>

            {/* Reformas */}
            <div>
              <h4 className="text-lg font-bold text-white mb-3">Reformas Históricas</h4>
              <div className="space-y-2">
                {estadio.reformas.map((reforma, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-slate-400 text-sm">{reforma}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Records */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/20">
              <h4 className="text-lg font-bold text-white mb-2">Récords del Estadio</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Asistencia récord:</span>
                  <span className="text-white font-medium">{estadio.records.asistencia_record}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Fecha:</span>
                  <span className="text-white font-medium">{estadio.records.fecha_record}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Partidos disputados:</span>
                  <span className="text-white font-medium">{estadio.records.partidos_jugados}+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sección Entrenador */}
          <div className="bg-gradient-to-br from-red-900/20 to-slate-800/50 rounded-3xl p-8 border border-red-500/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg shadow-red-600/30">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{entrenador.nombre}</h3>
                <p className="text-red-400">Entrenador Principal</p>
              </div>
            </div>

            {/* Info rápida */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                <p className="text-2xl font-bold text-white">{entrenador.edad}</p>
                <p className="text-xs text-slate-400">Años</p>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                <p className="text-2xl font-bold text-red-400">{entrenador.titulos_ganados}</p>
                <p className="text-xs text-slate-400">Títulos</p>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                <Flag className="w-6 h-6 mx-auto text-blue-400 mb-1" country={entrenador.nacionalidad} />
                <p className="text-xs text-slate-400">{entrenador.nacionalidad}</p>
              </div>
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed">
              {entrenador.biografia}
            </p>

            {/* Formación preferida */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-yellow-400" />
                <h4 className="text-lg font-bold text-white">Formación Preferida</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {entrenador.formacion_preferida.split(' / ').map((formacion, index) => (
                  <span key={index} className="px-4 py-2 bg-yellow-500/10 text-yellow-400 rounded-lg font-mono">
                    {formacion}
                  </span>
                ))}
              </div>
            </div>

            {/* Carrera */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <History className="w-5 h-5 text-blue-400" />
                <h4 className="text-lg font-bold text-white">Trayectoria</h4>
              </div>
              <div className="space-y-2">
                {entrenador.carrera.map((etapa, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0"></div>
                    <p className="text-slate-400 text-sm">{etapa}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Desde cuándo */}
            <div className="mt-6 p-4 bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-xl border border-red-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Dirigiendo al Barcelona desde</p>
                  <p className="text-xl font-bold text-white">{entrenador.desde}</p>
                </div>
                <Award className="w-10 h-10 text-red-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente helper para la bandera (simulado)
const Flag = ({ country, className }: { country: string; className?: string }) => {
  const flags: Record<string, string> = {
    'Alemana': '🇩🇪',
    'Española': '🇪🇸',
    'default': '⚽'
  };
  return <span className={className}>{flags[country] || flags.default}</span>;
};

import React, { useState } from 'react';
import { Jugador } from '../data/barcaData';
import { Search, Filter, User, Flag, Calendar, Ruler, Weight, Trophy } from 'lucide-react';

interface JugadoresSectionProps {
  jugadores: Jugador[];
}

const POSICIONES = ['Todos', 'Portero', 'Defensa', 'Centrocampista', 'Delantero', 'Extremo'];

// Función para obtener color según posición
const getPosicionColor = (posicion: string) => {
  const colors: Record<string, string> = {
    'Portero': 'from-yellow-500 to-yellow-600',
    'Defensa': 'from-blue-500 to-blue-600',
    'Defensa Central': 'from-blue-500 to-blue-600',
    'Lateral Izquierdo': 'from-blue-400 to-blue-500',
    'Centrocampista': 'from-green-500 to-green-600',
    'Mediocampista': 'from-green-500 to-green-600',
    'Delantero': 'from-red-500 to-red-600',
    'Extremo': 'from-purple-500 to-purple-600',
    'Extremo Derecho': 'from-purple-500 to-purple-600',
    'Delantero Centro': 'from-red-500 to-red-600',
    'Mediocampista Ofensivo': 'from-orange-500 to-orange-600',
  };
  return colors[posicion] || 'from-slate-500 to-slate-600';
};

export const JugadoresSection: React.FC<JugadoresSectionProps> = ({ jugadores }) => {
  const [posicionFilter, setPosicionFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJugador, setSelectedJugador] = useState<Jugador | null>(null);

  // Filtrar jugadores
  const filteredJugadores = jugadores.filter(jugador => {
    const matchesPosicion = posicionFilter === 'Todos' ||
      jugador.posicion.toLowerCase().includes(posicionFilter.toLowerCase());
    const matchesSearch =
      `${jugador.nombre} ${jugador.apellido}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      jugador.posicion.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesPosicion && matchesSearch;
  });

  return (
    <section id="jugadores" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-red-600/20 text-red-400 text-sm font-semibold mb-4">
            Plantilla 2024-25
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-500">Jugadores</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Conoce a las estrellas que defienden los colores del Barcelona
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          {/* Búsqueda */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar jugador..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Filtro por posición */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            <Filter className="w-5 h-5 text-slate-400 flex-shrink-0" />
            {POSICIONES.map((pos) => (
              <button
                key={pos}
                onClick={() => setPosicionFilter(pos)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${posicionFilter === pos
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-white'
                  }`}
              >
                {pos}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de jugadores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredJugadores.map((jugador, index) => (
            <div
              key={jugador.id}
              onClick={() => setSelectedJugador(jugador)}
              className="group bg-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Header de la tarjeta con dorsal */}
              <div className={`relative h-32 bg-gradient-to-br ${getPosicionColor(jugador.posicion)} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-6xl font-bold text-white/30">{jugador.dorsal}</span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    {jugador.posicion}
                  </span>
                </div>
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {jugador.nombre}
                </h3>
                <p className="text-2xl font-bold text-white mb-4">{jugador.apellido}</p>

                {/* Stats rápidos */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-2 bg-slate-800 rounded-xl">
                    <p className="text-lg font-bold text-white">{jugador.edad}</p>
                    <p className="text-xs text-slate-400">Años</p>
                  </div>
                  <div className="text-center p-2 bg-slate-800 rounded-xl">
                    <p className="text-lg font-bold text-white">{jugador.estadisticas.partidos}</p>
                    <p className="text-xs text-slate-400">Partidos</p>
                  </div>
                  <div className="text-center p-2 bg-slate-800 rounded-xl">
                    <p className="text-lg font-bold text-green-400">{jugador.estadisticas.goles}</p>
                    <p className="text-xs text-slate-400">Goles</p>
                  </div>
                </div>

                {/* Nacionalidad */}
                <div className="flex items-center gap-2 text-slate-400">
                  <Flag className="w-4 h-4" />
                  <span className="text-sm">{jugador.nacionalidad}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de detalle del jugador */}
        {selectedJugador && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedJugador(null)}
          >
            <div
              className="bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del modal */}
              <div className={`relative h-48 bg-gradient-to-br ${getPosicionColor(selectedJugador.posicion)} p-8`}>
                <button
                  onClick={() => setSelectedJugador(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  ✕
                </button>
                <div className="flex items-end h-full gap-6">
                  <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <div className="mb-2">
                    <p className="text-6xl font-bold text-white/20 absolute top-4 right-8">{selectedJugador.dorsal}</p>
                    <h3 className="text-3xl font-bold text-white">{selectedJugador.nombre} {selectedJugador.apellido}</h3>
                    <p className="text-white/80">{selectedJugador.posicion}</p>
                  </div>
                </div>
              </div>

              {/* Contenido del modal */}
              <div className="p-8 space-y-6">
                {/* Info personal */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-slate-800 rounded-xl">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-xs text-slate-400">Edad</p>
                      <p className="font-semibold text-white">{selectedJugador.edad} años</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-800 rounded-xl">
                    <Ruler className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="text-xs text-slate-400">Altura</p>
                      <p className="font-semibold text-white">{selectedJugador.altura}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-800 rounded-xl">
                    <Weight className="w-5 h-5 text-yellow-400" />
                    <div>
                      <p className="text-xs text-slate-400">Peso</p>
                      <p className="font-semibold text-white">{selectedJugador.peso}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-800 rounded-xl">
                    <Flag className="w-5 h-5 text-red-400" />
                    <div>
                      <p className="text-xs text-slate-400">Nacionalidad</p>
                      <p className="font-semibold text-white">{selectedJugador.nacionalidad}</p>
                    </div>
                  </div>
                </div>

                {/* Biografía */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Biografía</h4>
                  <p className="text-slate-400 leading-relaxed">{selectedJugador.biografia}</p>
                </div>

                {/* Estadísticas */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Estadísticas en el Club</h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="p-4 bg-slate-800 rounded-xl text-center">
                      <p className="text-2xl font-bold text-blue-400">{selectedJugador.estadisticas.partidos}</p>
                      <p className="text-xs text-slate-400">Partidos</p>
                    </div>
                    <div className="p-4 bg-slate-800 rounded-xl text-center">
                      <p className="text-2xl font-bold text-green-400">{selectedJugador.estadisticas.goles}</p>
                      <p className="text-xs text-slate-400">Goles</p>
                    </div>
                    <div className="p-4 bg-slate-800 rounded-xl text-center">
                      <p className="text-2xl font-bold text-yellow-400">{selectedJugador.estadisticas.asistencias}</p>
                      <p className="text-xs text-slate-400">Asistencias</p>
                    </div>
                    <div className="p-4 bg-slate-800 rounded-xl text-center">
                      <p className="text-2xl font-bold text-orange-400">{selectedJugador.estadisticas.tarjetas_amarillas}</p>
                      <p className="text-xs text-slate-400">Amarillas</p>
                    </div>
                    <div className="p-4 bg-slate-800 rounded-xl text-center">
                      <p className="text-2xl font-bold text-red-400">{selectedJugador.estadisticas.tarjetas_rojas}</p>
                      <p className="text-xs text-slate-400">Rojas</p>
                    </div>
                  </div>
                </div>

                {/* Palmarés */}
                {selectedJugador.palmares.length > 0 && (
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                      Palmarés en el Club
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedJugador.palmares.map((titulo, idx) => (
                        <span key={idx} className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-sm">
                          {titulo}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Info adicional */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                  <div>
                    <p className="text-sm text-slate-400">Fecha de nacimiento</p>
                    <p className="text-white">{selectedJugador.fecha_nacimiento}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Lugar de nacimiento</p>
                    <p className="text-white">{selectedJugador.lugar_nacimiento}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Debut con el club</p>
                    <p className="text-white">{selectedJugador.debut}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Valor de mercado</p>
                    <p className="text-green-400 font-semibold">{selectedJugador.valor_mercado}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

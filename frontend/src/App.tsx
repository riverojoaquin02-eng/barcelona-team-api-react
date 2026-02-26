import { useClubInfo, useJugadores, useTrofeos, useEstadisticas, useEstadio, useEntrenador, useHistoria } from './hooks/useBarcaData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { JugadoresSection } from './components/JugadoresSection';
import { EstadisticasSection } from './components/EstadisticasSection';
import { TrofeosSection } from './components/TrofeosSection';
import { HistoriaSection } from './components/HistoriaSection';
import { EstadioEntrenadorSection } from './components/EstadioEntrenadorSection';
import { CanteraSection } from './components/CanteraSection';
import { Footer } from './components/Footer';
import { Loading } from './components/ui/Loading';

export function App() {
  // Consumiendo datos de la "API" (datos estáticos simulando FastAPI)
  const { data: clubInfo, loading: loadingClub } = useClubInfo();
  const { data: jugadores, loading: loadingJugadores } = useJugadores();
  const { data: trofeos, loading: loadingTrofeos } = useTrofeos();
  const { data: estadisticas, loading: loadingEstadisticas } = useEstadisticas();
  const { data: estadio, loading: loadingEstadio } = useEstadio();
  const { data: entrenador, loading: loadingEntrenador } = useEntrenador();
  const { data: historia, loading: loadingHistoria } = useHistoria();

  // Verificar si está cargando
  const isLoading = loadingClub || loadingJugadores || loadingTrofeos ||
    loadingEstadisticas || loadingEstadio || loadingEntrenador || loadingHistoria;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (!clubInfo || !jugadores.length || !trofeos.length || !estadisticas || !estadio || !entrenador || !historia) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-xl">Error al cargar los datos del club</p>
          <p className="text-slate-400 mt-2">Por favor, intenta recargar la página</p>
        </div>
      </div>
    );
  }

  return (
    <div id="inicio" className="min-h-screen bg-slate-950">
      {/* Navegación */}
      <Navbar />

      {/* Hero Section */}
      <Hero clubInfo={clubInfo} />

      {/* Estadísticas */}
      <EstadisticasSection estadisticas={estadisticas} />

      {/* Jugadores */}
      <JugadoresSection jugadores={jugadores} />

      {/* Trofeos */}
      <TrofeosSection trofeos={trofeos} />

      {/* Historia */}
      <HistoriaSection historia={historia} />

      {/* Estadio y Entrenador */}
      <EstadioEntrenadorSection estadio={estadio} entrenador={entrenador} />

      {/* Cantera */}
      <CanteraSection cantera={clubInfo.cantera} filiales={clubInfo.filiales} />

      {/* Footer */}
      <Footer clubInfo={clubInfo} />
    </div>
  );
}

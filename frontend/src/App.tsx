import { Box, Typography, CircularProgress } from '@mui/material';
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
  const { data: clubInfo, loading: loadingClub } = useClubInfo();
  const { data: jugadores, loading: loadingJugadores } = useJugadores();
  const { data: trofeos, loading: loadingTrofeos } = useTrofeos();
  const { data: estadisticas, loading: loadingEstadisticas } = useEstadisticas();
  const { data: estadio, loading: loadingEstadio } = useEstadio();
  const { data: entrenador, loading: loadingEntrenador } = useEntrenador();
  const { data: historia, loading: loadingHistoria } = useHistoria();

  const isLoading = loadingClub || loadingJugadores || loadingTrofeos ||
    loadingEstadisticas || loadingEstadio || loadingEntrenador || loadingHistoria;

  if (isLoading) {
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: '#0a0f1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loading />
      </Box>
    );
  }

  if (!clubInfo || !jugadores.length || !trofeos.length || !estadisticas || !estadio || !entrenador || !historia) {
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: '#0a0f1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" color="white" sx={{ mb: 1 }}>Error al cargar los datos del club</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Por favor, intenta recargar la página</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box id="inicio" sx={{ minHeight: '100vh', bgcolor: '#0a0f1a' }}>
      <Navbar />
      <Hero clubInfo={clubInfo} />
      <EstadisticasSection estadisticas={estadisticas} />
      <JugadoresSection jugadores={jugadores} />
      <TrofeosSection trofeos={trofeos} />
      <HistoriaSection historia={historia} />
      <EstadioEntrenadorSection estadio={estadio} entrenador={entrenador} />
      <CanteraSection cantera={clubInfo.cantera} filiales={clubInfo.filiales} />
      <Footer clubInfo={clubInfo} />
    </Box>
  );
}

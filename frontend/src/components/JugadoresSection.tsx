import React, { useState } from 'react';
import { Jugador } from '../data/barcaData';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  InputAdornment,
  alpha,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HeightIcon from '@mui/icons-material/Height';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

interface JugadoresSectionProps {
  jugadores: Jugador[];
}

const POSICIONES = ['Todos', 'Portero', 'Defensa', 'Centrocampista', 'Delantero', 'Extremo'];

const getPosicionGradient = (posicion: string) => {
  const gradients: Record<string, string> = {
    'Portero': 'linear-gradient(135deg, #eab308, #ca8a04)',
    'Defensa': 'linear-gradient(135deg, #3b82f6, #2563eb)',
    'Defensa Central': 'linear-gradient(135deg, #3b82f6, #2563eb)',
    'Lateral Izquierdo': 'linear-gradient(135deg, #60a5fa, #3b82f6)',
    'Centrocampista': 'linear-gradient(135deg, #22c55e, #16a34a)',
    'Mediocampista': 'linear-gradient(135deg, #22c55e, #16a34a)',
    'Delantero': 'linear-gradient(135deg, #ef4444, #dc2626)',
    'Extremo': 'linear-gradient(135deg, #a855f7, #9333ea)',
    'Extremo Derecho': 'linear-gradient(135deg, #a855f7, #9333ea)',
    'Delantero Centro': 'linear-gradient(135deg, #ef4444, #dc2626)',
    'Mediocampista Ofensivo': 'linear-gradient(135deg, #f97316, #ea580c)',
  };
  return gradients[posicion] || 'linear-gradient(135deg, #64748b, #475569)';
};

export const JugadoresSection: React.FC<JugadoresSectionProps> = ({ jugadores }) => {
  const [posicionFilter, setPosicionFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJugador, setSelectedJugador] = useState<Jugador | null>(null);

  const filteredJugadores = jugadores.filter(jugador => {
    const matchesPosicion = posicionFilter === 'Todos' ||
      jugador.posicion.toLowerCase().includes(posicionFilter.toLowerCase());
    const matchesSearch =
      `${jugador.nombre} ${jugador.apellido}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      jugador.posicion.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesPosicion && matchesSearch;
  });

  return (
    <Box
      component="section"
      id="jugadores"
      sx={{ py: { xs: 8, md: 10 }, bgcolor: '#0a0f1a' }}
    >
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, sm: 3, lg: 4 } }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            label="Plantilla 2024-25"
            sx={{ mb: 2, bgcolor: alpha('#dc2626', 0.15), color: '#f87171', fontWeight: 600 }}
          />
          <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2rem', lg: '2.75rem' } }}>
            Nuestros{' '}
            <Box component="span" sx={{ background: 'linear-gradient(135deg, #60a5fa, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Jugadores
            </Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
            Conoce a las estrellas que defienden los colores del Barcelona
          </Typography>
        </Box>

        {/* Filters */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mb: 6 }}>
          <TextField
            fullWidth
            placeholder="Buscar jugador..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              flex: 1,
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                bgcolor: alpha('#1e293b', 0.5),
                '& fieldset': { borderColor: alpha('#334155', 0.5) },
                '&:hover fieldset': { borderColor: alpha('#3b82f6', 0.5) },
                '&.Mui-focused fieldset': { borderColor: '#3b82f6' },
              },
              '& .MuiInputBase-input': { color: 'white' },
            }}
          />
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
            {POSICIONES.map((pos) => (
              <Chip
                key={pos}
                label={pos}
                clickable
                onClick={() => setPosicionFilter(pos)}
                sx={{
                  fontWeight: 500,
                  borderRadius: 3,
                  bgcolor: posicionFilter === pos ? '#1565c0' : alpha('#1e293b', 0.5),
                  color: posicionFilter === pos ? 'white' : 'text.secondary',
                  '&:hover': {
                    bgcolor: posicionFilter === pos ? '#1976d2' : alpha('#334155', 0.7),
                    color: 'white',
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Player Grid */}
        <Grid container spacing={3}>
          {filteredJugadores.map((jugador) => (
            <Grid key={jugador.id} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Card
                onClick={() => setSelectedJugador(jugador)}
                sx={{
                  cursor: 'pointer',
                  borderRadius: 6,
                  overflow: 'hidden',
                  bgcolor: alpha('#0f172a', 0.5),
                  border: `1px solid ${alpha('#334155', 0.5)}`,
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    borderColor: alpha('#3b82f6', 0.5),
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 40px ${alpha('#3b82f6', 0.1)}`,
                    '& .player-name': { color: '#60a5fa' },
                    '& .card-header-shine': { opacity: 1 },
                  },
                }}
              >
                {/* Card Header with dorsal */}
                <Box
                  sx={{
                    position: 'relative',
                    height: 128,
                    background: getPosicionGradient(jugador.posicion),
                    overflow: 'hidden',
                  }}
                >
                  <Box sx={{ position: 'absolute', inset: 0, bgcolor: alpha('#000', 0.2) }} />
                  <Typography
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      fontSize: '3.5rem',
                      fontWeight: 800,
                      color: alpha('#fff', 0.25),
                    }}
                  >
                    {jugador.dorsal}
                  </Typography>
                  <Chip
                    label={jugador.posicion}
                    size="small"
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      right: 16,
                      bgcolor: alpha('#fff', 0.2),
                      color: 'white',
                      backdropFilter: 'blur(8px)',
                      fontSize: '0.7rem',
                    }}
                  />
                  <Box
                    className="card-header-shine"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.1), transparent)',
                      opacity: 0,
                      transition: 'opacity 0.5s',
                    }}
                  />
                </Box>

                <CardContent sx={{ p: 3 }}>
                  <Typography
                    className="player-name"
                    variant="h6"
                    fontWeight={700}
                    sx={{ transition: 'color 0.3s', mb: 0.5 }}
                  >
                    {jugador.nombre}
                  </Typography>
                  <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>
                    {jugador.apellido}
                  </Typography>

                  {/* Quick stats */}
                  <Grid container spacing={1} sx={{ mb: 2 }}>
                    {[
                      { val: jugador.edad, label: 'Años' },
                      { val: jugador.estadisticas.partidos, label: 'Partidos' },
                      { val: jugador.estadisticas.goles, label: 'Goles', color: '#4ade80' },
                    ].map((s, i) => (
                      <Grid key={i} size={4}>
                        <Paper
                          elevation={0}
                          sx={{ textAlign: 'center', p: 1, bgcolor: alpha('#1e293b', 0.8), borderRadius: 2.5 }}
                        >
                          <Typography variant="body1" fontWeight={700} sx={{ color: s.color || 'white' }}>
                            {s.val}
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            {s.label}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
                    <FlagIcon sx={{ fontSize: 16 }} />
                    <Typography variant="body2">{jugador.nacionalidad}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Player Detail Dialog */}
        <Dialog
          open={!!selectedJugador}
          onClose={() => setSelectedJugador(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 6,
              maxHeight: '90vh',
              bgcolor: '#111827',
              border: `1px solid ${alpha('#334155', 0.5)}`,
            },
          }}
        >
          {selectedJugador && (
            <>
              {/* Dialog Header */}
              <Box
                sx={{
                  position: 'relative',
                  height: 200,
                  background: getPosicionGradient(selectedJugador.posicion),
                  p: 4,
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <IconButton
                  onClick={() => setSelectedJugador(null)}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    bgcolor: alpha('#fff', 0.2),
                    color: 'white',
                    '&:hover': { bgcolor: alpha('#fff', 0.3) },
                  }}
                >
                  <CloseIcon />
                </IconButton>

                <Typography
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 72,
                    fontSize: '4rem',
                    fontWeight: 800,
                    color: alpha('#fff', 0.15),
                  }}
                >
                  {selectedJugador.dorsal}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 3 }}>
                  <Box
                    sx={{
                      width: 96,
                      height: 96,
                      borderRadius: 4,
                      bgcolor: alpha('#fff', 0.2),
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PersonIcon sx={{ fontSize: 48, color: 'white' }} />
                  </Box>
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="h4" fontWeight={800} color="white">
                      {selectedJugador.nombre} {selectedJugador.apellido}
                    </Typography>
                    <Typography sx={{ color: alpha('#fff', 0.8) }}>
                      {selectedJugador.posicion}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <DialogContent sx={{ p: 4 }}>
                {/* Personal Info */}
                <Grid container spacing={2} sx={{ mb: 4 }}>
                  {[
                    { icon: <CalendarMonthIcon sx={{ color: '#60a5fa' }} />, label: 'Edad', value: `${selectedJugador.edad} años` },
                    { icon: <HeightIcon sx={{ color: '#4ade80' }} />, label: 'Altura', value: selectedJugador.altura },
                    { icon: <FitnessCenterIcon sx={{ color: '#fbbf24' }} />, label: 'Peso', value: selectedJugador.peso },
                    { icon: <FlagIcon sx={{ color: '#f87171' }} />, label: 'Nacionalidad', value: selectedJugador.nacionalidad },
                  ].map((item, i) => (
                    <Grid key={i} size={{ xs: 6, md: 3 }}>
                      <Paper
                        elevation={0}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          p: 2,
                          bgcolor: alpha('#1e293b', 0.8),
                          borderRadius: 3,
                        }}
                      >
                        {item.icon}
                        <Box>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>{item.label}</Typography>
                          <Typography variant="body2" fontWeight={600}>{item.value}</Typography>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>

                {/* Biography */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 1.5 }}>Biografía</Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    {selectedJugador.biografia}
                  </Typography>
                </Box>

                {/* Club Stats */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 1.5 }}>Estadísticas en el Club</Typography>
                  <Grid container spacing={2}>
                    {[
                      { val: selectedJugador.estadisticas.partidos, label: 'Partidos', color: '#60a5fa' },
                      { val: selectedJugador.estadisticas.goles, label: 'Goles', color: '#4ade80' },
                      { val: selectedJugador.estadisticas.asistencias, label: 'Asistencias', color: '#fbbf24' },
                      { val: selectedJugador.estadisticas.tarjetas_amarillas, label: 'Amarillas', color: '#f97316' },
                      { val: selectedJugador.estadisticas.tarjetas_rojas, label: 'Rojas', color: '#f87171' },
                    ].map((s, i) => (
                      <Grid key={i} size={{ xs: 6, md: 2.4 }}>
                        <Paper
                          elevation={0}
                          sx={{ p: 2, textAlign: 'center', bgcolor: alpha('#1e293b', 0.8), borderRadius: 3 }}
                        >
                          <Typography variant="h5" fontWeight={700} sx={{ color: s.color }}>{s.val}</Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>{s.label}</Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                {/* Palmares */}
                {selectedJugador.palmares.length > 0 && (
                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <EmojiEventsIcon sx={{ color: '#fbbf24' }} />
                      <Typography variant="h6" fontWeight={700}>Palmarés en el Club</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {selectedJugador.palmares.map((titulo, idx) => (
                        <Chip
                          key={idx}
                          label={titulo}
                          sx={{
                            bgcolor: alpha('#eab308', 0.1),
                            color: '#fbbf24',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}

                {/* Additional Info */}
                <Grid container spacing={2} sx={{ pt: 3, borderTop: `1px solid ${alpha('#334155', 0.5)}` }}>
                  {[
                    { label: 'Fecha de nacimiento', value: selectedJugador.fecha_nacimiento },
                    { label: 'Lugar de nacimiento', value: selectedJugador.lugar_nacimiento },
                    { label: 'Debut con el club', value: selectedJugador.debut },
                    { label: 'Valor de mercado', value: selectedJugador.valor_mercado, color: '#4ade80' },
                  ].map((item, i) => (
                    <Grid key={i} size={{ xs: 12, md: 6 }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.label}</Typography>
                      <Typography fontWeight={item.color ? 600 : 400} sx={{ color: item.color || 'white' }}>
                        {item.value}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Box>
    </Box>
  );
};

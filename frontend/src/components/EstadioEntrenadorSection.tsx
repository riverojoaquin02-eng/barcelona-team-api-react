import React from 'react';
import { Estadio, Entrenador } from '../data/barcaData';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Chip,
  alpha,
} from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StraightenIcon from '@mui/icons-material/Straighten';
import ApartmentIcon from '@mui/icons-material/Apartment';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HistoryIcon from '@mui/icons-material/History';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

interface EstadioEntrenadorSectionProps {
  estadio: Estadio;
  entrenador: Entrenador;
}

const FlagEmoji = ({ country }: { country: string }) => {
  const flags: Record<string, string> = {
    'Alemana': '🇩🇪',
    'Española': '🇪🇸',
    'default': '⚽',
  };
  return <span style={{ fontSize: '1.5rem' }}>{flags[country] || flags.default}</span>;
};

export const EstadioEntrenadorSection: React.FC<EstadioEntrenadorSectionProps> = ({ estadio, entrenador }) => {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: '#0f172a' }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, sm: 3, lg: 4 } }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip label="Institución" sx={{ mb: 2, bgcolor: alpha('#16a34a', 0.15), color: '#4ade80', fontWeight: 600 }} />
          <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2rem', lg: '2.75rem' } }}>
            Estadio y{' '}
            <Box component="span" sx={{ background: 'linear-gradient(135deg, #4ade80, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Cuerpo Técnico
            </Box>
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Stadium */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 6,
                background: `linear-gradient(135deg, ${alpha('#1e3a6e', 0.2)}, ${alpha('#1e293b', 0.5)})`,
                border: `1px solid ${alpha('#3b82f6', 0.2)}`,
                height: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{ width: 64, height: 64, borderRadius: 4, background: 'linear-gradient(135deg, #1565c0, #1976d2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 8px 20px ${alpha('#1565c0', 0.3)}` }}>
                  <ApartmentIcon sx={{ fontSize: 32, color: 'white' }} />
                </Box>
                <Box>
                  <Typography variant="h5" fontWeight={700}>{estadio.nombre}</Typography>
                  <Typography variant="body2" sx={{ color: '#60a5fa' }}>Nuestra casa</Typography>
                </Box>
              </Box>

              <Typography sx={{ color: alpha('#fff', 0.7), mb: 3, lineHeight: 1.8 }}>
                {estadio.historia}
              </Typography>

              {/* Stadium Stats */}
              <Grid container spacing={2} sx={{ mb: 3 }}>
                {[
                  { icon: <GroupsIcon sx={{ color: '#60a5fa' }} />, label: 'Capacidad', value: estadio.capacidad },
                  { icon: <CalendarMonthIcon sx={{ color: '#4ade80' }} />, label: 'Inauguración', value: estadio.inauguracion },
                  { icon: <StraightenIcon sx={{ color: '#fbbf24' }} />, label: 'Dimensiones', value: estadio.dimensiones },
                  { icon: <PlaceIcon sx={{ color: '#f87171' }} />, label: 'Ubicación', value: 'Barcelona, España' },
                ].map((stat, i) => (
                  <Grid key={i} size={6}>
                    <Paper
                      elevation={0}
                      sx={{ display: 'flex', alignItems: 'center', gap: 1.5, p: 2, bgcolor: alpha('#1e293b', 0.5), borderRadius: 3 }}
                    >
                      {stat.icon}
                      <Box>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>{stat.label}</Typography>
                        <Typography variant="body2" fontWeight={600}>{stat.value}</Typography>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              {/* Reforms */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 1.5 }}>Reformas Históricas</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {estadio.reformas.map((reforma, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, p: 1.5, bgcolor: alpha('#1e293b', 0.3), borderRadius: 2 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#60a5fa', mt: 1, flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{reforma}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Records */}
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha('#1565c0', 0.1)}, ${alpha('#7c3aed', 0.1)})`,
                  border: `1px solid ${alpha('#3b82f6', 0.2)}`,
                }}
              >
                <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>Récords del Estadio</Typography>
                {[
                  { label: 'Asistencia récord:', value: estadio.records.asistencia_record },
                  { label: 'Fecha:', value: estadio.records.fecha_record },
                  { label: 'Partidos disputados:', value: `${estadio.records.partidos_jugados}+` },
                ].map((r, i) => (
                  <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{r.label}</Typography>
                    <Typography variant="body2" fontWeight={500}>{r.value}</Typography>
                  </Box>
                ))}
              </Paper>
            </Paper>
          </Grid>

          {/* Coach */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 6,
                background: `linear-gradient(135deg, ${alpha('#6b1530', 0.2)}, ${alpha('#1e293b', 0.5)})`,
                border: `1px solid ${alpha('#ef4444', 0.2)}`,
                height: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{ width: 64, height: 64, borderRadius: 4, background: 'linear-gradient(135deg, #dc2626, #b91c1c)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 8px 20px ${alpha('#dc2626', 0.3)}` }}>
                  <WorkIcon sx={{ fontSize: 32, color: 'white' }} />
                </Box>
                <Box>
                  <Typography variant="h5" fontWeight={700}>{entrenador.nombre}</Typography>
                  <Typography variant="body2" sx={{ color: '#f87171' }}>Entrenador Principal</Typography>
                </Box>
              </Box>

              {/* Quick Info */}
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid size={4}>
                  <Paper elevation={0} sx={{ textAlign: 'center', p: 2, bgcolor: alpha('#1e293b', 0.5), borderRadius: 3 }}>
                    <Typography variant="h5" fontWeight={700}>{entrenador.edad}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>Años</Typography>
                  </Paper>
                </Grid>
                <Grid size={4}>
                  <Paper elevation={0} sx={{ textAlign: 'center', p: 2, bgcolor: alpha('#1e293b', 0.5), borderRadius: 3 }}>
                    <Typography variant="h5" fontWeight={700} sx={{ color: '#f87171' }}>{entrenador.titulos_ganados}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>Títulos</Typography>
                  </Paper>
                </Grid>
                <Grid size={4}>
                  <Paper elevation={0} sx={{ textAlign: 'center', p: 2, bgcolor: alpha('#1e293b', 0.5), borderRadius: 3 }}>
                    <FlagEmoji country={entrenador.nacionalidad} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>{entrenador.nacionalidad}</Typography>
                  </Paper>
                </Grid>
              </Grid>

              <Typography sx={{ color: alpha('#fff', 0.7), mb: 3, lineHeight: 1.8 }}>
                {entrenador.biografia}
              </Typography>

              {/* Preferred Formation */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                  <GpsFixedIcon sx={{ color: '#fbbf24' }} />
                  <Typography variant="h6" fontWeight={700}>Formación Preferida</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {entrenador.formacion_preferida.split(' / ').map((formacion, index) => (
                    <Chip
                      key={index}
                      label={formacion}
                      sx={{
                        bgcolor: alpha('#eab308', 0.1),
                        color: '#fbbf24',
                        fontFamily: 'monospace',
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Career */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                  <HistoryIcon sx={{ color: '#60a5fa' }} />
                  <Typography variant="h6" fontWeight={700}>Trayectoria</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {entrenador.carrera.map((etapa, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, p: 1.5, bgcolor: alpha('#1e293b', 0.3), borderRadius: 2 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#f87171', flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{etapa}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Since when */}
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha('#dc2626', 0.1)}, ${alpha('#ea580c', 0.1)})`,
                  border: `1px solid ${alpha('#ef4444', 0.2)}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Dirigiendo al Barcelona desde</Typography>
                  <Typography variant="h5" fontWeight={700}>{entrenador.desde}</Typography>
                </Box>
                <EmojiEventsIcon sx={{ fontSize: 40, color: '#f87171' }} />
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

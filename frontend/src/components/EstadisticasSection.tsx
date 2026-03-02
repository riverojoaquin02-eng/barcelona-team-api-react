import React from 'react';
import { EstadisticasTemporada } from '../data/barcaData';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Chip,
  alpha,
} from '@mui/material';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import ShieldIcon from '@mui/icons-material/Shield';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PublicIcon from '@mui/icons-material/Public';
import SportsIcon from '@mui/icons-material/Sports';

interface EstadisticasSectionProps {
  estadisticas: EstadisticasTemporada;
}

const StatRow = ({ label, value, color = 'white' }: { label: string; value: string | number; color?: string }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.75 }}>
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{label}</Typography>
    <Typography variant="body2" sx={{ color, fontWeight: 600 }}>{value}</Typography>
  </Box>
);

const MiniStat = ({ value, label, color }: { value: number; label: string; color: string }) => (
  <Paper
    elevation={0}
    sx={{
      textAlign: 'center',
      p: 1.5,
      bgcolor: alpha('#fff', 0.05),
      borderRadius: 3,
    }}
  >
    <Typography variant="h5" fontWeight={700} sx={{ color }}>{value}</Typography>
    <Typography variant="caption" sx={{ color: 'text.secondary' }}>{label}</Typography>
  </Paper>
);

export const EstadisticasSection: React.FC<EstadisticasSectionProps> = ({ estadisticas }) => {
  const { liga, champions, copa_rey } = estadisticas;
  const winRate = Math.round((liga.ganados / liga.partidos_jugados) * 100);
  const goalsPerGame = (liga.goles_favor / liga.partidos_jugados).toFixed(1);

  const highlightStats = [
    { icon: <TrendingUpIcon sx={{ fontSize: 28, color: '#4ade80' }} />, value: `${winRate}%`, label: '% Victorias', accent: '#4ade80' },
    { icon: <SportsIcon sx={{ fontSize: 28, color: '#f87171' }} />, value: goalsPerGame, label: 'Goles/Partido', accent: '#f87171' },
    { icon: <GpsFixedIcon sx={{ fontSize: 28, color: '#fbbf24' }} />, value: liga.goles_favor, label: 'Goles Totales', accent: '#fbbf24' },
    { icon: <ShieldIcon sx={{ fontSize: 28, color: '#a78bfa' }} />, value: `+${liga.diferencia_goles}`, label: 'Diferencia', accent: '#a78bfa' },
  ];

  return (
    <Box
      component="section"
      id="estadisticas"
      sx={{ py: { xs: 8, md: 10 }, bgcolor: '#0f172a' }}
    >
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, sm: 3, lg: 4 } }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label={`Temporada ${estadisticas.temporada}`}
            sx={{
              mb: 2,
              bgcolor: alpha('#1565c0', 0.15),
              color: '#60a5fa',
              fontWeight: 600,
            }}
          />
          <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2rem', lg: '2.75rem' } }}>
            Estadísticas{' '}
            <Box component="span" sx={{ background: 'linear-gradient(135deg, #60a5fa, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              2024-25
            </Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
            Rendimiento del equipo en todas las competiciones esta temporada
          </Typography>
        </Box>

        {/* Competition Cards */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {/* La Liga */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 6,
                background: `linear-gradient(135deg, ${alpha('#1e3a5f', 0.5)}, ${alpha('#1e293b', 0.5)})`,
                border: `1px solid ${alpha('#3b82f6', 0.2)}`,
                height: '100%',
                transition: 'border-color 0.3s',
                '&:hover': { borderColor: alpha('#3b82f6', 0.4) },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: 2.5, bgcolor: '#1565c0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <EmojiEventsIcon sx={{ color: 'white' }} />
                  </Box>
                  <Box>
                    <Typography variant="h5" fontWeight={700}>La Liga</Typography>
                    <Typography variant="caption" sx={{ color: '#60a5fa' }}>España</Typography>
                  </Box>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="h3" fontWeight={800}>{liga.posicion}º</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>Posición</Typography>
                </Box>
              </Box>

              <Grid container spacing={1.5} sx={{ mb: 3 }}>
                <Grid size={4}><MiniStat value={liga.ganados} label="Victorias" color="#4ade80" /></Grid>
                <Grid size={4}><MiniStat value={liga.empatados} label="Empates" color="#fbbf24" /></Grid>
                <Grid size={4}><MiniStat value={liga.perdidos} label="Derrotas" color="#f87171" /></Grid>
              </Grid>

              <Box>
                <StatRow label="Puntos" value={liga.puntos} />
                <StatRow label="Goles a favor" value={liga.goles_favor} color="#4ade80" />
                <StatRow label="Goles en contra" value={liga.goles_contra} color="#f87171" />
                <StatRow label="Diferencia" value={`+${liga.diferencia_goles}`} color="#60a5fa" />
              </Box>
            </Paper>
          </Grid>

          {/* Champions League */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 6,
                background: `linear-gradient(135deg, ${alpha('#3b1a5e', 0.5)}, ${alpha('#1e293b', 0.5)})`,
                border: `1px solid ${alpha('#8b5cf6', 0.2)}`,
                height: '100%',
                transition: 'border-color 0.3s',
                '&:hover': { borderColor: alpha('#8b5cf6', 0.4) },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: 2.5, bgcolor: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PublicIcon sx={{ color: 'white' }} />
                  </Box>
                  <Box>
                    <Typography variant="h5" fontWeight={700}>Champions</Typography>
                    <Typography variant="caption" sx={{ color: '#a78bfa' }}>Europa</Typography>
                  </Box>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="body1" fontWeight={700}>{champions.fase}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>Fase actual</Typography>
                </Box>
              </Box>

              <Grid container spacing={1.5} sx={{ mb: 3 }}>
                <Grid size={4}><MiniStat value={champions.ganados} label="Victorias" color="#4ade80" /></Grid>
                <Grid size={4}><MiniStat value={champions.empatados} label="Empates" color="#fbbf24" /></Grid>
                <Grid size={4}><MiniStat value={champions.perdidos} label="Derrotas" color="#f87171" /></Grid>
              </Grid>

              <Box>
                <StatRow label="Partidos" value={champions.partidos_jugados} />
                <StatRow label="Goles a favor" value={champions.goles_favor} color="#4ade80" />
                <StatRow label="Goles en contra" value={champions.goles_contra} color="#f87171" />
                <StatRow label="Diferencia" value={`+${champions.goles_favor - champions.goles_contra}`} color="#a78bfa" />
              </Box>
            </Paper>
          </Grid>

          {/* Copa del Rey */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 6,
                background: `linear-gradient(135deg, ${alpha('#5a3e0a', 0.5)}, ${alpha('#1e293b', 0.5)})`,
                border: `1px solid ${alpha('#eab308', 0.2)}`,
                height: '100%',
                transition: 'border-color 0.3s',
                '&:hover': { borderColor: alpha('#eab308', 0.4) },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: 2.5, bgcolor: '#ca8a04', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <GpsFixedIcon sx={{ color: 'white' }} />
                  </Box>
                  <Box>
                    <Typography variant="h5" fontWeight={700}>Copa del Rey</Typography>
                    <Typography variant="caption" sx={{ color: '#fbbf24' }}>España</Typography>
                  </Box>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="body1" fontWeight={700}>{copa_rey.fase}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>Fase actual</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography sx={{ fontSize: '3rem', mb: 1 }}>🏆</Typography>
                  <Typography variant="h5" fontWeight={600}>{copa_rey.resultado}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>Competición en disputa</Typography>
                </Box>
              </Box>

              <Paper
                elevation={0}
                sx={{ p: 2, bgcolor: alpha('#eab308', 0.1), borderRadius: 3, textAlign: 'center' }}
              >
                <Typography variant="body2" sx={{ color: '#fbbf24' }}>
                  31 títulos históricos en esta competición
                </Typography>
              </Paper>
            </Paper>
          </Grid>
        </Grid>

        {/* Highlight Stats */}
        <Grid container spacing={3}>
          {highlightStats.map((stat, i) => (
            <Grid key={i} size={{ xs: 6, md: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  bgcolor: alpha('#1e293b', 0.5),
                  border: `1px solid ${alpha('#334155', 0.5)}`,
                  transition: 'all 0.3s',
                  '&:hover': {
                    borderColor: alpha(stat.accent, 0.5),
                    '& .stat-icon-box': { transform: 'scale(1.1)' },
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    className="stat-icon-box"
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 3,
                      bgcolor: alpha(stat.accent, 0.15),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.3s',
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Box>
                    <Typography variant="h4" fontWeight={700}>{stat.value}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{stat.label}</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

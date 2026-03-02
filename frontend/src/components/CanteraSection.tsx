import React from 'react';
import { ClubInfo } from '../data/barcaData';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Chip,
  alpha,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import StarIcon from '@mui/icons-material/Star';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface CanteraSectionProps {
  cantera: ClubInfo['cantera'];
  filiales: ClubInfo['filiales'];
}

export const CanteraSection: React.FC<CanteraSectionProps> = ({ cantera, filiales }) => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(to bottom, #0a0f1a, #0f172a)',
      }}
    >
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, sm: 3, lg: 4 } }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip label="La Masia" sx={{ mb: 2, bgcolor: alpha('#d97706', 0.15), color: '#fbbf24', fontWeight: 600 }} />
          <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2rem', lg: '2.75rem' } }}>
            {cantera.nombre}
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 720, mx: 'auto' }}>
            {cantera.descripcion}
          </Typography>
        </Box>

        {/* Philosophy & Method */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 6,
                background: `linear-gradient(135deg, ${alpha('#92400e', 0.2)}, ${alpha('#1e293b', 0.5)})`,
                border: `1px solid ${alpha('#d97706', 0.2)}`,
                height: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{ width: 56, height: 56, borderRadius: 4, background: 'linear-gradient(135deg, #d97706, #f59e0b)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FavoriteIcon sx={{ fontSize: 28, color: 'white' }} />
                </Box>
                <Typography variant="h5" fontWeight={700}>Filosofía</Typography>
              </Box>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: alpha('#d97706', 0.1),
                  borderRadius: 4,
                  border: `1px solid ${alpha('#d97706', 0.2)}`,
                  mb: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontStyle: 'italic', color: '#fbbf24', textAlign: 'center' }}
                >
                  "{cantera.filosofia}"
                </Typography>
              </Paper>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                La Masia no solo forma futbolistas, forma personas íntegras que representan
                los valores del club tanto dentro como fuera del campo.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
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
                <Box sx={{ width: 56, height: 56, borderRadius: 4, background: 'linear-gradient(135deg, #2563eb, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <TipsAndUpdatesIcon sx={{ fontSize: 28, color: 'white' }} />
                </Box>
                <Typography variant="h5" fontWeight={700}>Método</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  'Juego de posición y dominio del balón',
                  'Desarrollo técnico individual desde edades tempranas',
                  'Formación académica complementaria',
                  'Valores de respeto, humildad y trabajo en equipo',
                  'Competitividad y espíritu de superación',
                ].map((item, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#60a5fa', mt: 1, flexShrink: 0 }} />
                    <Typography sx={{ color: alpha('#fff', 0.7) }}>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Famous Players */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <Box sx={{ width: 48, height: 48, borderRadius: 3, background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <StarIcon sx={{ color: 'white' }} />
            </Box>
            <Typography variant="h5" fontWeight={700}>Jugadores Formados</Typography>
          </Box>

          <Grid container spacing={2}>
            {cantera.jugadores_famosos.map((jugador, index) => (
              <Grid key={index} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    textAlign: 'center',
                    borderRadius: 3,
                    bgcolor: alpha('#1e293b', 0.3),
                    border: `1px solid ${alpha('#334155', 0.5)}`,
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: alpha('#8b5cf6', 0.5),
                      bgcolor: alpha('#1e293b', 0.5),
                      '& .graduate-icon': { transform: 'scale(1.1)' },
                    },
                  }}
                >
                  <Box
                    className="graduate-icon"
                    sx={{
                      width: 40,
                      height: 40,
                      mx: 'auto',
                      mb: 1,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${alpha('#8b5cf6', 0.15)}, ${alpha('#7c3aed', 0.15)})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.3s',
                    }}
                  >
                    <SchoolIcon sx={{ color: '#a78bfa', fontSize: 20 }} />
                  </Box>
                  <Typography variant="body2" fontWeight={500}>{jugador}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Filiales */}
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <Box sx={{ width: 48, height: 48, borderRadius: 3, background: 'linear-gradient(135deg, #16a34a, #22c55e)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <GroupsIcon sx={{ color: 'white' }} />
            </Box>
            <Typography variant="h5" fontWeight={700}>Equipos Filiales</Typography>
          </Box>

          <Grid container spacing={3}>
            {filiales.map((filial, index) => (
              <Grid key={index} size={{ xs: 12, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    bgcolor: alpha('#1e293b', 0.5),
                    border: `1px solid ${alpha('#334155', 0.5)}`,
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: alpha('#22c55e', 0.5),
                      '& .filial-name': { color: '#4ade80' },
                    },
                  }}
                >
                  <Typography
                    className="filial-name"
                    variant="h5"
                    fontWeight={700}
                    sx={{ mb: 1, transition: 'color 0.3s' }}
                  >
                    {filial.nombre}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>Categoría:</Typography>
                      <Typography variant="body2">{filial.categoria}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>Estadio:</Typography>
                      <Typography variant="body2">{filial.estadio}</Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

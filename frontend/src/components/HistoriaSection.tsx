import React, { useState } from 'react';
import { Historia as HistoriaType } from '../data/barcaData';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Chip,
  alpha,
} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import StarIcon from '@mui/icons-material/Star';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface HistoriaSectionProps {
  historia: HistoriaType;
}

export const HistoriaSection: React.FC<HistoriaSectionProps> = ({ historia }) => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <Box
      component="section"
      id="historia"
      sx={{ py: { xs: 8, md: 10 }, bgcolor: '#0a0f1a', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background line */}
      <Box sx={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', background: `linear-gradient(to right, transparent, ${alpha('#3b82f6', 0.2)}, transparent)` }} />

      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, sm: 3, lg: 4 }, position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip label="Desde 1899" sx={{ mb: 2, bgcolor: alpha('#1565c0', 0.15), color: '#60a5fa', fontWeight: 600 }} />
          <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2rem', lg: '2.75rem' } }}>
            Nuestra{' '}
            <Box component="span" sx={{ background: 'linear-gradient(135deg, #60a5fa, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Historia
            </Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
            {historia.leyendas.length} años de pasión, triunfos y un estilo de juego único que ha revolucionado el fútbol mundial.
          </Typography>
        </Box>

        {/* Main Info */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {/* Foundation & Values */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 6,
                  bgcolor: alpha('#0f172a', 0.5),
                  border: `1px solid ${alpha('#334155', 0.5)}`,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box sx={{ width: 56, height: 56, borderRadius: 4, background: 'linear-gradient(135deg, #1565c0, #1976d2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MenuBookIcon sx={{ fontSize: 28, color: 'white' }} />
                  </Box>
                  <Box>
                    <Typography variant="h5" fontWeight={700}>Fundación</Typography>
                    <Typography sx={{ color: '#60a5fa' }}>{historia.fundacion}</Typography>
                  </Box>
                </Box>

                <Typography sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
                  El {historia.fundacion}, un grupo de jóvenes aficionados al fútbol liderados por
                  <Box component="span" sx={{ color: 'white', fontWeight: 600 }}> {historia.fundadores[0]}</Box> decidieron formar un club
                  que representara a Barcelona y Cataluña. Nació así el <Box component="span" sx={{ color: '#60a5fa', fontWeight: 600 }}>Foot-Ball Club Barcelona</Box>.
                </Typography>

                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    bgcolor: alpha('#3b82f6', 0.1),
                    borderRadius: 3,
                    borderLeft: `4px solid #3b82f6`,
                  }}
                >
                  <Typography variant="h6" sx={{ fontStyle: 'italic', color: 'white' }}>
                    "{historia.lema}"
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>- Lema del club</Typography>
                </Paper>
              </Paper>

              {/* Colors */}
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 6,
                  bgcolor: alpha('#0f172a', 0.5),
                  border: `1px solid ${alpha('#334155', 0.5)}`,
                }}
              >
                <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>Colores del Club</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ height: 96, borderRadius: 3, background: 'linear-gradient(135deg, #1565c0, #1976d2)', mb: 1 }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                      {historia.colores[0]}
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ height: 96, borderRadius: 3, background: 'linear-gradient(135deg, #b71c1c, #c62828)', mb: 1 }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                      {historia.colores[1]}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>

          {/* Records */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 6,
                bgcolor: alpha('#0f172a', 0.5),
                border: `1px solid ${alpha('#334155', 0.5)}`,
                height: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{ width: 56, height: 56, borderRadius: 4, background: 'linear-gradient(135deg, #ca8a04, #eab308)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <StarIcon sx={{ fontSize: 28, color: 'white' }} />
                </Box>
                <Box>
                  <Typography variant="h5" fontWeight={700}>Récords del Club</Typography>
                  <Typography sx={{ color: '#fbbf24' }}>Marcos históricos</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  { label: 'Máximo goleador', value: historia.records_club.maximo_goleador },
                  { label: 'Más partidos disputados', value: historia.records_club.mas_partidos },
                  { label: 'Más títulos ganados', value: historia.records_club.mas_titulos },
                  { label: 'Máxima goleada', value: historia.records_club.maxima_goleada },
                ].map((record, i) => (
                  <Paper
                    key={i}
                    elevation={0}
                    sx={{ p: 2, bgcolor: alpha('#1e293b', 0.5), borderRadius: 3 }}
                  >
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>{record.label}</Typography>
                    <Typography fontWeight={600}>{record.value}</Typography>
                  </Paper>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Legends */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <Box sx={{ width: 48, height: 48, borderRadius: 3, background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <GroupsIcon sx={{ color: 'white' }} />
            </Box>
            <Typography variant="h5" fontWeight={700}>Leyendas del Club</Typography>
          </Box>

          <Grid container spacing={2}>
            {historia.leyendas.map((leyenda, index) => (
              <Grid key={index} size={{ xs: 6, md: 3, lg: 2 }}>
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
                      '& .legend-icon': { transform: 'scale(1.1)' },
                    },
                  }}
                >
                  <Box
                    className="legend-icon"
                    sx={{
                      width: 48,
                      height: 48,
                      mx: 'auto',
                      mb: 1.5,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${alpha('#8b5cf6', 0.15)}, ${alpha('#7c3aed', 0.15)})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.3s',
                    }}
                  >
                    <EmojiEventsIcon sx={{ color: '#a78bfa', fontSize: 24 }} />
                  </Box>
                  <Typography variant="body2" fontWeight={500}>{leyenda}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Timeline */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h5" fontWeight={700} sx={{ mb: 4, textAlign: 'center' }}>
            Momentos Históricos
          </Typography>

          <Box sx={{ position: 'relative' }}>
            {/* Central line */}
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                height: '100%',
                width: 4,
                borderRadius: 2,
                background: 'linear-gradient(to bottom, #3b82f6, #ef4444, #eab308)',
              }}
            />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {historia.momentos_historicos.map((momento, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                    gap: { xs: 2, md: 4 },
                  }}
                >
                  {/* Content */}
                  <Box sx={{ flex: 1, textAlign: { xs: 'left', md: index % 2 === 0 ? 'right' : 'left' } }}>
                    <Paper
                      elevation={0}
                      onClick={() => setSelectedYear(selectedYear === momento.anio ? null : momento.anio)}
                      sx={{
                        p: 3,
                        borderRadius: 4,
                        bgcolor: alpha('#1e293b', 0.5),
                        border: `1px solid ${selectedYear === momento.anio ? '#3b82f6' : alpha('#334155', 0.5)}`,
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        ...(selectedYear === momento.anio && {
                          boxShadow: `0 0 15px ${alpha('#3b82f6', 0.2)}`,
                        }),
                        '&:hover': {
                          borderColor: alpha('#3b82f6', 0.5),
                          '& .momento-title': { color: '#60a5fa' },
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          mb: 1,
                          justifyContent: { xs: 'flex-start', md: index % 2 === 0 ? 'flex-end' : 'flex-start' },
                        }}
                      >
                        <Typography
                          variant="h4"
                          fontWeight={800}
                          sx={{
                            background: 'linear-gradient(135deg, #60a5fa, #ef4444)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {momento.anio}
                        </Typography>
                        <ChevronRightIcon
                          sx={{
                            color: 'text.secondary',
                            transform: selectedYear === momento.anio ? 'rotate(90deg)' : 'none',
                            transition: 'transform 0.3s',
                          }}
                        />
                      </Box>
                      <Typography
                        className="momento-title"
                        variant="h6"
                        fontWeight={700}
                        sx={{ mb: 1, transition: 'color 0.3s' }}
                      >
                        {momento.titulo}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          ...(selectedYear !== momento.anio && {
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }),
                        }}
                      >
                        {momento.descripcion}
                      </Typography>
                    </Paper>
                  </Box>

                  {/* Dot */}
                  <Box
                    sx={{
                      display: { xs: 'none', md: 'flex' },
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #3b82f6, #ef4444)',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 15px ${alpha('#3b82f6', 0.3)}`,
                      zIndex: 1,
                      flexShrink: 0,
                    }}
                  >
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'white' }} />
                  </Box>

                  {/* Spacer */}
                  <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Notable Presidents */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>Presidentes Notables</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.5 }}>
            {historia.presidentes_notables.map((presidente, index) => (
              <Chip
                key={index}
                label={presidente}
                sx={{
                  px: 2,
                  py: 2.5,
                  fontSize: '0.875rem',
                  bgcolor: alpha('#1e293b', 0.5),
                  border: `1px solid ${alpha('#334155', 0.5)}`,
                  color: alpha('#fff', 0.7),
                  transition: 'all 0.3s',
                  '&:hover': {
                    borderColor: alpha('#3b82f6', 0.5),
                    color: 'white',
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

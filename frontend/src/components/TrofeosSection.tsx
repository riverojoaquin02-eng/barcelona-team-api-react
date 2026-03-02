import React, { useState } from 'react';
import { Trofeo } from '../data/barcaData';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Chip,
  Collapse,
  alpha,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface TrofeosSectionProps {
  trofeos: Trofeo[];
}

export const TrofeosSection: React.FC<TrofeosSectionProps> = ({ trofeos }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const trofeosOrdenados = [...trofeos].sort((a, b) => b.cantidad - a.cantidad);
  const totalTrofeos = trofeos.reduce((acc, t) => acc + t.cantidad, 0);

  return (
    <Box
      component="section"
      id="trofeos"
      sx={{ py: { xs: 8, md: 10 }, bgcolor: '#0f172a', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background decorations */}
      <Box sx={{ position: 'absolute', top: 0, left: '25%', width: 384, height: 384, bgcolor: alpha('#eab308', 0.04), borderRadius: '50%', filter: 'blur(80px)' }} />
      <Box sx={{ position: 'absolute', bottom: 0, right: '25%', width: 384, height: 384, bgcolor: alpha('#ef4444', 0.04), borderRadius: '50%', filter: 'blur(80px)' }} />

      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, sm: 3, lg: 4 }, position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip label="Palmarés Histórico" sx={{ mb: 2, bgcolor: alpha('#ca8a04', 0.15), color: '#fbbf24', fontWeight: 600 }} />
          <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2rem', lg: '2.75rem' } }}>
            Sala de{' '}
            <Box component="span" sx={{ background: 'linear-gradient(135deg, #fbbf24, #ca8a04)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Trofeos
            </Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', mb: 4 }}>
            El Barcelona es uno de los clubes más laureados del mundo. Un legado de éxitos que se construye día a día.
          </Typography>

          {/* Total trophies badge */}
          <Paper
            elevation={0}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 2,
              px: 4,
              py: 2,
              borderRadius: 4,
              background: `linear-gradient(135deg, ${alpha('#ca8a04', 0.15)}, ${alpha('#eab308', 0.15)})`,
              border: `1px solid ${alpha('#eab308', 0.3)}`,
            }}
          >
            <EmojiEventsIcon sx={{ fontSize: 40, color: '#fbbf24' }} />
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="h3" fontWeight={800}>{totalTrofeos}</Typography>
              <Typography variant="body2" sx={{ color: '#fbbf24' }}>Títulos Oficiales</Typography>
            </Box>
          </Paper>
        </Box>

        {/* Trophy Grid */}
        <Grid container spacing={3}>
          {trofeosOrdenados.map((trofeo) => (
            <Grid key={trofeo.id} size={{ xs: 12, md: 6, lg: 4 }}>
              <Paper
                elevation={0}
                onClick={() => setExpandedId(expandedId === trofeo.id ? null : trofeo.id)}
                sx={{
                  p: 3,
                  borderRadius: 6,
                  bgcolor: alpha('#1e293b', 0.5),
                  border: `1px solid ${expandedId === trofeo.id ? alpha('#eab308', 0.5) : alpha('#334155', 0.5)}`,
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    borderColor: alpha('#eab308', 0.3),
                    '& .trophy-icon': { transform: 'scale(1.1)' },
                    '& .trophy-name': { color: '#fbbf24' },
                  },
                  ...(expandedId === trofeo.id && {
                    boxShadow: `0 10px 30px ${alpha('#eab308', 0.1)}`,
                  }),
                }}
              >
                {/* Icon & Count */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box
                    className="trophy-icon"
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 4,
                      background: 'linear-gradient(135deg, #eab308, #ca8a04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 8px 20px ${alpha('#eab308', 0.2)}`,
                      transition: 'transform 0.3s',
                      fontSize: '1.75rem',
                    }}
                  >
                    {trofeo.imagen}
                  </Box>
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="h2" fontWeight={800}>{trofeo.cantidad}</Typography>
                    <Typography variant="body2" sx={{ color: '#fbbf24' }}>títulos</Typography>
                  </Box>
                </Box>

                {/* Name & Description */}
                <Typography
                  className="trophy-name"
                  variant="h5"
                  fontWeight={700}
                  sx={{ mb: 1, transition: 'color 0.3s' }}
                >
                  {trofeo.nombre}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    mb: 2,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {trofeo.descripcion}
                </Typography>

                {/* Last won */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <CalendarMonthIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Último:{' '}
                    <Box component="span" sx={{ color: '#fbbf24', fontWeight: 500 }}>
                      {trofeo.ultimo_ganado}
                    </Box>
                  </Typography>
                </Box>

                {/* Expandable years */}
                <Collapse in={expandedId === trofeo.id}>
                  <Box sx={{ pt: 2, borderTop: `1px solid ${alpha('#334155', 0.5)}` }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>Años ganados:</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, maxHeight: 128, overflow: 'auto' }}>
                      {trofeo.anios_ganados.map((anio) => (
                        <Chip
                          key={anio}
                          label={anio}
                          size="small"
                          sx={{
                            bgcolor: alpha('#eab308', 0.1),
                            color: '#fbbf24',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Collapse>

                {/* Expand button */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    mt: 2,
                    color: 'text.secondary',
                    '&:hover': { color: 'white' },
                    transition: 'color 0.3s',
                  }}
                >
                  <Typography variant="body2">
                    {expandedId === trofeo.id ? 'Ver menos' : 'Ver todos los años'}
                  </Typography>
                  {expandedId === trofeo.id ? <ExpandLessIcon sx={{ fontSize: 18 }} /> : <ExpandMoreIcon sx={{ fontSize: 18 }} />}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Highlighted achievements */}
        <Grid container spacing={3} sx={{ mt: 8 }}>
          {[
            { count: 5, label: 'Champions League', desc: 'Última conquista en 2015 con la MSN. Uno de los clubes más exitosos de la competición.', color: '#3b82f6', bgColor: alpha('#1e3a6e', 0.3) },
            { count: 27, label: 'Ligas Españolas', desc: 'El club ganó la primera edición de la Liga en 1929 y es uno de los más laureados.', color: '#ef4444', bgColor: alpha('#6b1520', 0.3) },
            { count: 31, label: 'Copas del Rey', desc: 'Récord absoluto de la competición. Máximo ganador histórico de la Copa de Su Majestad.', color: '#eab308', bgColor: alpha('#5a3e0a', 0.3) },
          ].map((item, i) => (
            <Grid key={i} size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  background: `linear-gradient(135deg, ${item.bgColor}, ${alpha('#1e293b', 0.3)})`,
                  border: `1px solid ${alpha(item.color, 0.2)}`,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: 3, bgcolor: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <EmojiEventsIcon sx={{ color: 'white' }} />
                  </Box>
                  <Box>
                    <Typography variant="h4" fontWeight={800}>{item.count}</Typography>
                    <Typography variant="body2" sx={{ color: item.color }}>{item.label}</Typography>
                  </Box>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

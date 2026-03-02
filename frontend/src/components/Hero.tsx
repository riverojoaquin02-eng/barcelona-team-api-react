import React from 'react';
import { ClubInfo } from '../data/barcaData';
import { Box, Typography, Button, Grid, Paper, Chip, alpha } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';

interface HeroProps {
  clubInfo: ClubInfo;
}

export const Hero: React.FC<HeroProps> = ({ clubInfo }) => {
  const totalTrofeos = clubInfo.trofeos.reduce((acc, t) => acc + t.cantidad, 0);

  const stats = [
    { icon: <EmojiEventsIcon sx={{ fontSize: 32, color: '#fbbf24' }} />, value: totalTrofeos, label: 'Títulos Oficiales' },
    { icon: <GroupsIcon sx={{ fontSize: 32, color: '#60a5fa' }} />, value: clubInfo.socios, label: 'Socios' },
    { icon: <CalendarMonthIcon sx={{ fontSize: 32, color: '#f87171' }} />, value: '125', label: 'Años de Historia' },
    { icon: <PlaceIcon sx={{ fontSize: 32, color: '#4ade80' }} />, value: '99k', label: 'Capacidad Camp Nou' },
  ];

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #1e3a6e 0%, #1a3366 30%, #6b1530 100%)',
        }}
      >
        {/* Decorative circles */}
        <Box
          sx={{
            position: 'absolute', top: -100, right: -100,
            width: 400, height: 400,
            borderRadius: '50%',
            bgcolor: alpha('#c62828', 0.15),
            filter: 'blur(80px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute', bottom: -100, left: -100,
            width: 400, height: 400,
            borderRadius: '50%',
            bgcolor: alpha('#1565c0', 0.15),
            filter: 'blur(80px)',
          }}
        />
      </Box>

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1280,
          mx: 'auto',
          px: { xs: 2, sm: 3, lg: 4 },
          py: { xs: 12, lg: 16 },
        }}
      >
        <Grid container spacing={6} alignItems="center">
          {/* Left - Text */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
              <Chip
                label="Fundado en 1899"
                icon={<Box component="span" sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#fbbf24', animation: 'pulse 2s infinite', '@keyframes pulse': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.5 } } }} />}
                sx={{
                  mb: 3,
                  bgcolor: alpha('#fff', 0.1),
                  color: alpha('#fff', 0.9),
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${alpha('#fff', 0.2)}`,
                  fontWeight: 500,
                  '& .MuiChip-icon': { ml: 1 },
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', lg: '4.5rem' },
                  fontWeight: 800,
                  color: 'white',
                  mb: 3,
                  lineHeight: 1.1,
                }}
              >
                Fútbol Club{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #fde047, #f59e0b)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Barcelona
                </Box>
              </Typography>

              <Typography
                variant="h4"
                sx={{ color: alpha('#fff', 0.8), mb: 2, fontWeight: 300, fontStyle: 'italic' }}
              >
                "Més que un club"
              </Typography>

              <Typography
                sx={{ color: alpha('#fff', 0.65), mb: 4, fontSize: '1.1rem', maxWidth: 540, mx: { xs: 'auto', lg: 0 } }}
              >
                {clubInfo.cantera.descripcion.substring(0, 150)}...
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                <Button
                  variant="contained"
                  href="#jugadores"
                  size="large"
                  sx={{
                    background: 'linear-gradient(135deg, #b91c1c, #dc2626)',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 3,
                    boxShadow: '0 8px 25px rgba(185, 28, 28, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #dc2626, #ef4444)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 35px rgba(185, 28, 28, 0.4)',
                    },
                    transition: 'all 0.3s',
                  }}
                >
                  Ver Plantilla
                </Button>
                <Button
                  variant="outlined"
                  href="#trofeos"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 3,
                    color: 'white',
                    borderColor: alpha('#fff', 0.3),
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      borderColor: alpha('#fff', 0.5),
                      bgcolor: alpha('#fff', 0.1),
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s',
                  }}
                >
                  Ver Trofeos
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right - Shield & Stats */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ position: 'relative' }}>
              {/* Glow behind shield */}
              <Box
                sx={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    width: { xs: 280, lg: 380 },
                    height: { xs: 280, lg: 380 },
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(251, 191, 36, 0.15), transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                />
              </Box>

              {/* Shield */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6, position: 'relative' }}>
                <Box
                  sx={{
                    width: { xs: 180, lg: 240 },
                    height: { xs: 180, lg: 240 },
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1565c0, #b71c1c, #f9a825)',
                    p: '4px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #1a3a6e, #6b1530)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography sx={{ fontSize: { xs: '3.5rem', lg: '5rem' }, fontWeight: 800, color: 'white' }}>
                      FCB
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                      {[1, 2, 3].map((i) => (
                        <Typography key={i} sx={{ color: '#fbbf24', fontSize: '1.5rem' }}>★</Typography>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Stats Grid */}
              <Grid container spacing={2}>
                {stats.map((stat, i) => (
                  <Grid key={i} size={{ xs: 6 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 4,
                        bgcolor: alpha('#fff', 0.08),
                        backdropFilter: 'blur(12px)',
                        border: `1px solid ${alpha('#fff', 0.1)}`,
                        transition: 'all 0.3s',
                        '&:hover': { bgcolor: alpha('#fff', 0.12) },
                      }}
                    >
                      {stat.icon}
                      <Typography variant="h4" fontWeight={700} color="white" sx={{ mt: 1 }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" sx={{ color: alpha('#fff', 0.6) }}>
                        {stat.label}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Wave decoration */}
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="rgba(10, 15, 26, 0.5)"
          />
        </svg>
      </Box>
    </Box>
  );
};

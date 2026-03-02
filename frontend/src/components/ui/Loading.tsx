import React from 'react';
import { Box, CircularProgress, Typography, Skeleton, Stack } from '@mui/material';

export const Loading: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 400,
        width: '100%',
      }}
    >
      <Box sx={{ position: 'relative', width: 96, height: 96 }}>
        <CircularProgress
          size={96}
          thickness={3}
          sx={{ color: 'primary.main', position: 'absolute', top: 0, left: 0 }}
        />
        <CircularProgress
          size={72}
          thickness={3}
          sx={{
            color: 'secondary.main',
            position: 'absolute',
            top: 12,
            left: 12,
            animationDirection: 'reverse',
          }}
        />
        <CircularProgress
          size={48}
          thickness={3}
          sx={{ color: 'warning.main', position: 'absolute', top: 24, left: 24 }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" fontWeight={700} color="white">
            FCB
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          mt: 4,
          fontSize: '1.1rem',
          color: 'rgba(255,255,255,0.7)',
          fontWeight: 500,
          animation: 'pulse 2s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.5 },
          },
        }}
      >
        Cargando datos del club...
      </Typography>
    </Box>
  );
};

export const SkeletonCard: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 3, p: 3 }}>
      <Skeleton variant="rectangular" height={192} sx={{ borderRadius: 2, mb: 2 }} />
      <Skeleton variant="text" width="75%" sx={{ mb: 1.5 }} />
      <Skeleton variant="text" width="50%" />
    </Box>
  );
};

export const SkeletonStats: React.FC = () => {
  return (
    <Stack direction="row" spacing={2}>
      {[1, 2, 3, 4].map((i) => (
        <Box key={i} sx={{ flex: 1, bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 2, p: 3 }}>
          <Skeleton variant="text" width={64} height={32} sx={{ mb: 1 }} />
          <Skeleton variant="text" width={96} />
        </Box>
      ))}
    </Stack>
  );
};

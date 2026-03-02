import React from 'react';
import { ClubInfo } from '../data/barcaData';
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Link,
  Divider,
  Paper,
  alpha,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';

interface FooterProps {
  clubInfo: ClubInfo;
}

export const Footer: React.FC<FooterProps> = ({ clubInfo }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <InstagramIcon />, color: '#E4405F' },
    { icon: <XIcon />, color: '#1DA1F2' },
    { icon: <FacebookIcon />, color: '#1877F2' },
    { icon: <YouTubeIcon />, color: '#FF0000' },
  ];

  const quickLinks = [
    { label: 'Plantilla', href: '#jugadores' },
    { label: 'Estadísticas', href: '#estadisticas' },
    { label: 'Palmarés', href: '#trofeos' },
    { label: 'Historia', href: '#historia' },
    { label: 'Noticias', href: '#' },
    { label: 'Entradas', href: '#' },
  ];

  return (
    <Box component="footer" sx={{ bgcolor: '#0a0f1a', borderTop: `1px solid ${alpha('#334155', 0.5)}` }}>
      {/* Main Footer */}
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, sm: 3, lg: 4 }, py: 8 }}>
        <Grid container spacing={6}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <Box sx={{ width: 48, height: 48, borderRadius: 3, background: 'linear-gradient(135deg, #1565c0, #c62828)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body2" fontWeight={700} color="white">FCB</Typography>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={700}>FC Barcelona</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Més que un club</Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}>
              {clubInfo.cantera.descripcion.substring(0, 120)}...
            </Typography>

            {/* Social */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social, i) => (
                <IconButton
                  key={i}
                  size="small"
                  sx={{
                    bgcolor: alpha('#1e293b', 0.8),
                    color: 'text.secondary',
                    borderRadius: 3,
                    width: 40,
                    height: 40,
                    transition: 'all 0.3s',
                    '&:hover': {
                      bgcolor: social.color,
                      color: 'white',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>Enlaces Rápidos</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {quickLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  underline="none"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.875rem',
                    transition: 'color 0.3s',
                    '&:hover': { color: '#60a5fa' },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>Información</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { icon: <PlaceIcon sx={{ fontSize: 20, color: 'text.secondary', flexShrink: 0, mt: 0.25 }} />, text: clubInfo.estadio.direccion },
                { icon: <PhoneIcon sx={{ fontSize: 20, color: 'text.secondary', flexShrink: 0 }} />, text: '+34 902 189 900' },
                { icon: <EmailIcon sx={{ fontSize: 20, color: 'text.secondary', flexShrink: 0 }} />, text: 'oab@fcbarcelona.cat' },
                {
                  icon: <LanguageIcon sx={{ fontSize: 20, color: 'text.secondary', flexShrink: 0 }} />,
                  text: (
                    <Link href={clubInfo.web_oficial} target="_blank" rel="noopener noreferrer" underline="none" sx={{ color: 'text.secondary', '&:hover': { color: '#60a5fa' }, fontSize: '0.875rem' }}>
                      www.fcbarcelona.es
                    </Link>
                  ),
                },
              ].map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  {item.icon}
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.text}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Stats */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>El Club en Números</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { value: clubInfo.socios, label: 'Socios' },
                { value: clubInfo.trofeos.reduce((a, b) => a + b.cantidad, 0), label: 'Títulos' },
                { value: clubInfo.estadio.capacidad, label: 'Capacidad' },
              ].map((stat, i) => (
                <Paper
                  key={i}
                  elevation={0}
                  sx={{ p: 2, bgcolor: alpha('#1e293b', 0.5), borderRadius: 3 }}
                >
                  <Typography variant="h5" fontWeight={700}>{stat.value}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{stat.label}</Typography>
                </Paper>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Sponsors */}
        <Box sx={{ mt: 8, pt: 4, borderTop: `1px solid ${alpha('#334155', 0.5)}` }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
            {[
              { label: 'Patrocinador Principal', name: 'Spotify', bold: true },
              { label: 'Equipación', name: 'Nike', bold: true },
              ...clubInfo.patrocinadores.otros.map(p => ({ label: 'Patrocinador', name: p, bold: false })),
            ].map((sponsor, i) => (
              <Box key={i} sx={{ textAlign: 'center' }}>
                <Typography variant="caption" sx={{ color: alpha('#fff', 0.3), display: 'block', mb: 0.5 }}>
                  {sponsor.label}
                </Typography>
                <Paper elevation={0} sx={{ px: 3, py: 1.5, bgcolor: alpha('#1e293b', 0.8), borderRadius: 3 }}>
                  <Typography sx={{ fontWeight: sponsor.bold ? 700 : 500, color: sponsor.bold ? 'white' : alpha('#fff', 0.7) }}>
                    {sponsor.name}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Bottom Bar */}
      <Divider sx={{ borderColor: alpha('#334155', 0.5) }} />
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, sm: 3, lg: 4 }, py: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
          <Typography variant="body2" sx={{ color: alpha('#fff', 0.3), textAlign: { xs: 'center', md: 'left' } }}>
            © {currentYear} Fútbol Club Barcelona. Todos los derechos reservados.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {['Política de Privacidad', 'Términos de Uso', 'Cookies'].map((text, i) => (
              <Link
                key={i}
                href="#"
                underline="none"
                sx={{
                  color: alpha('#fff', 0.3),
                  fontSize: '0.875rem',
                  transition: 'color 0.3s',
                  '&:hover': { color: 'white' },
                }}
              >
                {text}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

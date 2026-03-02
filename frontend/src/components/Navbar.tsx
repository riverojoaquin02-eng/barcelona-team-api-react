import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
  alpha,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Jugadores', href: '#jugadores' },
  { label: 'Estadísticas', href: '#estadisticas' },
  { label: 'Trofeos', href: '#trofeos' },
  { label: 'Historia', href: '#historia' },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          bgcolor: trigger ? alpha('#0f172a', 0.95) : 'transparent',
          backdropFilter: trigger ? 'blur(12px)' : 'none',
          transition: 'all 0.3s ease',
          py: trigger ? 0.5 : 1.5,
        }}
      >
        <Toolbar sx={{ maxWidth: 1280, width: '100%', mx: 'auto', px: { xs: 2, sm: 3, lg: 4 } }}>
          {/* Logo */}
          <Box
            component="a"
            href="#inicio"
            onClick={(e: React.MouseEvent) => { e.preventDefault(); scrollToSection('#inicio'); }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover .logo-box': { transform: 'scale(1.1)' },
            }}
          >
            <Box
              className="logo-box"
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                background: 'linear-gradient(135deg, #1565c0, #c62828)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s',
              }}
            >
              <Typography variant="body2" fontWeight={700} color="white">
                FCB
              </Typography>
            </Box>
            <Typography variant="h6" fontWeight={700} color="white">
              Barcelona
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                sx={{
                  color: alpha('#fff', 0.8),
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: alpha('#fff', 0.08),
                    color: '#fff',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* CTA Button */}
          <Button
            variant="contained"
            onClick={() => scrollToSection('#jugadores')}
            sx={{
              display: { xs: 'none', md: 'flex' },
              ml: 2,
              background: 'linear-gradient(135deg, #1565c0, #1976d2)',
              fontWeight: 600,
              borderRadius: 2.5,
              px: 3,
              '&:hover': {
                background: 'linear-gradient(135deg, #1976d2, #1e88e5)',
                boxShadow: '0 8px 25px rgba(21, 101, 192, 0.3)',
              },
            }}
          >
            Ver Plantilla
          </Button>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={() => setMobileOpen(true)}
            sx={{ display: { md: 'none' }, color: 'white' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: '#0f172a',
            borderLeft: '1px solid',
            borderColor: alpha('#fff', 0.1),
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => scrollToSection(item.href)}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  color: alpha('#fff', 0.7),
                  '&:hover': { bgcolor: alpha('#fff', 0.05), color: '#fff' },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ borderColor: alpha('#fff', 0.1), mx: 2, my: 1 }} />
        <Box sx={{ px: 2, pb: 2 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => scrollToSection('#jugadores')}
            sx={{
              background: 'linear-gradient(135deg, #1565c0, #1976d2)',
              fontWeight: 600,
              borderRadius: 2.5,
              py: 1.5,
            }}
          >
            Ver Plantilla
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

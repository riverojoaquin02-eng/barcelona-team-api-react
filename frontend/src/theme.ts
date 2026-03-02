import { createTheme, alpha } from '@mui/material/styles';

const barcaColors = {
    blue: '#004D98',
    red: '#A50044',
    gold: '#EDBB00',
    darkBg: '#0a0f1a',
    cardBg: '#111827',
    surfaceBg: '#0f172a',
};

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: barcaColors.blue,
            light: '#1a6fc4',
            dark: '#003570',
        },
        secondary: {
            main: barcaColors.red,
            light: '#d4005a',
            dark: '#7a0032',
        },
        warning: {
            main: barcaColors.gold,
            light: '#f5d442',
            dark: '#c49900',
        },
        background: {
            default: barcaColors.darkBg,
            paper: barcaColors.cardBg,
        },
        text: {
            primary: '#ffffff',
            secondary: '#94a3b8',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '3.5rem',
            lineHeight: 1.1,
        },
        h2: {
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: 1.2,
        },
        h3: {
            fontWeight: 700,
            fontSize: '1.75rem',
        },
        h4: {
            fontWeight: 700,
            fontSize: '1.25rem',
        },
        h5: {
            fontWeight: 600,
            fontSize: '1.1rem',
        },
        h6: {
            fontWeight: 600,
            fontSize: '1rem',
        },
    },
    shape: {
        borderRadius: 16,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    scrollBehavior: 'smooth',
                },
                body: {
                    background: barcaColors.darkBg,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    backgroundColor: alpha('#ffffff', 0.03),
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${alpha('#ffffff', 0.08)}`,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                        border: `1px solid ${alpha('#ffffff', 0.15)}`,
                        transform: 'translateY(-4px)',
                        boxShadow: `0 20px 40px ${alpha('#000000', 0.3)}`,
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 600,
                    borderRadius: 12,
                    padding: '10px 24px',
                },
                contained: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: `0 8px 25px ${alpha(barcaColors.blue, 0.3)}`,
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: barcaColors.cardBg,
                    backgroundImage: 'none',
                    border: `1px solid ${alpha('#ffffff', 0.1)}`,
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    backgroundColor: alpha('#ffffff', 0.03),
                    border: `1px solid ${alpha('#ffffff', 0.08)}`,
                    '&:before': {
                        display: 'none',
                    },
                    '&.Mui-expanded': {
                        margin: 0,
                    },
                },
            },
        },
    },
});

export default theme;
export { barcaColors };

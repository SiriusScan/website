// src/theme/muiTheme.js
import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      dark: '#0d47a1', // Add the dark property for the primary color
    },
    secondary: {
      main: '#ffffff',
      dark: '#cfcfcf', // Add the dark property for the secondary color
    },
  },
  typography: {
    fontFamily: "'Roboto Condensed', sans-serif",
    h4: {
      fontSize: '3rem',
    },
    body1: {
      fontSize: '1.75rem',
    },
    h6: {
      fontSize: '2.5rem',
    },
  },
});

export default muiTheme;

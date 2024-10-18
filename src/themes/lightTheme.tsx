import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',  // Pure white for primary color
    },
    secondary: {
      main: '#e0e0e0',  // Light gray for secondary color
    },
    warning: {
      main: '#bdbdbd',  // Medium gray for warning color
    },
    text: {
      primary: '#212121',  // Dark gray for main text
      secondary: '#757575', // Medium gray for subtext
    },
    background: {
      default: '#ffffff',  // Default background color (white)
      paper: '#f5f5f5',    // Paper background color (light gray)
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#212121', // Dark gray for header text
    },
    h2:{
      fontWeight: 700,
      fontSize: '1.5rem',
      color: '#212121', // Dark gray for subheader text
    },
    body1: {
      fontSize: '1rem',
      color: '#757575', // Medium gray for body text
    },
    h4:{
      fontWeight: 700,
      fontSize: '1.25rem',
      color: '#757575',  // Light gray for h4 text
    },
    h5:{
      fontWeight: 700,
      fontSize: '1rem',
      color: '#000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff', // Dark gray button text
          backgroundColor: '#000', // White button background
          '&:hover': {
            backgroundColor: '#ccc',
            color:"#000" 
          },
          borderRadius:'12px'
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background:`linear-gradient(
            35deg,
            hsl(0deg 0% 100%) 0%,
            hsl(0deg 0% 96%) 0%,
            hsl(0deg 0% 93%) 0%,
            hsl(0deg 0% 89%) 0%,
            hsl(0deg 0% 86%) 1%,
            hsl(0deg 0% 82%) 2%,
            hsl(0deg 0% 79%) 3%,
            hsl(0deg 0% 75%) 5%,
            hsl(0deg 0% 72%) 7%,
            hsl(0deg 0% 68%) 10%,
            hsl(0deg 0% 65%) 15%,
            hsl(0deg 0% 61%) 21%,
            hsl(0deg 0% 57%) 31%,
            hsl(0deg 0% 54%) 44%,
            hsl(0deg 0% 50%) 60%,
            hsl(0deg 0% 47%) 72%,
            hsl(0deg 0% 43%) 81%,
            hsl(0deg 0% 40%) 87%,
            hsl(0deg 0% 36%) 91%,
            hsl(0deg 0% 33%) 94%,
            hsl(0deg 0% 29%) 96%,
            hsl(0deg 0% 26%) 98%,
            hsl(0deg 0% 22%) 99%,
            hsl(0deg 0% 18%) 100%,
            hsl(0deg 0% 15%) 100%
          );
          `  ,
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#f5f5f5',  // Paper background (light gray)
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiStack:{
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
        },
      },
    }, 
    MuiAppBar:{
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff', // White app bar background
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default lightTheme;
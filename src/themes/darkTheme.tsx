import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#000000", // Black for primary color in dark mode
    },
    secondary: {
      main: "#111827", // Dark gray for secondary color
    },
    warning: {
      main: "#1F2937", // Dark gray for warning
    },
    text: {
      primary: "#F5F5F5", // Light gray for main text
      secondary: "#B0B0B0", // Lighter gray for subtext
    },
    background: {
      default: "#000000", // Black background for dark mode
      paper: "#111827", // Dark gray for paper background
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      color: "#F5F5F5", // Light gray for headers
    },
    h2: {
      fontWeight: 700,
      fontSize: "1.5rem",
      color: "#F5F5F5", // Light gray for subheaders
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.25rem",
      color: "#F5F5F5", // Light gray for h4 text
    },
    body1: {
      fontSize: "1rem",
      color: "#B0B0B0", // Lighter gray for body text
    },
    h5: {
      fontWeight: 700,
      fontSize: "1rem",
      color: "#F5F5F5", // Light gray for h5 text
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#F5F5F5", // Light gray button text
          backgroundColor: "#000000", // Black button background
          "&:hover": {
            backgroundColor: "#333333", // Dark gray hover effect
            color: "#FFFFFF",
          },
          borderRadius: "12px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", // Darker shadow for cards
          borderRadius: "12px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#111827", // Dark gray paper background
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", // Darker shadow
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000", // Black background for stack
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", // Darker shadow for app bar
          backgroundColor: "#000000", // Dark gray app bar background
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#111827",
        },
      },
    },
  },
});

export default darkTheme;

import { createTheme } from '@mui/material/styles';
// createColor __ start =================
declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}
// createColor __ end ===================
export const dark = createTheme({
  palette: {
    neutral: {
      main: '#212121',
      contrastText: '#fff',
    },
  },
});
export const grey = createTheme({
  palette: {
    neutral: {
      main: '#F9F9F9',
      contrastText: '#212121',
    },
  },
});

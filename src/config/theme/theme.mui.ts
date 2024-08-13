import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#299B93',
    },
    secondary: {
      main: '#299B93',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#000000',
          fontSize: '1rem', 
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '1.1rem', 
        },
      },
    },
  },
});

export default theme;

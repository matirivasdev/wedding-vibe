import { createTheme, responsiveFontSizes } from '@mui/material';

import styles from 'styles/export.module.scss';


const theme = responsiveFontSizes(createTheme({
  spacing: 4,
  typography: {
    fontFamily: styles.fontFamily,
  },
  palette: {
    background: {
      default: styles.backgroundColor,
    },
    primary: {
      main: styles.primary,
      contrastText: styles.contrastTextPrimary,
    },
    secondary: {
      main: styles.secondary,
    },
    error: {
      main: styles.danger,
    },
    info: {
      main: styles.info,
    },
    success: {
      main: styles.success,
    },
    text: {
      primary: styles.textPrimary,
      secondary: styles.textSecondary,
      warning: styles.textWarning,
    },
    divider: styles.textPrimary,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: styles.buttonTextWeightFont,
          minHeight: '32px',
        },
      },
    },
  },
}));

export default theme;

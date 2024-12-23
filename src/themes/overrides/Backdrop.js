// @mui
import { alpha } from '@mui/material/styles';

/***************************  OVERRIDES - BACKDROP  ***************************/

export default function Backdrop(theme) {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[900], 0.2),
          ...theme.applyStyles('dark', { backgroundColor: alpha(theme.palette.grey[600], 0.2) })
        }
      }
    }
  };
}
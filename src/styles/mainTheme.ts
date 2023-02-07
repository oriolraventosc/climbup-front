import { createTheme } from "@mui/material";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#6CCFF6",
      dark: "#001011",
      light: "#FFFFFC",
      contrastText: "#757780",
    },
  },
  shape: {
    borderRadius: 5,
  },
});

export default mainTheme;

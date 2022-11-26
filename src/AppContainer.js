import { CssBaseline, ThemeProvider } from "@mui/material";
import BeforeLogin from "./frontEnd/containers/berforeLogin";
import { ColorModeContext, useMode } from "./frontEnd/mui/theme";

const AppContainer = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BeforeLogin />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AppContainer;

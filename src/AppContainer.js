import { CssBaseline, ThemeProvider } from "@mui/material";
import AfterLogin from "./frontEnd/containers/afterLogin";
import BeforeLogin from "./frontEnd/containers/berforeLogin";
import { ColorModeContext, useMode } from "./frontEnd/mui/theme";
import { ToastContainer } from "react-toastify";

const AppContainer = () => {
  const [theme, colorMode] = useMode();
  const isLoggedin = localStorage.getItem("token");

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {isLoggedin === null ? <BeforeLogin /> : <AfterLogin />}
        <ToastContainer position="top-left" autoClose={3000} theme="dark" />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AppContainer;

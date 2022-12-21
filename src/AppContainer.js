import { CssBaseline, ThemeProvider } from "@mui/material";
import AfterLogin from "./frontEnd/containers/afterLogin";
import BeforeLogin from "./frontEnd/containers/berforeLogin";
import { ColorModeContext, useMode } from "./frontEnd/mui/theme";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import { RTL } from "frontEnd/helpers/RTL";

const AppContainer = () => {
  const [theme, colorMode] = useMode();
  const isLoggedin = localStorage.getItem("token");

  const { i18n } = useTranslation();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <RTL mode={i18n.language}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {isLoggedin === null ? <BeforeLogin /> : <AfterLogin />}
          <ToastContainer position="top-left" autoClose={3000} theme="dark" />
        </ThemeProvider>
      </RTL>
    </ColorModeContext.Provider>
  );
};

export default AppContainer;

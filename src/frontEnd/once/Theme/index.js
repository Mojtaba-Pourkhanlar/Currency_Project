import { useContext } from "react";
import { Box, useTheme } from "@mui/material";
import { ColorModeContext } from "../../mui/theme";
import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";
// Images
import moon from "../../assets/images/Icons/moon.svg";
import sun from "../../assets/images/Icons/sun.svg";
const Theme = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === "dark" ? (
        <img src={moon} width={28} height={28} alt="sun" />
      ) : (
        <img src={sun} width={28} height={28} alt="moon" />
      )}
    </Box>
  );
};

export default Theme;

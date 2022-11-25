import { useContext } from "react";
import { Box, useTheme } from "@mui/material";
import { ColorModeContext } from "../../mui/theme";
import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";

const Theme = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === "dark" ? (
        <DarkModeOutlined />
      ) : (
        <LightModeOutlined />
      )}
    </Box>
  );
};

export default Theme;

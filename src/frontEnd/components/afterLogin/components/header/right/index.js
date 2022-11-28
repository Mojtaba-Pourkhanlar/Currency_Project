import { Box } from "@mui/material";
import { Language } from "../../../../../once/ChangeLanguage";
import Theme from "../../../../../once/Theme";

export const Right = () => {

  return (
    <Box display="flex" alignItems="center">
      <Box component="div" sx={{ mx: { xs: "10px", sm: "30px" } }}>
        <Theme />
      </Box>
      <Box component="div" >
        <Language />
      </Box>
    </Box>
  );
};

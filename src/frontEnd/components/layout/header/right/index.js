import { Box, Typography } from "@mui/material";
import { Language } from "../../../../once/ChangeLanguage";

export const Right = () => {

return(
    <Box display="flex" alignItems="center">
      <Box component="div" m="0 20px">
        <Language />
      </Box>
      <Box >
        <Typography variant="p">LOGIN</Typography>
      </Box>
    </Box>)

}
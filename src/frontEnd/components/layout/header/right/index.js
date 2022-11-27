import { Box, Button, Typography } from "@mui/material";
import { Language } from "../../../../once/ChangeLanguage";
import { Person } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Theme from "../../../../once/Theme";

export const Right = () => {
  const {  t } = useTranslation();

  return (
    <Box display="flex" alignItems="center">
      <Box component="div">
        <Theme />
      </Box>
      <Box component="div" sx={{mx :{xs:'5px',sm:'30px' }}}>
        <Language />
      </Box>
      <Box>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="warning"
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
            }}>
            <Typography variant="h6" color="#fff">
              {t("Login")}
            </Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

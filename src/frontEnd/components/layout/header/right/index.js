import { Box, Button, Typography } from "@mui/material";
import { Language } from "../../../../once/ChangeLanguage";
import { Person } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Theme from "../../../../once/Theme";

export const Right = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  return (
    <Box display="flex" alignItems="center">
      <Box component="div">
        <Theme />
      </Box>
      <Box component="div" m="0 20px">
        <Language />
      </Box>
      <Box>
        <Link to="/login" style={{ textDecoration: "none" }}>
          {language === "en" && (
            <Button
              startIcon={<Person sx={{ color: "#fff" }} />}
              variant="contained"
              color="warning">
              <Typography variant="h6" color="#fff">
                Login
              </Typography>
            </Button>
          )}
          {language === "fa" && (
            <Button
              startIcon={<Person sx={{ m: "0 0 0 10px", color: "#fff" }} />}
              variant="contained"
              color="warning">
              <Typography variant="h6" color="#fff">
                ورود
              </Typography>
            </Button>
          )}
        </Link>
      </Box>
    </Box>
  );
};

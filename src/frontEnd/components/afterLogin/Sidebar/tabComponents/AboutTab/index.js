import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Details from "./Details/Details";
import ContactMe from "./ContactMe/ContactMe";
import Skills from "./Skills/Skills";
import { Box, Chip, Divider, Typography } from "@mui/material";


export const AboutTab = () => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const leftRight = {
    "&::before, &::after": {
      borderColor: "primary.main",
    },
  };

  return (
    <>
      <Box my={2}>
        <Divider
          textAlign={i18n.language === "en" ? "left" : "left"}
          sx={leftRight}>
          <Chip
            color="primary"
            label={<Typography variant="h5">{t("mojtabaDec")}</Typography>}
            sx={{ p: 3 }}
          />
        </Divider>
      </Box>
      <Details />
      <Box my={2}>
        <Divider
          textAlign={i18n.language === "en" ? "left" : "left"}
          sx={leftRight}>
          <Chip
            color="primary"
            label={<Typography variant="h5">{t("skils")}</Typography>}
            sx={{ p: 3 }}
          />
        </Divider>
      </Box>
      <Skills />
      <Box mb={6}>
        <Divider
          textAlign={i18n.language === "en" ? "left" : "left"}
          sx={leftRight}>
          <Chip
            color="primary"
            label={<Typography variant="h5">{t("contactMe")}</Typography>}
            sx={{ p: 3 }}
          />
        </Divider>
      </Box>
      <ContactMe />
    </>
  );
};

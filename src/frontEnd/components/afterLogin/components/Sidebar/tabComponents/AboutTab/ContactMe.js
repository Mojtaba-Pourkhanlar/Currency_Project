import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Github, Linkdin } from "../../../../../../assets/images/skill";

const ContactMe = () => {
  const { i18n, t } = useTranslation();

  const leftRight = {
    textAlign: `${i18n.language === "en" ? "left" : "right"}`,
  };
  return (
    <>
      <Typography variant="h3" my="50px" sx={leftRight}>
        {t("contactMe")}
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <a href="https://github.com/Mojtaba-Pourkhanlar">
            <img width="150px" src={Github} alt="github.com" />
          </a>
          <Typography variant="h5" my={3}>
            {t("github")}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <a href="https://www.linkedin.com/in/mojtaba-pourkhanlar-778370251">
            <img width="150px" src={Linkdin} alt="www.linkedin.com" />
          </a>
          <Typography variant="h5" my={3}>
            {t("linkdin")}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactMe
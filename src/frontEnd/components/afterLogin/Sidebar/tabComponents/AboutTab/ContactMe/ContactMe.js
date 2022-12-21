import { Grid, Typography } from "@mui/material";
import { Github, Linkdin } from "frontEnd/assets/images/skill";
import { useTranslation } from "react-i18next";

const ContactMe = () => {
  const { t } = useTranslation();

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <a
            href="https://github.com/Mojtaba-Pourkhanlar"
            target="_blank"
            rel="noopener noreferrer">
            <img width="80px" src={Github} alt="github.com" />
          </a>
          <Typography variant="h5" my={1}>
            {t("github")}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <a
            href="https://www.linkedin.com/in/mojtaba-pourkhanlar-778370251"
            target="_blank"
            rel="noopener noreferrer">
            <img width="80px" src={Linkdin} alt="www.linkedin.com" />
          </a>
          <Typography variant="h5" my={1}>
            {t("linkdin")}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactMe;

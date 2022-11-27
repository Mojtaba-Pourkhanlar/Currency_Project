import faq from "../../../assets/images/icons/faq.svg";
import blog from "../../../assets/images/icons/blog.svg";
import support from "../../../assets/images/icons/support.svg";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const FaqComponent = ({ title, subTitle, images, width }) => {
  const theme = useTheme();
  const colors = theme.palette;
  const { t } = useTranslation();

  const style = {
    display: "flex",
    alignItems: "start",
    m: {
      xs: "30px 0",
      md: "0 0",
    },
  };
  return (
    <Box sx={style}>
      <img src={images} width={width} alt={title} />
      <Box mx={2}>
        <Typography variant="h4" mb="12px">
          {t(`${title}`)}
        </Typography>
        <Typography variant="p" fontSize="14px" color={colors.grey.main}>
          {t(`${subTitle}`)}
        </Typography>
      </Box>
    </Box>
  );
};

const FAQ = () => {
  return (
    <Grid container my={10}>
      <Grid item xs={12} sm={12} md={4}>
        <FaqComponent
          images={support}
          width="50px"
          title="chatSupport"
          subTitle="chatSupportDes"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <FaqComponent images={faq} width="50px" title="faq" subTitle="faqDec" />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <FaqComponent
          images={blog}
          width="50px"
          title="blog"
          subTitle="blogDec"
        />
      </Grid>
    </Grid>
  );
};

export default FAQ;

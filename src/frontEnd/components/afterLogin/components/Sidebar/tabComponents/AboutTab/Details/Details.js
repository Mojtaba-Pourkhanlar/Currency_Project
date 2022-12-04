import { Grid, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import user from "../../../../../../../assets/images/gallery/001.png";
import { DevInfoEN, DevInfoFA } from "./DevInfo";

const Details = () => {
  const { i18n, t } = useTranslation();
  const theme = useTheme();
  const colors = theme.palette;

  const textColor = colors.mode === "dark" ? "#ccc" : "#212121";

  const content = [
    { name: t("firstName"), value: t("mojtabaA") },
    { name: t("lastName"), value: t("pourkhanlar") },
    { name: t("ageَA"), value: t("30A") },
    { name: t("emailA"), value: t("mojtabaEmeil") },
    { name: t("phoneA"), value: t("0990") },
  ];

  const enText = content.map((item, index) => (
    <DevInfoEN key={index}>
      {item.name} : <span style={{ color: textColor }}>{item.value}</span>
    </DevInfoEN>
  ));

  const faText = content.map((item, index) => (
    <DevInfoFA key={index}>
      {item.name} : <span style={{ color: textColor }}>{item.value}</span>
    </DevInfoFA>
  ));

  return (
    <>
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="space-between">
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ display: { xs: "flex", lg: "none" }, justifyContent: "end" }}>
          <img
            style={{ borderRadius: "10px " }}
            src={user}
            alt="imageMe"
            width="350px"
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          {i18n.language === "en" ? enText : faText}
        </Grid>

        <Grid
          item
          xs={12}
          lg={6}
          mb={5}
          ml={1}
          sx={{
            display: { xs: "none", lg: "flex" },
            justifyContent: "end",
            m: "0 auto",
            textAlign: i18n.language === "en" ? "right" : "left",
          }}>
          <img
            style={{ borderRadius: "10px " }}
            src={user}
            width="350px"
            alt="imageMe"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Details;

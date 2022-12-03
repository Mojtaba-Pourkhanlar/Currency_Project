import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  Bootstrap,
  Css,
  Git,
  Graphql,
  Html,
  Js,
  Mui,
  Next,
  React,
  Redux,
  Scss,
} from "../../../../../../assets/images/skill";

const ItemGrid = ({ title, images }) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "transparent",
        transition: "all 0.50s linear",
        flexDirection: "column",
        my: "1px",
      }}>
      <CardMedia
        component="img"
        sx={{ width: 100, mt: "20px" }}
        image={images}
        alt={title}
      />
      <Box>
        <CardContent>{title}</CardContent>
      </Box>
    </Card>
  );
};

const Skills = () => {
  const { i18n, t } = useTranslation();

  const leftRight = {
    textAlign: `${i18n.language === "en" ? "left" : "right"}`,
  };
  return (
    <>
      <Typography variant="h3" mb="20px" sx={leftRight}>
        {t("skils")}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <ItemGrid title="Reactjs" images={React} />
        </Grid>

        <Grid item xs={12} sm={4} md={3} lg={2}>
          <ItemGrid title="Nextjs" images={Next} />
        </Grid>

        <Grid item xs={12} sm={4} md={3} lg={2}>
          <ItemGrid title="JavaScript" images={Js} />
        </Grid>

        <Grid item xs={12} sm={4} md={3} lg={2}>
          <ItemGrid title="Git" images={Git} />
        </Grid>

        <Grid item xs={12} sm={4} md={3} lg={2}>
          <ItemGrid title="Redux" images={Redux} />
        </Grid>

        <Grid item xs={12} sm={4} md={3} lg={2}>
          <ItemGrid title="GraphQL" images={Graphql} />
        </Grid>

        <Grid item xs={12} sm={4} md={3} lg={2}>
          <ItemGrid title="Material ui" images={Mui} />
        </Grid>

        <Grid item xs={12} sm={4} md={3} lg={2}>
          <ItemGrid title="Sass" images={Scss} />
        </Grid>

        <Grid item xs={12} sm={4} md={3} lg={2}>
          <ItemGrid title="Bootstrap" images={Bootstrap} />
        </Grid>

        <Grid item xs={12} sm={4} md={3} lg={2}>
          <ItemGrid title="HTML" images={Html} />
        </Grid>

        <Grid item xs={12} sm={4} md={3} lg={2}>
          <ItemGrid title="CSS" images={Css} />
        </Grid>
      </Grid>
    </>
  );
};

export default Skills;

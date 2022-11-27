import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
// Image
import img1 from "../../../assets/images/btc/08.jpg";
import img2 from "../../../assets/images/btc/02.jpg";
import img3 from "../../../assets/images/btc/03.jpg";
import img4 from "../../../assets/images/btc/04.jpg";
import { useTranslation } from "react-i18next";

export const Categories = () => {
  const { t } = useTranslation();

  const gridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    height: "703px",
  };

  const gridItem = {
    display: "flex",
    flexDirection: "row",
    margin: "14px 0",
  };

  const button = {
    background: "#000",
    position: "absolute",
    left: "30px",
    bottom: "40px",
    borderRadius: "25px",
    color: "#fff",
    padding: "10px 30px",
    fontSize: "12px",
    "&:hover": {
      background: "#000",
      color: "#fff",
    },
  };

  const cards = {
    borderRadius: "10px",
    position: "relative",
  };

  const cardStyles = {
    "&:hover": {
      cursor: "pointer",
      transition: "transform 1.5s, filter 1.5s ease-in-out",
      transform: "scale(1.1)",
    },
  };

  const styles = {
    cardcontent: {
      padding: "0 !important",
      "&:last-child": {
        paddingBottom: 0,
      },
    },
  };

  const container = {
    padding: "0 7px",
    "@media (max-width: 900px)": {
      padding: "15px 0 0 0 !important",
      width: "100%",
    },
  };

  const containerLast = {
    padding: "0 7px",
    "@media (max-width: 900px)": {
      width: "100%",
      padding: "0",
    },
  };

  const containerImg = {
    padding: "0 7px",
    "@media (max-width: 900px)": {
      padding: "0",
    },
  };

  return (
    <>
      <Typography variant="h2">{t('categories')}</Typography>
      <Grid container spacing={1} sx={{ boxShadow: "none", my: "40px" }}>
        <Grid item xs={12} sm={12} md={4} sx={gridContainer}>
          <Card sx={cards}>
            <CardContent sx={styles.cardcontent}>
              <CardMedia
                sx={cardStyles}
                component="img"
                height="700"
                width="620"
                image={img1}
                alt="green iguana"
              />
              <Button sx={button} size="medium">
                {t("productDetails")}
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={8}>
          <Grid item sx={containerImg}>
            <Card sx={cards}>
              <CardContent sx={styles.cardcontent}>
                <CardMedia
                  sx={cardStyles}
                  component="img"
                  height="350"
                  image={img2}
                  alt="img"
                />
                <Button sx={button} size="medium">
                  {t("productDetails")}
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid container sx={gridItem}>
            <Grid item sm={12} md={6} sx={containerLast}>
              <Card sx={cards}>
                <CardContent sx={styles.cardcontent}>
                  <CardMedia
                    sx={cardStyles}
                    component="img"
                    height="330"
                    image={img3}
                    alt="green iguana"
                  />
                  <Button sx={button} size="medium">
                    {t("productDetails")}
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={12} md={6} sx={container}>
              <Card sx={cards}>
                <CardContent sx={styles.cardcontent}>
                  <CardMedia
                    sx={cardStyles}
                    component="img"
                    height="330"
                    image={img4}
                    alt="green iguana"
                  />
                  <Button sx={button} size="medium">
                    {t("productDetails")}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import appStore from "../../../assets/images/appStore.svg";
import google from "../../../assets/images/google.svg";
import footer from "../../../assets/images/footerCards.png";
import { Logo } from "../../../assets/Logo";
// Icon
import {
  FacebookOutlined,
  Telegram,
  Pinterest,
  Instagram,
} from "@mui/icons-material";
import { Accordions } from "../../../helpers";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        backgroundColor: "#080A16",
        paddingTop: "50px",
        position: "relative",
      }}>
      <Container maxWidth="xl">
        <Grid
          container
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={2.5}
            sx={{ mt: { xs: 0, sm: "30px", lg: 0 } }}>
            <Typography
              variant="h5"
              mb={3}
              fontSize="17px"
              color="#fff"
              fontWeight={500}>
              {t("link")}
            </Typography>
            <Box sx={{ color: "#757575" }}>
              <Typography variant="p" component="p">
                {t("trending")}
              </Typography>
              <Typography variant="p" component="p">
                {t("sale")}
              </Typography>
              <Typography variant="p" component="p">
                {t("about")}
              </Typography>
              <Typography variant="p" component="p">
                {t("blog")}
              </Typography>
              <Typography variant="p" component="p">
                {t("contact")}
              </Typography>
              <Typography variant="p" component="p">
                {t("shipping")}
              </Typography>
              <Typography variant="p" component="p">
                {t("delivery")}
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={2.5}
            sx={{ mt: { xs: 0, sm: "30px", lg: 0 } }}>
            <Typography
              variant="h5"
              color="#fff"
              mb={3}
              fontSize="17px"
              fontWeight={500}>
              {t("decores")}
            </Typography>
            <Box sx={{ color: "#757575" }}>
              <Typography variant="p" component="p">
                {t("vases")}
              </Typography>
              <Typography variant="p" component="p">
                {t("mirrors")}
              </Typography>
              <Typography variant="p" component="p">
                {t("paintings")}
              </Typography>
              <Typography variant="p" component="p">
                {t("figurines")}
              </Typography>
              <Typography variant="p" component="p">
                {t("textile")}
              </Typography>
              <Typography variant="p" component="p">
                {t("lighting")}
              </Typography>
              <Typography variant="p" component="p">
                {t("photo")}
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={2.5}
            sx={{ mt: { xs: 0, sm: "30px", lg: 0 } }}>
            <Typography
              variant="h5"
              color="#fff"
              mb={3}
              fontSize="17px"
              fontWeight={500}>
              {t("categoriesFooter")}
            </Typography>
            <Box sx={{ color: "#757575" }}>
              <Typography variant="p" component="p">
                {t("kitchen")}
              </Typography>
              <Typography variant="p" component="p">
                {t("bathroom")}
              </Typography>
              <Typography variant="p" component="p">
                {t("bedroom")}
              </Typography>
              <Typography variant="p" component="p">
                {t("clothing")}
              </Typography>
              <Typography variant="p" component="p">
                {t("delivery")}
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={2.5}
            sx={{ mt: { xs: 0, sm: "30px", lg: 0 } }}>
            <Typography
              variant="h5"
              color="#fff"
              mb={3}
              fontSize="17px"
              fontWeight={500}>
              {t("showroom")}
            </Typography>
            <Box sx={{ color: "#757575" }}>
              <Typography variant="p" component="p">
                1501 Main St, Ste 50
              </Typography>
              <Typography variant="p" component="p">
                Tewksbury MA 01876
              </Typography>
              <Typography variant="p" component="p">
                mojtabapourkhanlar@gmail.com
              </Typography>
              <Typography variant="p" component="p">
                0990 747 7987
              </Typography>
              <Typography variant="p" component="p">
                Mon-Fri: 8:00 - 21:00
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={2}
            sx={{ mt: { xs: 0, sm: "30px", lg: 0 } }}>
            <Typography
              variant="h5"
              height="1px"
              color="#fff"
              fontSize="17px"
              fontWeight={500}>
              {t("app")}
            </Typography>
            <Box height="70px">
              <img src={appStore} width="170px" alt="socialMedia" />
            </Box>
            <Box>
              <img src={google} width="170px" alt="socialMedia" />
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            display: {
              xs: "flex",
              sm: "none",
            },
          }}>
          <Grid item xs={12}>
            <Accordions title="link" id="panel1">
              <p>{t("trending")}</p>
              <p>{t("sale")}</p>
              <p>{t("about")}</p>
              <p>{t("blog")}</p>
              <p>{t("contact")}</p>
              <p>{t("shipping")}</p>
              <p>{t("delivery")}</p>
            </Accordions>
          </Grid>

          <Grid item xs={12} my={2}>
            <Accordions title="decores" id="panel2">
              <p> {t("vases")}</p>
              <p>{t("mirrors")}</p>
              <p>{t("paintings")}</p>
              <p>{t("figurines")}</p>
              <p>{t("textile")}</p>
              <p>{t("lighting")}</p>
              <p>{t("photo")}</p>
            </Accordions>
          </Grid>

          <Grid item xs={12}>
            <Accordions title="categoriesFooter" id="panel3">
              <p>{t("kitchen")}</p>
              <p>{t("bathroom")}</p>
              <p>{t("bedroom")}</p>
              <p>{t("clothing")}</p>
              <p>{t("delivery")}</p>
            </Accordions>
          </Grid>

          <Grid item xs={12} mt={2} mb={5}>
            <Accordions title="showroom" id="panel4">
              <p> 1501 Main St, Ste 50</p>
              <p>Tewksbury MA 01876</p>
              <p>mojtabapourkhanlar@gmail.com</p>
              <p>0990 747 7987</p>
              <p>Mon-Fri: 8:00 - 21:00</p>
            </Accordions>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h5"
              height="1px"
              fontSize="17px"
              fontWeight={500}>
              {t("app")}
            </Typography>
            <Box height="70px">
              <img src={appStore} width="170px" alt="socialMedia" />
            </Box>
            <Box>
              <img src={google} width="170px" alt="socialMedia" />
            </Box>
          </Grid>
        </Grid>

        <Divider
          variant="middle"
          color="#616161"
          sx={{ margin: "80px 0px 0" }}
        />

        <Grid container py={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center">
              <Logo />
              <Typography variant="h4" color="#fff">
                {t("around")}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              my: "20px",
              textAlign: {
                xs: "start",
                sm: "center",
              },
            }}>
            <FacebookOutlined
              sx={{
                backgroundColor: "#0088cc",
                padding: "2px 2px ",
                borderRadius: "50%",
              }}
            />
            <Telegram
              sx={{
                backgroundColor: "#405de6",
                padding: "2px 2px ",
                borderRadius: "50%",
                m: {
                  xs: "0 10px",
                  sm: "0 20px",
                },
              }}
            />
            <Pinterest
              sx={{
                backgroundColor: "#1877f2",
                padding: "2px 2px ",
                borderRadius: "50%",
              }}
            />
            <Instagram
              sx={{
                backgroundColor: "#e60023",
                padding: "2px 2px ",
                borderRadius: "50%",
                m: {
                  xs: "0 10px",
                  sm: "0 20px",
                },
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              textAlign: {
                xs: "start",
                sm: "end",
              },
            }}>
            <img src={footer} alt="imageFooter" width="210px" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// MUI
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Drawer,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import Left from "./left";
import { SideBar } from "./sidebar";
import { Link } from "react-router-dom";
import { Language, Theme } from "frontEnd/once";

export const Header = ({ login = null }) => {
  const [isOpen, setIsOpen] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown") {
      return;
    }
    setIsOpen({ ...isOpen, [anchor]: open });
  };

  const { t } = useTranslation();

  const Hamburger = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  return (
    <div>
      <AppBar position="fixed" sx={{ top: "0", background: "#080A16" }}>
        <Container maxWidth="xl" disableGutters>
          <Toolbar>
            <Grid
              container
              sx={{ width: "100%", display: "flex", alignItems: "center" }}>
              <Grid item xs={1} md={0}>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Hamburger>
                      <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(anchor, true)}>
                        <MenuIcon />
                      </IconButton>

                      <Drawer
                        anchor={anchor}
                        open={isOpen[anchor]}
                        onClose={toggleDrawer(anchor, false)}>
                        <SideBar anchor={anchor} toggleDrawer={toggleDrawer} />
                      </Drawer>
                    </Hamburger>
                  </React.Fragment>
                ))}
              </Grid>

              <Grid
                item
                xs={11}
                sm={11}
                md={12}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <Box>
                  <Left />
                </Box>

                <Box display="flex" alignItems="center">
                  <Box component="div">
                    <Theme />
                  </Box>
                  <Box component="div" sx={{ mx: { xs: "5px", sm: "30px" } }}>
                    <Language />
                  </Box>

                  {login ? (
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
                  ) : null}
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </div>
  );
};

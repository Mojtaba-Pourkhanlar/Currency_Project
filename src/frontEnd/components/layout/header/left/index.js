// Language
import { useTranslation } from "react-i18next";
// MUI
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Left = () => {
  const { t } = useTranslation();

  // Style
  //#region
  const typo = {
    color: "aliceblue",
    margin: " 5px 10px",
    fontWeight: 500,
    fontSize: "1.3rem",
  };

  // const hoverBg = {
  //   cursor: "pointer",
  //   fontWeight: 500,
  //   color: " aliceblue",
  //   textDecoration: "none",
  //   fontSize: "1rem",
  //   margin: "0 10px",
  //   "&:hover": {
  //     transition: "0.3s",
  //     color: "#335545",
  //   },
  // };
  //#endregion

  return (
    <>
      <Grid container sx={{ display: "flex" }}>
        <Grid
          item
          sx={{ margin: "0 10px", display: "flex", alignItems: "center" }}>
          <svg
            version="1.1"
            width="35"
            height="32"
            viewBox="0 0 36 33"
            color="#084430"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"></path>
          </svg>
          <Box>
            <Link to={"/landing"} style={{ textDecoration: "none" }}>
              <Typography sx={typo}>{t("around")}</Typography>
            </Link>
          </Box>
        </Grid>

          <Grid item sx={{ display: "flex", p: "12px" }}>
              {/* <Typography sx={hoverBg}>{t("landing")}</Typography> */}
          </Grid>
      </Grid>
    </>
  );
};

export default Left;

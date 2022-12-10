import React, { useContext, useState } from "react";
import { DasboardData } from "frontEnd/context/Dahsboard";
import {
  Table,
  Box,
  Pagination,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  useTheme,
  TableCell,
  FormControlLabel,
  Switch,
} from "@mui/material";
import MarketChart from "./MarketChart";
import { useTranslation } from "react-i18next";

const ShowMarkets = () => {
  const { allMarekts } = useContext(DasboardData);
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  const { i18n, t } = useTranslation();
  const theme = useTheme();
  const colors = theme.palette;

  const styleTable = {
    fontSize: ".8rem",
    backgroundColor: colors.mode === "dark" ? "#0D1024" : colors.grey[400],
    cursor: "pointer",
    "&:hover": {
      backgroundColor:
        colors.mode === "dark" ? colors.secondary.dark : colors.grey.dark,
    },
  };

  const headerTable = {
    backgroundColor:
      colors.mode === "dark" ? colors.secondary.dark : colors.primary.main,
  };

  const tabHeader = {
    color: "#fff",
    fontSize: ".8rem",
    fontWeight: "700",
  };

  const grey = colors.grey.light;

  const textPosi = {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  };

  return (
    <>
      <Box sx={textPosi}>
        <FormControlLabel
          control={<Switch onClick={() => setShow(!show)} color="warning" />}
        />
        <Typography mr="20px">{t("showFull")}</Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ m: "0" }} aria-label="customized table">
          <TableHead sx={headerTable}>
            <TableRow>
              <TableCell sx={tabHeader} align="left">
                #
              </TableCell>
              <TableCell
                sx={tabHeader}
                align={i18n.language === "en" ? "left" : "right"}>
                {t("coin")}
              </TableCell>
              <TableCell sx={tabHeader} align="left"></TableCell>
              <TableCell sx={tabHeader} align="left"></TableCell>
              <TableCell sx={tabHeader} align="left">
                {t("price")}
              </TableCell>
              <TableCell sx={tabHeader} align="right">
                {t("24")}
              </TableCell>
              {show ? (
                <>
                  <TableCell sx={tabHeader} align="right">
                    {t("24v")}
                  </TableCell>
                  <TableCell sx={tabHeader} align="right">
                    {t("mkt")}
                  </TableCell>
                </>
              ) : (
                <>
                  <TableCell sx={tabHeader} align="left"></TableCell>
                  <TableCell sx={tabHeader} align="left"></TableCell>
                </>
              )}

              <TableCell sx={tabHeader} align="right">
                {t("7day")}
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {allMarekts
              .slice((page - 1) * 10, (page - 1) * 10 + 10)
              .map((item) => (
                <TableRow sx={styleTable} key={item.id}>
                  <TableCell>{item.market_cap_rank}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img src={item.image} width="40px" alt={item.id} />
                      <Typography fontWeight={700} mx="5px">
                        {item.name}
                      </Typography>
                      <Typography variant="p" color={grey}>
                        {item.symbol}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="left">
                    <Typography variant="p" color={grey}>
                      ${item.current_price.toLocaleString()}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: `${
                        item.price_change_percentage_24h > 0
                          ? "#00cc00"
                          : "#ff2626"
                      }`,
                    }}>
                    {item.price_change_percentage_24h.toFixed(2)}%
                  </TableCell>

                  {show ? (
                    <>
                      <TableCell align="right">
                        <Typography variant="p" color={grey}>
                          ${item.total_volume.toLocaleString()}
                        </Typography>
                      </TableCell>

                      <TableCell align="right">
                        <Typography variant="p" color={grey}>
                          ${item.market_cap.toLocaleString()}
                        </Typography>
                      </TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell align="right"></TableCell>

                      <TableCell align="right"></TableCell>
                    </>
                  )}

                  <TableCell align="right" sx={{ width: "150px" }}>
                    <MarketChart
                      id={item.id}
                      itemColor={item.price_change_percentage_24h}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        count={Math.round(allMarekts.length / 10)}
        sx={{
          padding: 8,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          "& .MuiPaginationItem-root": {
            color:
              colors.mode === "dark"
                ? colors.warning.light
                : colors.warning.main,
          },
        }}
        shape="rounded"
        color="secondary"
        onChange={(_, value) => {
          setPage(value);
          window.scrollTo(0, 0);
        }}
      />
    </>
  );
};

export default ShowMarkets;

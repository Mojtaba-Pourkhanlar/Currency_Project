import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  Table,
  Box,
  Pagination,
  TextField,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  useTheme,
  TableCell,
} from "@mui/material";
import { CoinsList } from "frontEnd/context/Coins";

const Coins = () => {
  const { coins, search, setSearch, page, setPage } = useContext(CoinsList);
  const { t } = useTranslation();
  const theme = useTheme();
  const colors = theme.palette;
  const navigate = useNavigate();

  const searchCoins = () => {
    return coins.filter(
      (item) =>
        item.name.toLowerCase().includes(search) ||
        item.symbol.toLowerCase().includes(search),
    );
  };

  const CssTextField = {
    margin: "30px 0 20px",
    width: "100%",
    "& label": {
      color: colors.grey.light,
    },
    "& label.Mui-focused": {
      color: colors.grey.light,
    },
    "& input": {
      color: colors.grey.light,
    },
  };

  const styleTable = {
    backgroundColor:
      colors.mode === "dark" ? colors.primary[500] : colors.grey[400],
    cursor: "pointer",

    "&:hover": {
      backgroundColor:
        colors.mode === "dark" ? colors.primary.main : colors.primary.light,
    },
  };

  const headerTable = {
    backgroundColor:
      colors.mode === "dark" ? colors.warning.dark : colors.primary.main,
  };

  return (
    <div style={{ position: "relative" }}>
      <Typography variant="h2" m="80px 0 5px">
        {t("currenyList")}
      </Typography>

      <Box>
        <TextField
          label={t("serachCrypto")}
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={CssTextField}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ m: "0" }} aria-label="customized table">
          <TableHead sx={headerTable}>
            <TableRow>
              {["Coin", " ", null, "Price", "24h Change", "Market Cap"].map(
                (head) => (
                  <TableCell
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                    }}
                    key={head}
                    align={head === "Coin" ? "justify" : "right"}>
                    {head}
                  </TableCell>
                ),
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {searchCoins()
              .slice((page - 1) * 10, (page - 1) * 10 + 10)
              .map((c) => (
                <TableRow
                  onClick={() => navigate(`/coin/${c.id}`)}
                  sx={styleTable}
                  key={c.id}>
                  <TableCell align="left" sx={{ margin: "50px 0" }}>
                    <img
                      style={{ width: "40px", marginBottom: "-10px" }}
                      src={c.image}
                      alt={c.name}
                    />
                  </TableCell>
                  <TableCell align="left">{c.name}</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">
                    {c.current_price.toLocaleString()}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: `${
                        c.price_change_percentage_24h > 0
                          ? "#00cc00"
                          : "#ff2626"
                      }`,
                    }}>
                    {c.price_change_percentage_24h.toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    {c.market_cap.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        count={Math.round(searchCoins().length / 10)}
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
        }}
      />
    </div>
  );
};

export default Coins;

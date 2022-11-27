import { Box, Pagination, TextField } from "@mui/material";
import { useContext } from "react";
import { CoinsList } from "../../../context/Coins";
// import { useHistory } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const Coins = () => {
  const { coins, search, setSearch, page, setPage } = useContext(CoinsList);
  const theme = useTheme();
  const colors = theme.palette;
  //   const history = useHistory();
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
      color: colors.grey.dark,
    },
    "& label.Mui-focused": {
      color: colors.grey.dark,
    },
    "& input": {
      color: colors.grey.dark,
    },
  };

  const styleTable = {
    backgroundColor: colors.grey.light,
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
    <>
      <Typography variant="h2" m="80px 0 5px">Currency List</Typography>

      <Box>
        <TextField
          label="Search For a Crypto Currency"
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
              {["Coin", " ", " ", "Price", "24h Change", "Market Cap"].map(
                (head) => (
                  <TableCell
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                    }}
                    key={head}
                    align={head === "Coin" ? "" : "right"}>
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
                  //   onClick={() => history.push(`/coin/${c.id}`)}
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
        count={(searchCoins()?.length / 10).toFixed(0)}
        sx={{
          padding: 8,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          "& .MuiPaginationItem-root": {
            color: colors.mode === "dark" ? colors.warning.light : colors.warning.main,
          },
        }}
        shape="rounded"
        color="secondary"
        onChange={(_, value) => {
          setPage(value);
          window.scroll(0, 450);
        }}
      />
    </>
  );
};

export default Coins;

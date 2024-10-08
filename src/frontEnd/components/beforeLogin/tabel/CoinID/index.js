import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
// Component
import TableCoinId from "./TableCoinId";
import { CoinsList } from "frontEnd/context/Coins";
import { getCoinID } from "frontEnd/services/api";
import { useTranslation } from "react-i18next";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Spinner } from "frontEnd/helpers";
Chart.register(CategoryScale);

const CoinID = () => {
  const { setLoading, loading } = useContext(CoinsList);
  const [coinId, setCoinId] = useState([]);
  const { t } = useTranslation();
  const theme = useTheme();
  const colors = theme.palette;
  const { id } = useParams();

  useEffect(() => {
    const fetchCoinId = async () => {
      try {
        setLoading(true);
        const { data } = await getCoinID(id);

        setCoinId(data);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };
    fetchCoinId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ada = coinId.tickers;

  const design = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "200px",
          }}>
          <Spinner />
        </Box>
      ) : (
        <div style={{ minHeight: "100vh" }}>
          <Container maxWidth="lg">
            <Grid container pt={10}>
              <Grid item xs={12}>
                <Typography variant="h1" mb={10} color={colors.grey.light}>
                  {coinId.name}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Box>
                  <Button variant="contained" size="medium" color="secondary">
                    Rank # {coinId.market_cap_rank}
                  </Button>
                </Box>

                <Box component="div" sx={design} justifyContent="space-between">
                  <Box sx={design} my={4}>
                    {coinId.image ? (
                      <img src={coinId.image.small} alt="img" width="70px" />
                    ) : null}
                    {coinId.symbol ? (
                      <Typography
                        variant="p"
                        color={colors.grey.main}
                        mx="10px">
                        {coinId.symbol.toUpperCase()}/USD
                      </Typography>
                    ) : null}
                  </Box>
                  <Box>
                    {coinId.market_data?.current_price ? (
                      <Typography variant="h4" color={colors.grey.main}>
                        ${coinId.market_data.current_price.usd.toLocaleString()}
                      </Typography>
                    ) : null}
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <TableCoinId state={coinId} />
              </Grid>

              <Grid
                item
                xs={12}
                sx={design}
                justifyContent="space-between"
                my={5}>
                <Box>
                  <>
                    <Typography variant="h5" color={colors.grey.dark}>
                      24 Hour Low
                    </Typography>
                    {coinId.market_data?.low_24h ? (
                      <Typography variant="p" color={colors.grey.main}>
                        ${coinId.market_data.low_24h.usd.toLocaleString()}
                      </Typography>
                    ) : null}
                  </>
                  <>
                    <Typography variant="h5" color={colors.grey.dark} mt={3}>
                      24 Hour High
                    </Typography>
                    {coinId.market_data?.high_24h ? (
                      <Typography variant="p" color={colors.grey.main}>
                        ${coinId.market_data.high_24h.usd.toLocaleString()}
                      </Typography>
                    ) : null}{" "}
                  </>
                </Box>
                <Box className="right">
                  <>
                    <Typography variant="h5" color={colors.grey.dark}>
                      Market Cap
                    </Typography>
                    {coinId.market_data?.market_cap ? (
                      <Typography variant="p" color={colors.grey.main}>
                        ${coinId.market_data.market_cap.usd.toLocaleString()}
                      </Typography>
                    ) : null}
                  </>
                  <>
                    <Typography variant="h5" color={colors.grey.dark} mt={3}>
                      Circulating Supply
                    </Typography>
                    {coinId.market_data ? (
                      <Typography variant="p" color={colors.grey.main}>
                        {coinId.market_data.circulating_supply}
                      </Typography>
                    ) : null}
                  </>
                </Box>
              </Grid>

              <Grid item xs={12} my={5}>
                {ada !== undefined ? (
                  <Bar
                    data={{
                      labels: ada.slice(0, 11).map((item) => item.market.name),
                      datasets: [
                        {
                          data: ada.slice(0, 11).map((item) => item.volume),
                          backgroundColor: "rgba(255, 99, 132, 0.5)",
                        },
                      ],
                    }}
                    options={{
                      plugins: {
                        legend: false,
                      },
                      elements: {
                        point: {
                          radius: 1,
                        },
                      },
                    }}
                  />
                ) : null}
              </Grid>

              <Grid item mb={5}>
                <Link to={"/landing"} style={{ textDecoration: "none" }}>
                  <Button variant="contained" color="warning">
                    {t("back")}
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </div>
      )}
    </>
  );
};

export default CoinID;

import {
  Grid,
  Typography,
  useTheme,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Button,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { DasboardData } from "../../../../../../context/Dahsboard";
import { HistoricalChart } from "../../../../../../services/api";
import { Header } from "../Header";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useTranslation } from "react-i18next";
import DetailCoin from "./DetailCoin";
Chart.register(CategoryScale);

export const ChartTab = () => {
  const { coins, setLoading } = useContext(DasboardData);
  const [allData, setAllData] = useState("");
  const [chart, setChart] = useState([]);
  const [days, setDays] = useState(1);
  const { t } = useTranslation();
  const theme = useTheme();
  const colors = theme.palette;
  const showSingelData = coins.filter((item) => item.name === allData);

  const id = coins
    .filter((item) => item.name === allData)
    .map((item) => item.id);

  const fetchData = async () => {
    const { data } = await HistoricalChart(id, days);
    setLoading(true);
    setChart(data.prices);
  };

  useEffect(() => {
    if (allData !== "") {
      fetchData();
    }
  }, [allData, days]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const chartDay = [
    {
      label: t("24"),
      value: 1,
    },
    {
      label: t("30"),
      value: 30,
    },
    {
      label: t("3"),
      value: 90,
    },
    {
      label: t("1"),
      value: 365,
    },
  ];

  const demo = {
    "& .MuiSelect-select": {
      color: colors.grey.light,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      px: "10px",
    },
    "& svg": {
      color: colors.grey.light,
    },
  };
  const itemSelect = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  return (
    <>
      <Header title="chart" subtitle="cryptocurrencies" />
      <Grid container>
        <Grid item xs={12} lg={9} sx={{ display: { xs: "none", lg: "flex" } }}>
          {showSingelData.map((item) => (
            <DetailCoin key={item.id} coin={item} />
          ))}
        </Grid>

        <Grid item xs={12} lg={3}>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-label">
              {t("yourCurrency")}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Please Selected Currency"
              sx={demo}
              value={allData}
              onChange={(e) => setAllData(e.target.value)}>
              {coins.map((item) => (
                <MenuItem key={item.id} value={item.name} sx={itemSelect}>
                  <Typography variant="h5">{item.name}</Typography>
                  <img src={item.image} width="40px" alt={item.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid
          item
          xs={12}
          lg={9}
          sx={{ display: { xs: "flex", lg: "none" }, my: "20px" }}>
          {showSingelData.map((item) => (
            <DetailCoin key={item.id} coin={item} />
          ))}
        </Grid>

        <Grid item xs={12}>
          <Line
            data={{
              labels: chart.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),
              datasets: [
                {
                  data: chart.map((coin) => coin[1]),
                  borderColor: "#EEBC1D",
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
          <div
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "space-around",
              width: "100%",
            }}>
            {chartDay.map((day) => (
              <Button
                variant="contained"
                key={day.value}
                onClick={() => {
                  setDays(day.value);
                }}
                selected={day.value === days}>
                {day.label}
              </Button>
            ))}
          </div>
        </Grid>

      </Grid>
    </>
  );
};

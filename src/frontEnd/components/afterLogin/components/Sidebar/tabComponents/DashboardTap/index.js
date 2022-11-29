import {
  Box,
  Grid,
  Typography,
  useTheme,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Button,
  CircularProgress,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { DasboardData } from "../../../../../../context/Dahsboard";
import { HistoricalChart } from "../../../../../../services/api";
import { Header } from "../Header";
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);


export const chartDays = [
  {
    label: "24 Hours",
    value: 1,
  },
  {
    label: "30 Days",
    value: 30,
  },
  {
    label: "3 Months",
    value: 90,
  },
  {
    label: "1 Year",
    value: 365,
  },
];

export const DashboardTap = () => {
  const { coins, setLoading } = useContext(DasboardData);
  const [allData, setAllData] = useState("");
  const [chart, setChart] = useState([]);
  const [stop, setStop] = useState(false);
  const [days, setDays] = useState(1);

  const id = coins
    .filter((item) => item.name === allData)
    .map((item) => item.id);

  const fetchData = async () => {
    const { data } = await HistoricalChart(id, days);
    setStop(true);
    setChart(data.prices);
  };

  useEffect(() => {
    if (allData !== "") {
      fetchData();
    }
  }, [allData]);

  const demo = {
    "& .MuiSelect-select": {
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    "& svg": {
      color: "#fff",
    },
  };


  return (
    <>
      <Header title="dashboard" subtitle="dashboardDec" />

      <FormControl variant="standard" fullWidth>
        <InputLabel id="demo-simple-select-label">
          Please Selected Currency
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Please Selected Currency"
          sx={demo}
          value={allData}
          onChange={(e) => setAllData(e.target.value)}>
          {coins.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              <img src={item.image} width="40px" alt={item.name} />
              <Typography variant="h5">{item.name}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>

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
                label: `Price ( Past ${days} Days ) in `,
                borderColor: "#EEBC1D",
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />

      {/* {coin.map((item) => (
        <div key={item.id}>
          <img src={item.image} width="40px" alt={item.name} />
          <Typography variant="h5">{item.name}</Typography>
        </div>
      ))} */}
    </>
  );
};

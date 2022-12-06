import React, { useContext } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { DasboardData } from "../../../../../../../context/Dahsboard";
import { Box } from "@mui/material";
Chart.register(CategoryScale);

export const DoughnutChart = () => {
  const { coins } = useContext(DasboardData);

  const labels = coins.slice(0, 10).map((item) => item.name);

  const data = {
    labels,
    datasets: [
      {
        data: coins.slice(0, 10).map((item) => item.market_cap),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box width="400px">
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              position: "right",
            },
          },
        }}
      />
    </Box>
  );
};

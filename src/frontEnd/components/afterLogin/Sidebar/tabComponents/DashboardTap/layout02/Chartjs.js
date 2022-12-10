import React, { useContext } from "react";
import { DasboardData } from "frontEnd/context/Dahsboard";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
Chart.register(CategoryScale);

const Chartjs = () => {
  const { coins } = useContext(DasboardData);

  return (
    <div style={{width:"100%"}}>
      <Line
        data={{
          labels: coins.map((coin) => coin.name),
          datasets: [
            {
              data: coins.map((coin) => coin.price_change_percentage_24h),
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
    </div>
  );
};

export default Chartjs;

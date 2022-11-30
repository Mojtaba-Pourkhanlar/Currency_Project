import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { DasboardData } from "../../../../../../context/Dahsboard";
import { HistoricalChart } from "../../../../../../services/api";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const MarketChart = ({ id, itemColor }) => {
  const { setLoading } = useContext(DasboardData);
  const [coinSing, setCoinSing] = useState("");

  const fetchData = async () => {
    const { data } = await HistoricalChart(id, 7);
    setLoading(true);
    setCoinSing(data.market_caps);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const color = itemColor > 0 ? "#00cc00" : "#ff2626";

  return (
    <>
      {coinSing !== "" && (
        <div style={{ height: "50px", width: "100%" }}>
          <Line
            data={{
              labels: coinSing.map((item) => item[0]),
              datasets: [
                {
                  data: coinSing.map((item) => item[1]),
                  borderColor: color,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: false,
              },
              scales: {
                y: {
                  display: false,
                },
                x: {
                  display: false,
                },
              },
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
        </div>
      )}
    </>
  );
};

export default MarketChart;

import React, { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, } from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Title, Tooltip, Legend, Filler);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    tension: number;
  }[];
}

const GasChart = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3008/api/sensors");
        const sensors = response.data;

        const gases = sensors.map((sensor: any) => ({
          time: new Date(sensor.timestamp).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          co2: sensor.data.gases.co2,
          nh3: sensor.data.gases.nh3,
          nox: sensor.data.gases.nox,
        }));

        const data = {
          labels: gases.map((item: any) => item.time),
          datasets: [
            {
              label: "CO2 (ppm)",
              data: gases.map((item: any) => item.co2),
              borderColor: "rgba(255, 99, 132, 1)",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              tension: 0.4,
            },
            {
              label: "NH3 (ppm)",
              data: gases.map((item: any) => item.nh3),
              borderColor: "rgba(54, 162, 235, 1)",
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              tension: 0.4,
            },
            {
              label: "NOx (ppm)",
              data: gases.map((item: any) => item.nox),
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              tension: 0.4,
            },
          ],
        };

        console.log("Dados do gráfico:", data);
        setChartData(data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
        setError("Erro ao buscar dados.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Carregando dados...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ width: "550px", }}>
      {chartData && <Line data={chartData} />}
    </div>
  );
};

export default GasChart;
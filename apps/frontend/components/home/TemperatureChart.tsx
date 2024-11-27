import React, { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

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

const TemperatureHumidityChart = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3008/api/sensors");
        const sensors = response.data;

        const climateData = sensors.map((sensor: any) => ({
          time: new Date(sensor.timestamp).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temperature: sensor?.data?.temperature,
          humidity: sensor?.data?.humidity,
        }));
        console.log(climateData);

        const data = {
          labels: climateData.map((item: any) => item.time),
          datasets: [
            {
              label: "Temperatura (°C)",
              data: climateData.map((item: any) => item.temperature),
              borderColor: "rgba(255, 159, 64, 1)",
              backgroundColor: "rgba(255, 159, 64, 0.2)",
              tension: 0.4,
            },
            {
              label: "Umidade (%)",
              data: climateData.map((item: any) => item.humidity),
              borderColor: "rgba(153, 102, 255, 1)",
              backgroundColor: "rgba(153, 102, 255, 0.2)",
              tension: 0.4,
            },
          ],
        };

        console.log("Dados do gráfico de temperatura e umidade:", data);
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
    <div style={{ width: "550px" }}>
      {chartData && <Line data={chartData} />}
    </div>
  );
};

export default TemperatureHumidityChart;

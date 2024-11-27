import React, { useState, useEffect } from "react";
import axios from "axios";
import { Radar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    RadialLinearScale,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    RadialLinearScale
);

interface SensorStats {
    averageTemperature: number;
    averageHumidity: number;
    averageAQI: number;
}

const RadarChart = ({ sensorId }: any) => {
    const [stats, setStats] = useState<SensorStats | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchSensorStats = async () => {
        try {
            const response = await axios.get(`http://localhost:3008/api/sensors/${sensorId}/stats`);
            setStats(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Erro ao buscar as estatísticas:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSensorStats();
    }, [sensorId]);

    if (loading) {
        return <div>Carregando dados...</div>;
    }

    if (!stats) {
        return <div>Erro ao carregar dados do sensor.</div>;
    }

    const data = {
        labels: ["AQI", "Umidade (%)", "Temperatura (°C)"],
        datasets: [
            {
                label: "Estatísticas do Sensor",
                data: [stats.averageAQI, stats.averageHumidity, stats.averageTemperature],
                fill: true,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgb(255, 99, 132)",
                pointBackgroundColor: "rgb(255, 99, 132)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(255, 99, 132)",
            },
        ],
    };

    const options = {
        scales: {
            r: {
                beginAtZero: true,
                angleLines: {
                    display: true,
                },
                ticks: {
                    min: 0,
                    max: 200,
                    stepSize: 10,
                },
            },
        },
    };


    return (
        <div style={{ width: "100%" }}>
            <Radar data={data} options={options} />
        </div>
    );
};

export default RadarChart;

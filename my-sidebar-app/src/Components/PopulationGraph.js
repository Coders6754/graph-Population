import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './PopulationGraph.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Population',
        data: [],
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Light blue
        borderColor: 'rgba(54, 162, 235, 1)', // Darker blue
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const data = result.data.data;
        const labels = data.map(item => item.Nation);
        const populationValues = data.map(item => item.Population);
        // Generate random colors for each bar
        const backgroundColors = data.map(() => 'rgba(0, 0, 139, 0.2)');
        const borderColors = data.map(() => 'rgba(255, 165, 0, 1)');

        setPopulationData({
          labels: labels,
          datasets: [
            {
              label: 'Population',
              data: populationValues,
              backgroundColor: backgroundColors,
              borderColor: borderColors,
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching population data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="graph-container">
      <div className="canvas-container">
        <Bar
          data={populationData}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Population',
                  color: '#00ff00',
                },
                ticks: {
                  color: '#00ff00',
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)', // Light white grid lines for visibility
                  display: true, // Ensure grid lines are displayed
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Nation',
                  color: '#00ff00',
                },
                ticks: {
                  color: '#00ff00',
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)', // Light white grid lines for visibility
                  display: true, // Ensure grid lines are displayed
                }
              },
            },
            plugins: {
              legend: {
                display: true,
                position: 'top',
                labels: {
                  color: 'yellow',
                }
              },
            },
          }}


        />
      </div>
    </div>
  );


};

export default PopulationGraph;

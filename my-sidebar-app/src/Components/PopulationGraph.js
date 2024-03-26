import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

// Register the components we will be using
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function PopulationGraph() {
  const [populationData, setPopulationData] = useState({
    labels: [],
    datasets: [{
      label: 'Population',
      data: [],
      backgroundColor: 'red',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
      const labels = response.data.data.map(data => data.Nation);
      const data = response.data.data.map(data => data.Population);

      setPopulationData({
        labels: labels,
        datasets: [{
          label: 'Population',
          data: data,
          backgroundColor: 'grey',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      });
    };

    fetchData();
  }, []);

  return (
    <Bar
      data={populationData}
      options={{
        plugins: {
          title: {
            display: true,
            text: 'Population Data',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'bottom',
          },
        },
        scales: {
          x: { // defining it as a category axis
            type: 'category',
          },
          y: { // defining it as a linear axis
            type: 'linear',
          },
        },
      }}
    />
  );
}

export default PopulationGraph;

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

  const [sourceInfo, setSourceInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const data = result.data.data;
        const labels = data.map(item => `${item.Nation} (${item.Year})`);
        const populationValues = data.map(item => item.Population);

        setPopulationData({
          labels: labels,
          datasets: [
            {
              label: 'Population',
              data: populationValues,
              backgroundColor: 'rgba(0, 0, 139, 0.2)',
              borderColor: 'rgba(255, 165, 0, 1)',
              borderWidth: 1,
            },
          ],
        });

        // Set source information
        const source = result.data.source[0].annotations;
        setSourceInfo({
          sourceName: source.source_name,
          sourceDescription: source.source_description,
          datasetName: source.dataset_name,
          topic: source.topic,
          subtopic: source.subtopic,
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
            maintainAspectRatio: false,
            responsive: true,
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
                  color: 'rgba(255, 255, 255, 0.1)',
                  display: true,
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
                  color: 'rgba(255, 255, 255, 0.1)',
                  display: true,
                }
              },
            },
            plugins: {
              legend: {
                display: true,
                position: 'top',
                labels: {
                  color: 'yellow',
                  font: {
                    size: window.innerWidth < 500 ? 10 : 12,
                  },
                }
              },
            },
          }}
        />
      </div>
      {/* Displaying source information */}
      <div className="source-info">
        <p><strong>Source Name:</strong> {sourceInfo.sourceName}</p>
        <p><strong>Description:</strong> {sourceInfo.sourceDescription}</p>
        <p><strong>Dataset Name:</strong> {sourceInfo.datasetName}</p>
        <p><strong>Topic:</strong> {sourceInfo.topic}</p>
        <p><strong>Subtopic:</strong> {sourceInfo.subtopic}</p>
      </div>
    </div>
  );
};

export default PopulationGraph;

import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Polar Area Chart',
    },
  },
};
export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

export function PolarAreaChart() {
  const [data2, setdata2] = useState([]);
  const [data3, setdata3] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      var d1 = [
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
      ];
      var d2 = [
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
      ];
      var d3 = [
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
      ];
      //setdata1(d1);
      setdata2(d2);
      //  setdata3(d3);
      //console.log('This will run every second!');
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <PolarArea
      options={options}
      data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: data2, // [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderWidth: 1,
          },
        ],
      }}
    />
  );
}

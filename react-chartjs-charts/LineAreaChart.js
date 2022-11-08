import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
//import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Line Area Chart',
    },
  },
};

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'Sepember',
  'December',
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 1',
      data: [10, 1, 120, 30, 4, 5, 78],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function LineAreaChart() {
  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState([]);

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
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
      ];

      setdata1(d1);

      //console.log('This will run every second!');
    }, 1500);
    return () => clearInterval(interval);
  });
  return (
    <Line
      options={options}
      data={{
        labels,
        datasets: [
          {
            fill: true,
            label: 'Dataset 1',
            data: data1, // [10, 1, 120, 30, 4, 5, 78],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      }}
    />
  );
}

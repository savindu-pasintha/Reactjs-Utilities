import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
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
      text: 'Radar Chart',
    },
  },
};
export const data = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

export function RadarChart() {
  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState([]);
  const [data3, setdata3] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      var d1 = [
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
      ];
      var d2 = [
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
      ];
      var d3 = [
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100), Math.random(100),
      ];
      setdata1(d1);
      setdata2(d2);
      setdata3(d3);
      //console.log('This will run every second!');
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <Radar
      options={options}
      data={{
        labels: [
          'Thing 1',
          'Thing 2',
          'Thing 3',
          'Thing 4',
          'Thing 5',
          'Thing 6',
        ],
        datasets: [
          {
            label: '# of Votes',
            data: data1, //[2, 9, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      }}
    />
  );
}

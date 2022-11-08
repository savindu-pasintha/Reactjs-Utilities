import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
//import faker from 'faker';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Scatter Chart',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  datasets: [
    {
      label: 'A dataset',
      data: [[1, 2], [19, 45], [5, 5], [55, 44], [25, 5], 2, [60, 60]], //[x1,y1]
      backgroundColor: 'red',
    },
    {
      label: 'B dataset',
      data: [[10, 2], [19, 85], [5, 5], [55, 44], [25, 5], 2, [50, 60]], //[x1,y1]
      backgroundColor: 'blue',
    },
  ],
};

export function ScatterChart() {
  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState([]);
  const [data3, setdata3] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      var d1 = [
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
      ];
      var d2 = [
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
      ];
      var d3 = [
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100), Math.random(100)],
      ];
      setdata1(d1);
      setdata2(d2);
      setdata3(d3);
      //console.log('This will run every second!');
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <Scatter
      options={options}
      data={{
        datasets: [
          {
            label: 'A dataset',
            data: data2, //[[1, 2], [19, 45], [5, 5], [55, 44], [25, 5], 2, [60, 60]], //[x1,y1]
            backgroundColor: 'red',
          },
          {
            label: 'B dataset',
            data: data3, // [[10, 2], [19, 85], [5, 5], [55, 44], [25, 5], 2, [50, 60]], //[x1,y1]
            backgroundColor: 'blue',
          },
          {
            label: 'C dataset',
            data: data1, // [[10, 2], [19, 85], [5, 5], [55, 44], [25, 5], 2, [50, 60]], //[x1,y1]
            backgroundColor: 'yellow',
          },
        ],
      }}
    />
  );
}

import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
//import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Horizontal Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [[1], [5], [10, 20], [42], [25], [40], [4], [8]],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [[1], [2], [3], [4], [5, 8], [32], [7], [2]],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function HorizontalBarChart() {
  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      var d1 = [
        [Math.random(100)],
        [Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100)],
        [Math.random(100)],
        [Math.random(100)],
      ];
      var d2 = [
        [Math.random(100)],
        [Math.random(100)],
        [Math.random(100)],
        [Math.random(100)],
        [Math.random(100), Math.random(100)],
        [Math.random(100)],
        [Math.random(100)],
        [Math.random(100)],
      ];
      setdata1(d1);
      setdata2(d2);
      //console.log('This will run every second!');
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <Bar
      options={options}
      data={{
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: data1,
            //data: [[1], [5], [10, 20], [42], [25], [40], [4], [8]],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: data2,
            //data: [[1], [2], [3], [4], [5, 8], [32], [7], [2]],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      }}
    />
  );
}

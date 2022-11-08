import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
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
      text: 'Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [0, 10, 20, 30, 50, 60, 70, 80],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [5, 10, 25, 35, 55, 65, 75, 90],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Dataset 3',
      data: [50, [20], 22, 38, 85, 65, 45, 100],
      borderColor: 'rgb(0, 12, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function LineChart() {
  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState([]);
  const [data3, setdata3] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      var d1 = [
        Math.random(100),
        Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),]
      ;
      var d2 = [
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
      ];
      var d3 = [
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100), Math.random(100),
        Math.random(100),
        Math.random(100),
        Math.random(100),
      ];
      setdata1(d1);
      setdata2(d2);
      setdata3(d3);
      //console.log('This will run every second!');
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <Line
      options={options}
      data={{
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: data1,
            //data: [0, 10, 20, 30, 50, 60, 70, 80],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: data2,
            // data:[5, 10, 25, 35, 55, 65, 75, 90],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'Dataset 3',
            data: data3,
            // data: [50, [20], 22, 38, 85, 65, 45, 100],
            borderColor: 'rgb(0, 12, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      }}
    />
  );
}

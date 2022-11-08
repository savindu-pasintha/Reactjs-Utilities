import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Pie Chart',
    },
  },
};

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [0, 10, 20, 30, 50, 60, 70, 80],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
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
    <Pie
      options={options}
      data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: data2, // [0, 10, 20, 30, 50, 60, 70, 80],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }}
    />
  );
}

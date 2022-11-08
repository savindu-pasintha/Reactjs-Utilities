import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
//import faker from 'faker';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Multi Type Chart',
        },
    },

};
export const data = {
    labels,
    datasets: [
        {
            type: 'line',
            label: 'Dataset 1',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            fill: false,
            data: [[0, 2], [5, 8], [20, 2], [30, 6], [5, 80], [99, 6], [68, 56], [0, 9]],
        },
        {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: 'rgb(75, 192, 192)',
            data: [0, 10, 20, 30, 50, 60, 70, 80],
            borderColor: 'white',
            borderWidth: 2,
        },
        {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: 'rgb(53, 162, 235)',
            data: [0, 100, 25, 30, 50, 80, 70, 80],
        },
    ],
};

export function MultiTypeChart() {
    return <Chart options={options} type='bar' data={data} />;
}

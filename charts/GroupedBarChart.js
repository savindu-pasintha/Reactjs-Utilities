import React from 'react';
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
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Grouped Bar Chart',
        },
    },
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [[30], [5], [10, 20], [42], [25], [40], [4], [8]],
            backgroundColor: 'rgb(255, 99, 132)',
            stack: 'Stack 0',
        },
        {
            label: 'Dataset 2',
            data: [[20], [5], [10, 20], [42], [25], [40], [4], [8]],
            backgroundColor: 'rgb(75, 192, 192)',
            stack: 'Stack 0',
        },
        {
            label: 'Dataset 3',
            data: [[10], [2], [3], [4], [5, 8], [32], [7], [2]],
            backgroundColor: 'rgb(53, 162, 235)',
            stack: 'Stack 1',
        },
    ],
};


export default function GroupedBarChart() {
    return (
        <Bar options={options} data={data} />
    )
}

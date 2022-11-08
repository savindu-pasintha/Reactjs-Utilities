import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
//import faker from 'faker';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Bubble Chart',
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
            label: 'Red dataset',
            data: [[10, 2, 10], [19, 85], [5, 5], [55, 44], [25, 5], 2, [50, 60]],//[x1,y1,size==r1]
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Blue dataset',
            data: [[1, 2], [19, 45], [5, 5], [55, 44, 40], [25, 5], [45, 45, 10], [60, 60]],//[x1,y1,size==r1]
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export function BubbleChart() {
    return <Bubble options={options} data={data} />;
}

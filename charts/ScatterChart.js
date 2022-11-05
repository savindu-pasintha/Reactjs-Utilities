import React from 'react';
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
            text: 'Chart.js  Scatter Chart',
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
            data: [[1, 2], [19, 45], [5, 5], [55, 44], [25, 5], 2, [60, 60]],//[x1,y1]
            backgroundColor: 'red',
        },
        {
            label: 'B dataset',
            data: [[10, 2], [19, 85], [5, 5], [55, 44], [25, 5], 2, [50, 60]],//[x1,y1]
            backgroundColor: 'blue',
        },


    ],
};

export function ScatterChart() {
    return <Scatter options={options} data={data} />;
}

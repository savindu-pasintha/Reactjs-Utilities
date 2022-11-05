import React from 'react'
import VerticalBarChart from './VerticalBarChart'
import HorizontalBarChart from './HorizontalBarChart'
import StackedBarChart from './StackedBarChart'
import GroupedBarChart from './GroupedBarChart'
import { LineAreaChart } from './LineAreaChart'
import { LineChart } from './LineChart'
import { MultiAxisLineChart } from './MultiAxisLineChart'
import { PieChart } from './PieChart'
import { DoughnutChart } from './DoughnutChart'
import { PolarAreaChart } from './PolarAreaChart'
import { RadarChart } from './RadarChart'
import { ScatterChart } from './ScatterChart'
import { BubbleChart } from './BubbleCharts'
import { MultiTypeChart } from './MultiTypeChart'
import { ChartEventAccess } from './ChartEventAccess'

export default function Home() {
    return (
        <div>
            <VerticalBarChart />
            <HorizontalBarChart />
            <StackedBarChart />
            <GroupedBarChart />
            <LineAreaChart />
            <div style={{ width: 500 }}>
                <LineChart />
            </div>
            <MultiAxisLineChart />
            <div style={{ width: 600, padding: 10, margin: "auto" }}>
                <PieChart />
            </div>
            <div style={{ width: 700, padding: 10, margin: "auto" }}>
                <DoughnutChart />
            </div>
            <div style={{ width: 800, padding: 10, margin: "auto" }}>
                <PolarAreaChart />
            </div>
            <div style={{ width: 700, padding: 10, margin: "auto" }}>
                <RadarChart />
            </div>
            <div style={{ width: 800, padding: 10, margin: "auto" }}>
                <ScatterChart />
            </div>
            <BubbleChart />
            <MultiTypeChart />
            <ChartEventAccess />
        </div>
    )
}

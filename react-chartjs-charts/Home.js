import React from 'react';
import VerticalBarChart from './VerticalBarChart';
import HorizontalBarChart from './HorizontalBarChart';
import StackedBarChart from './StackedBarChart';
import GroupedBarChart from './GroupedBarChart';
import { LineAreaChart } from './LineAreaChart';
import { LineChart } from './LineChart';
import { MultiAxisLineChart } from './MultiAxisLineChart';
import { PieChart } from './PieChart';
import { DoughnutChart } from './DoughnutChart';
import { PolarAreaChart } from './PolarAreaChart';
import { RadarChart } from './RadarChart';
import { ScatterChart } from './ScatterChart';
import { BubbleChart } from './BubbleCharts';
import { MultiTypeChart } from './MultiTypeChart';
import { ChartEventAccess } from './ChartEventAccess';

export default function Home() {
  return (
    <div>
      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <VerticalBarChart />
        </div>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <HorizontalBarChart />
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <StackedBarChart />
        </div>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <GroupedBarChart />
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <LineAreaChart />
        </div>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <LineChart />
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <PieChart />
        </div>
        <div style={{ width: 700, padding: 10, margin: 'auto' }}>
          <DoughnutChart />
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <PolarAreaChart />
        </div>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <RadarChart />
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <BubbleChart />
        </div>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <ScatterChart />
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <MultiTypeChart />
        </div>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <ChartEventAccess />
        </div>
      </div>
      <MultiAxisLineChart />
    </div>
  );
}

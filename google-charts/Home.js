import React from 'react';
import { AreaChart } from './AreaChart';
import { BarChart } from './BarChart';
import { BarChartWithMultipleSeries } from './BarChartWithMultipleSeries';
import { BubbleChart } from './BubbleChart';
import { CalenderChart } from './CalenderChart';
import { CalenderWithNegativeValuesChart } from './CalenderWithNegativeValuesChart';
import { CandlestickChart } from './CandlestickChart';
import { ColoredByBubbleChart } from './ColoredByBubbleChart';
import { CustomizableBarColors } from './CustomizablaBarColors';
import { CustomLabelingBubbleChart } from './CustomLabelingBubbleChart';
import { DifferentBarsChart } from './DifferentBarChart';
import { DifferentColumnChart } from './DifferentColumnChart';
import { HorizontalBarChart } from './HorizontalBarChart';
import { LabelingBarChart } from './LabelingBarChart';
import { PercentStakingChart } from './PercentStakingChart';
import { StakingAreaChart } from './SatakingAreaChart';
import { StackBarChartWithMultipleSeries } from './StackBarChartWithMultipleSeries';
import { WaterfallCandlestickChart } from './WaterfallCandelistickChart';

export default function Home() {
  return (
    <div>
      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <AreaChart />
        </div>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <BarChart />
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <BarChartWithMultipleSeries />
        </div>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <BubbleChart />
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <CalenderChart />
        </div>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <CandlestickChart />
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <StakingAreaChart />
        </div>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <PercentStakingChart />
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <HorizontalBarChart />
        </div>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <CustomizableBarColors />
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <DifferentBarsChart />
        </div>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <LabelingBarChart />
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <StackBarChartWithMultipleSeries />
        </div>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <ColoredByBubbleChart />
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <CustomLabelingBubbleChart />
        </div>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <CalenderWithNegativeValuesChart />
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <WaterfallCandlestickChart />
        </div>
        <div style={{ width: '50%', padding: 10, margin: 'auto' }}>
          <DifferentColumnChart />
        </div>
      </div>
    </div>
  );
}

'use client';

import * as React from 'react';
import { IconTrendingUp } from '@tabler/icons-react';
import { Label, Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { pieChartData, areaChartData, totalTokensSum } from '@/constants/data';

const chartConfig = {
  earnings: {
    label: 'Earnings Breakdown'
  },
  ...Object.fromEntries(
    pieChartData.map((item) => [
      item.field,
      { label: item.label, color: 'var(--primary)' }
    ])
  )
} satisfies ChartConfig;

export function PieGraph() {
  const dataTypeWithMaxEarnedTokens = pieChartData.reduce((max, item) =>
    item.earned_tokens > max.earned_tokens ? item : max
  );
  return (
    <Card className='@container/card'>
      <CardHeader>
        <CardTitle>Earnings Breakdown</CardTitle>
        <CardDescription>
          <span className='hidden @[540px]/card:block'>
            Distribution of your total earnings by data type
          </span>
          <span className='@[540px]/card:hidden'>
            Distribution of your total earnings by data type
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className='px-2 pt-4 sm:px-6 sm:pt-6'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square h-[250px]'
        >
          <PieChart>
            <defs>
              {pieChartData
                .map((dataType) => dataType.field)
                .map((dataTypeField, index) => (
                  <linearGradient
                    key={dataTypeField}
                    id={`fill${dataTypeField}`}
                    x1='0'
                    y1='0'
                    x2='0'
                    y2='1'
                  >
                    <stop
                      offset='0%'
                      stopColor='var(--primary)'
                      stopOpacity={1 - index * 0.15}
                    />
                    <stop
                      offset='100%'
                      stopColor='var(--primary)'
                      stopOpacity={0.8 - index * 0.15}
                    />
                  </linearGradient>
                ))}
            </defs>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={pieChartData.map((item) => ({
                ...item,
                fill: `url(#fill${item.field})`
              }))}
              dataKey='earned_tokens'
              nameKey='field'
              innerRadius={60}
              strokeWidth={2}
              stroke='var(--background)'
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-3xl font-bold'
                        >
                          {totalTokensSum.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground text-sm'
                        >
                          Total earnings
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm'>
        <div className='flex items-center gap-2 leading-none font-medium'>
          {`${dataTypeWithMaxEarnedTokens.label} leads with ${((dataTypeWithMaxEarnedTokens.earned_tokens / totalTokensSum) * 100).toFixed(1)}% earnings share`}
          <IconTrendingUp className='h-4 w-4' />
        </div>
        <div className='text-muted-foreground leading-none'>
          {`Based on data from ${`${areaChartData[0].month} ${areaChartData[0].year} - ${areaChartData[areaChartData.length - 1].month} ${areaChartData[areaChartData.length - 1].year}`}`}
        </div>
      </CardFooter>
    </Card>
  );
}

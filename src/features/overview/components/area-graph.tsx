'use client';

import { IconTrendingUp } from '@tabler/icons-react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

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
import { areaChartData } from '@/constants/data';

const chartConfig = {
  earnings: {
    label: 'Earnings'
  },
  commercial: {
    label: 'Commercial',
    color: 'var(--primary)'
  },
  public_good: {
    label: 'Public Good',
    color: 'var(--primary)'
  }
} satisfies ChartConfig;

export function AreaGraph() {
  return (
    <Card className='@container/card'>
      <CardHeader>
        <CardTitle>Public Good vs. Commercial Earnings</CardTitle>
        <CardDescription>
          Compare your earnings from public good projects and commercial data
          for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className='px-2 pt-4 sm:px-6 sm:pt-6'>
        <ChartContainer
          config={chartConfig}
          className='aspect-auto h-[250px] w-full'
        >
          <AreaChart
            data={areaChartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <defs>
              <linearGradient id='fillDesktop' x1='0' y1='0' x2='0' y2='1'>
                <stop
                  offset='5%'
                  stopColor='var(--color-commercial)'
                  stopOpacity={1.0}
                />
                <stop
                  offset='95%'
                  stopColor='var(--color-commercial)'
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id='fillMobile' x1='0' y1='0' x2='0' y2='1'>
                <stop
                  offset='5%'
                  stopColor='var(--color-public_good)'
                  stopOpacity={0.8}
                />
                <stop
                  offset='95%'
                  stopColor='var(--color-public_good)'
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='dot' reverseTooltip />}
            />
            <Area
              dataKey='public_good'
              type='natural'
              fill='url(#fillMobile)'
              stroke='var(--color-public_good)'
              stackId='a'
            />
            <Area
              dataKey='commercial'
              type='natural'
              fill='url(#fillDesktop)'
              stroke='var(--color-commercial)'
              stackId='a'
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className='flex w-full items-start gap-2 text-sm'>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2 leading-none'>
              <span className='font-medium'>Commercial:</span> Trending up by
              31.8% this month <IconTrendingUp className='h-4 w-4' />
            </div>
            <div className='flex items-center gap-2 leading-none'>
              <span className='font-medium'>Public Good:</span> Trending up by
              60% this month <IconTrendingUp className='h-4 w-4' />
            </div>
            <div className='text-muted-foreground flex items-center gap-2 leading-none'>
              {`${areaChartData[0].month} ${areaChartData[0].year} - ${areaChartData[areaChartData.length - 1].month} ${areaChartData[areaChartData.length - 1].year}`}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

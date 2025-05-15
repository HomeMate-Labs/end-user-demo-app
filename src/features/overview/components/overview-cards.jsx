'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardFooter
} from '@/components/ui/card';
import { IconTrendingUp } from '@tabler/icons-react';
import { tokensBalance, totalTokensSum } from '@/constants/data';
export function OverviewCards() {
  return (
    <>
      <Card className='@container/card'>
        <CardHeader>
          <CardDescription>Token Balance</CardDescription>
          <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
            {`${tokensBalance} HMNT`}
          </CardTitle>
          <CardAction className='flex flex-col items-center'>
            <Badge variant='outline'>
              <IconTrendingUp />
              +12.5%
            </Badge>
            <Button variant='default' size='sm' className='mt-1.5'>
              Claim
            </Button>
          </CardAction>
        </CardHeader>
        <CardFooter className='flex-col items-start gap-1.5 text-sm'>
          <div className='line-clamp-1 flex gap-2 font-medium'>
            Unclaimed tokens
          </div>
          <div className='text-muted-foreground flex gap-2'>
            Trending up this month <IconTrendingUp className='size-4' />
          </div>
        </CardFooter>
      </Card>
      <Card className='@container/card'>
        <CardHeader>
          <CardDescription>Active Devices</CardDescription>
          <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
            5
          </CardTitle>
          <CardAction></CardAction>
        </CardHeader>
        <CardFooter className='flex-col items-start gap-1.5 text-sm'>
          <div className='line-clamp-1 flex gap-2 font-medium'>
            Sending data right now
          </div>
        </CardFooter>
      </Card>
      <Card className='@container/card'>
        <CardHeader>
          <CardDescription>Data Types</CardDescription>
          <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
            4
          </CardTitle>
        </CardHeader>
        <CardFooter className='flex-col items-start gap-1.5 text-sm'>
          <div className='line-clamp-1 flex gap-2 font-medium'>
            Types of data you&apos;re contributing
          </div>
        </CardFooter>
      </Card>
      <Card className='@container/card'>
        <CardHeader>
          <CardDescription>Total Earned</CardDescription>
          <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
            {`${totalTokensSum} HMNT`}
          </CardTitle>
        </CardHeader>
        <CardFooter className='flex-col items-start gap-1.5 text-sm'>
          <div className='line-clamp-1 flex gap-2 font-medium'>
            Minted since joining the platform
          </div>
        </CardFooter>
      </Card>
    </>
  );
}

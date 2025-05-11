'use client';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { recentDataTransactions } from '@/constants/data';

export function RecentTrans() {
  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-8 overflow-x-auto'>
          {recentDataTransactions.map((transaction, index) => (
            <div
              key={index}
              className='relative flex items-center justify-between pr-[20%]'
            >
              <div className='grow'>{transaction.transaction_id}</div>
              <div className='ml-auto font-medium'>{`${transaction.earned_tokens}HM`}</div>
              <div className='absolute right-0 ml-4 space-y-1'>
                <p className='text-muted-foreground text-sm'>
                  {transaction.time_ago}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

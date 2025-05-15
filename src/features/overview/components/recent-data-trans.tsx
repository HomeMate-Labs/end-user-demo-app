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
        <div className='flex flex-col space-y-8 overflow-x-auto'>
          {recentDataTransactions.map((transaction, index) => (
            <div key={index} className='flex items-center'>
              <div className='grow'>{transaction.transaction_id}</div>
              <div className='mr-1 ml-1 shrink-0 grow-0 basis-[15%] text-right font-medium'>{`+${transaction.earned_tokens}HMNT`}</div>
              <div className='mr-1 ml-1 shrink-0 grow-0 basis-[15%] space-y-1 text-right'>
                <p className='text-muted-foreground text-sm whitespace-nowrap'>
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

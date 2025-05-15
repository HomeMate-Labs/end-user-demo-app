'use client';
import { user } from '@/constants/data';
import { Icons } from '@/components/icons';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { withdrawalTransactions } from '@/constants/data';
export default function ProfileListing() {
  return (
    <div className='mx-auto mb-4 flex w-full max-w-[600px] flex-col items-center'>
      <div className='relative aspect-square h-[100px] w-[100px] overflow-hidden rounded-full'>
        <Image
          src='/images/hm_logo.jpg'
          alt='Profile'
          fill
          className='object-cover'
        />
      </div>
      <div className='mt-2 text-2xl font-bold'>{user.fullName}</div>
      <div className='mt-1 flex items-center font-mono text-lg'>
        <span className='text-center break-all'>{user.walletAddress}</span>
        <div
          className='relative ml-1 cursor-pointer'
          onClick={() => {
            navigator.clipboard.writeText(user.walletAddress).then(() => {
              const copyToClipboardTooltip = document.getElementById(
                'copy-clipboard-tooltip'
              );
              if (copyToClipboardTooltip) {
                copyToClipboardTooltip.classList.remove('opacity-0');
                copyToClipboardTooltip.classList.add('opacity-100');
                setTimeout(() => {
                  copyToClipboardTooltip.classList.add('opacity-0');
                  copyToClipboardTooltip.classList.remove('opacity-100');
                }, 1000);
              }
            });
          }}
        >
          <div
            id='copy-clipboard-tooltip'
            className='absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-100%] text-sm opacity-0 transition-opacity duration-300'
          >
            Copied!
          </div>
          <Icons.copy />
        </div>
      </div>
      <div className='mt-2 grid'>
        <Card className='overflow-x-auto'>
          <CardHeader>
            <CardTitle>Withdrawal history</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col space-y-8 overflow-x-auto'>
              {withdrawalTransactions.map((withdrawalTransaction, index) => (
                <div key={index} className='flex items-center'>
                  <div className='grow basis-[60%]'>
                    {withdrawalTransaction.transaction_id}
                  </div>
                  <div className='mr-1 ml-1 shrink-0 grow-0 basis-[15%] text-right font-medium'>{`-${withdrawalTransaction.withdrawn_tokens}HMNT`}</div>
                  <div className='mr-1 ml-1 shrink-0 grow-0 basis-[25%] space-y-1 text-right'>
                    <p className='text-muted-foreground text-sm whitespace-nowrap'>
                      {withdrawalTransaction.transaction_date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

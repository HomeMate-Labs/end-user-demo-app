'use client';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

export function OverviewCardsSkeleton() {
  return (
    <>
      {new Array(4).fill(null).map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <CardHeader>
              <Skeleton className='h-6 w-full' />
              <Skeleton className='h-6 w-full' />
              <CardContent>
                <Skeleton className='h-6 w-full' />
              </CardContent>
            </CardHeader>
          </CardHeader>
        </Card>
      ))}
    </>
  );
}

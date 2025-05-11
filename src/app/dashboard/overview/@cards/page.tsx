import { delay } from '@/constants/mock-api';
import { OverviewCards } from '@/features/overview/components/overview-cards';
import React from 'react';

export default async function OverviewCardsPage() {
  await delay(2000);
  return <OverviewCards />;
}

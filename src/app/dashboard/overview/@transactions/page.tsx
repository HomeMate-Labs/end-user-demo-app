import { delay } from '@/constants/mock-api';
import { RecentTrans } from '@/features/overview/components/recent-data-trans';

export default async function Transactions() {
  await delay(3000);
  return <RecentTrans />;
}

import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import ProfileListing from '@/features/profile/components/profile-listing';
export default function ProfilePage() {
  return (
    <PageContainer scrollable>
      <div className='flex flex-1 flex-col space-y-4'>
        <div className='flex items-start justify-between'>
          <Heading title='Account' description='' />
        </div>
        <Separator />
        <ProfileListing />
      </div>
    </PageContainer>
  );
}

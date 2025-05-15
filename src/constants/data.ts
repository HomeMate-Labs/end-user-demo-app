import { NavItem } from '@/types';

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['o', 'o'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Devices',
    url: '/dashboard/devices',
    icon: 'devices',
    shortcut: ['d', 'd'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Profile',
    url: '/dashboard/profile',
    icon: 'user2',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  }
];

interface User {
  imageUrl?: string;
  fullName?: string | null;
  emailAddresses: Array<{ emailAddress: string }>;
  walletAddress: string;
}

export const user: User = {
  imageUrl: '',
  fullName: 'Mislav Ivanda',
  emailAddresses: [{ emailAddress: 'mislavivanda454@gmail.com' }],
  walletAddress: '2Mvbrxj7LYZNmEtEGxfn7QGLNchcfmZCiSKk6t7R1UrX'
};

interface DailyEarningsData {
  date: string;
  commercial: number;
  public_good: number;
}
export const last6MonthsEarningsData: DailyEarningsData[] = [
  {
    date: '2024-11-17',
    commercial: 16,
    public_good: 17
  },
  {
    date: '2024-11-18',
    commercial: 16,
    public_good: 17
  },
  {
    date: '2024-11-19',
    commercial: 16,
    public_good: 12
  },
  {
    date: '2024-11-20',
    commercial: 17,
    public_good: 12
  },
  {
    date: '2024-11-21',
    commercial: 19,
    public_good: 17
  },
  {
    date: '2024-11-22',
    commercial: 15,
    public_good: 14
  },
  {
    date: '2024-11-23',
    commercial: 20,
    public_good: 20
  },
  {
    date: '2024-11-24',
    commercial: 17,
    public_good: 20
  },
  {
    date: '2024-11-25',
    commercial: 18,
    public_good: 16
  },
  {
    date: '2024-11-26',
    commercial: 13,
    public_good: 18
  },
  {
    date: '2024-11-27',
    commercial: 15,
    public_good: 19
  },
  {
    date: '2024-11-28',
    commercial: 21,
    public_good: 19
  },
  {
    date: '2024-11-29',
    commercial: 21,
    public_good: 17
  },
  {
    date: '2024-11-30',
    commercial: 18,
    public_good: 17
  },
  {
    date: '2024-12-01',
    commercial: 16,
    public_good: 15
  },
  {
    date: '2024-12-02',
    commercial: 15,
    public_good: 16
  },
  {
    date: '2024-12-03',
    commercial: 15,
    public_good: 15
  },
  {
    date: '2024-12-04',
    commercial: 16,
    public_good: 14
  },
  {
    date: '2024-12-05',
    commercial: 22,
    public_good: 17
  },
  {
    date: '2024-12-06',
    commercial: 15,
    public_good: 21
  },
  {
    date: '2024-12-07',
    commercial: 15,
    public_good: 14
  },
  {
    date: '2024-12-08',
    commercial: 22,
    public_good: 15
  },
  {
    date: '2024-12-09',
    commercial: 15,
    public_good: 23
  },
  {
    date: '2024-12-10',
    commercial: 19,
    public_good: 14
  },
  {
    date: '2024-12-11',
    commercial: 18,
    public_good: 15
  },
  {
    date: '2024-12-12',
    commercial: 17,
    public_good: 16
  },
  {
    date: '2024-12-13',
    commercial: 18,
    public_good: 14
  },
  {
    date: '2024-12-14',
    commercial: 21,
    public_good: 17
  },
  {
    date: '2024-12-15',
    commercial: 19,
    public_good: 14
  },
  {
    date: '2024-12-16',
    commercial: 17,
    public_good: 14
  },
  {
    date: '2024-12-17',
    commercial: 13,
    public_good: 17
  },
  {
    date: '2024-12-18',
    commercial: 14,
    public_good: 12
  },
  {
    date: '2024-12-19',
    commercial: 13,
    public_good: 15
  },
  {
    date: '2024-12-20',
    commercial: 16,
    public_good: 13
  },
  {
    date: '2024-12-21',
    commercial: 20,
    public_good: 18
  },
  {
    date: '2024-12-22',
    commercial: 13,
    public_good: 19
  },
  {
    date: '2024-12-23',
    commercial: 15,
    public_good: 18
  },
  {
    date: '2024-12-24',
    commercial: 14,
    public_good: 14
  },
  {
    date: '2024-12-25',
    commercial: 17,
    public_good: 19
  },
  {
    date: '2024-12-26',
    commercial: 16,
    public_good: 18
  },
  {
    date: '2024-12-27',
    commercial: 16,
    public_good: 18
  },
  {
    date: '2024-12-28',
    commercial: 14,
    public_good: 15
  },
  {
    date: '2024-12-29',
    commercial: 14,
    public_good: 18
  },
  {
    date: '2024-12-30',
    commercial: 18,
    public_good: 17
  },
  {
    date: '2024-12-31',
    commercial: 19,
    public_good: 14
  },
  {
    date: '2025-01-01',
    commercial: 16,
    public_good: 12
  },
  {
    date: '2025-01-02',
    commercial: 17,
    public_good: 16
  },
  {
    date: '2025-01-03',
    commercial: 21,
    public_good: 15
  },
  {
    date: '2025-01-04',
    commercial: 19,
    public_good: 21
  },
  {
    date: '2025-01-05',
    commercial: 14,
    public_good: 17
  },
  {
    date: '2025-01-06',
    commercial: 18,
    public_good: 18
  },
  {
    date: '2025-01-07',
    commercial: 23,
    public_good: 15
  },
  {
    date: '2025-01-08',
    commercial: 20,
    public_good: 14
  },
  {
    date: '2025-01-09',
    commercial: 16,
    public_good: 16
  },
  {
    date: '2025-01-10',
    commercial: 14,
    public_good: 21
  },
  {
    date: '2025-01-11',
    commercial: 18,
    public_good: 15
  },
  {
    date: '2025-01-12',
    commercial: 17,
    public_good: 17
  },
  {
    date: '2025-01-13',
    commercial: 16,
    public_good: 20
  },
  {
    date: '2025-01-14',
    commercial: 16,
    public_good: 18
  },
  {
    date: '2025-01-15',
    commercial: 15,
    public_good: 12
  },
  {
    date: '2025-01-16',
    commercial: 12,
    public_good: 15
  },
  {
    date: '2025-01-17',
    commercial: 13,
    public_good: 19
  },
  {
    date: '2025-01-18',
    commercial: 13,
    public_good: 13
  },
  {
    date: '2025-01-19',
    commercial: 22,
    public_good: 15
  },
  {
    date: '2025-01-20',
    commercial: 12,
    public_good: 17
  },
  {
    date: '2025-01-21',
    commercial: 20,
    public_good: 16
  },
  {
    date: '2025-01-22',
    commercial: 20,
    public_good: 14
  },
  {
    date: '2025-01-23',
    commercial: 15,
    public_good: 19
  },
  {
    date: '2025-01-24',
    commercial: 13,
    public_good: 20
  },
  {
    date: '2025-01-25',
    commercial: 17,
    public_good: 19
  },
  {
    date: '2025-01-26',
    commercial: 17,
    public_good: 13
  },
  {
    date: '2025-01-27',
    commercial: 11,
    public_good: 16
  },
  {
    date: '2025-01-28',
    commercial: 20,
    public_good: 17
  },
  {
    date: '2025-01-29',
    commercial: 19,
    public_good: 14
  },
  {
    date: '2025-01-30',
    commercial: 12,
    public_good: 18
  },
  {
    date: '2025-01-31',
    commercial: 17,
    public_good: 15
  },
  {
    date: '2025-02-01',
    commercial: 13,
    public_good: 16
  },
  {
    date: '2025-02-02',
    commercial: 20,
    public_good: 20
  },
  {
    date: '2025-02-03',
    commercial: 18,
    public_good: 19
  },
  {
    date: '2025-02-04',
    commercial: 20,
    public_good: 20
  },
  {
    date: '2025-02-05',
    commercial: 23,
    public_good: 16
  },
  {
    date: '2025-02-06',
    commercial: 16,
    public_good: 14
  },
  {
    date: '2025-02-07',
    commercial: 11,
    public_good: 17
  },
  {
    date: '2025-02-08',
    commercial: 15,
    public_good: 17
  },
  {
    date: '2025-02-09',
    commercial: 17,
    public_good: 15
  },
  {
    date: '2025-02-10',
    commercial: 15,
    public_good: 19
  },
  {
    date: '2025-02-11',
    commercial: 22,
    public_good: 18
  },
  {
    date: '2025-02-12',
    commercial: 19,
    public_good: 21
  },
  {
    date: '2025-02-13',
    commercial: 14,
    public_good: 18
  },
  {
    date: '2025-02-14',
    commercial: 15,
    public_good: 19
  },
  {
    date: '2025-02-15',
    commercial: 17,
    public_good: 23
  },
  {
    date: '2025-02-16',
    commercial: 15,
    public_good: 18
  },
  {
    date: '2025-02-17',
    commercial: 21,
    public_good: 15
  },
  {
    date: '2025-02-18',
    commercial: 19,
    public_good: 19
  },
  {
    date: '2025-02-19',
    commercial: 21,
    public_good: 16
  },
  {
    date: '2025-02-20',
    commercial: 13,
    public_good: 15
  },
  {
    date: '2025-02-21',
    commercial: 22,
    public_good: 18
  },
  {
    date: '2025-02-22',
    commercial: 15,
    public_good: 13
  },
  {
    date: '2025-02-23',
    commercial: 22,
    public_good: 17
  },
  {
    date: '2025-02-24',
    commercial: 15,
    public_good: 13
  },
  {
    date: '2025-02-25',
    commercial: 14,
    public_good: 12
  },
  {
    date: '2025-02-26',
    commercial: 19,
    public_good: 20
  },
  {
    date: '2025-02-27',
    commercial: 17,
    public_good: 22
  },
  {
    date: '2025-02-28',
    commercial: 16,
    public_good: 21
  },
  {
    date: '2025-03-01',
    commercial: 11,
    public_good: 17
  },
  {
    date: '2025-03-02',
    commercial: 12,
    public_good: 18
  },
  {
    date: '2025-03-03',
    commercial: 20,
    public_good: 20
  },
  {
    date: '2025-03-04',
    commercial: 20,
    public_good: 15
  },
  {
    date: '2025-03-05',
    commercial: 17,
    public_good: 13
  },
  {
    date: '2025-03-06',
    commercial: 14,
    public_good: 17
  },
  {
    date: '2025-03-07',
    commercial: 13,
    public_good: 15
  },
  {
    date: '2025-03-08',
    commercial: 16,
    public_good: 15
  },
  {
    date: '2025-03-09',
    commercial: 13,
    public_good: 19
  },
  {
    date: '2025-03-10',
    commercial: 15,
    public_good: 13
  },
  {
    date: '2025-03-11',
    commercial: 16,
    public_good: 10
  },
  {
    date: '2025-03-12',
    commercial: 15,
    public_good: 14
  },
  {
    date: '2025-03-13',
    commercial: 16,
    public_good: 18
  },
  {
    date: '2025-03-14',
    commercial: 19,
    public_good: 19
  },
  {
    date: '2025-03-15',
    commercial: 15,
    public_good: 22
  },
  {
    date: '2025-03-16',
    commercial: 17,
    public_good: 17
  },
  {
    date: '2025-03-17',
    commercial: 11,
    public_good: 15
  },
  {
    date: '2025-03-18',
    commercial: 17,
    public_good: 17
  },
  {
    date: '2025-03-19',
    commercial: 13,
    public_good: 17
  },
  {
    date: '2025-03-20',
    commercial: 15,
    public_good: 17
  },
  {
    date: '2025-03-21',
    commercial: 18,
    public_good: 15
  },
  {
    date: '2025-03-22',
    commercial: 15,
    public_good: 13
  },
  {
    date: '2025-03-23',
    commercial: 16,
    public_good: 17
  },
  {
    date: '2025-03-24',
    commercial: 16,
    public_good: 19
  },
  {
    date: '2025-03-25',
    commercial: 21,
    public_good: 15
  },
  {
    date: '2025-03-26',
    commercial: 15,
    public_good: 17
  },
  {
    date: '2025-03-27',
    commercial: 17,
    public_good: 20
  },
  {
    date: '2025-03-28',
    commercial: 22,
    public_good: 17
  },
  {
    date: '2025-03-29',
    commercial: 14,
    public_good: 20
  },
  {
    date: '2025-03-30',
    commercial: 16,
    public_good: 24
  },
  {
    date: '2025-03-31',
    commercial: 15,
    public_good: 11
  },
  {
    date: '2025-04-01',
    commercial: 15,
    public_good: 11
  },
  {
    date: '2025-04-02',
    commercial: 11,
    public_good: 15
  },
  {
    date: '2025-04-03',
    commercial: 19,
    public_good: 18
  },
  {
    date: '2025-04-04',
    commercial: 12,
    public_good: 14
  },
  {
    date: '2025-04-05',
    commercial: 17,
    public_good: 14
  },
  {
    date: '2025-04-06',
    commercial: 18,
    public_good: 22
  },
  {
    date: '2025-04-07',
    commercial: 11,
    public_good: 15
  },
  {
    date: '2025-04-08',
    commercial: 16,
    public_good: 10
  },
  {
    date: '2025-04-09',
    commercial: 13,
    public_good: 15
  },
  {
    date: '2025-04-10',
    commercial: 19,
    public_good: 18
  },
  {
    date: '2025-04-11',
    commercial: 16,
    public_good: 15
  },
  {
    date: '2025-04-12',
    commercial: 19,
    public_good: 19
  },
  {
    date: '2025-04-13',
    commercial: 12,
    public_good: 15
  },
  {
    date: '2025-04-14',
    commercial: 15,
    public_good: 12
  },
  {
    date: '2025-04-15',
    commercial: 13,
    public_good: 16
  },
  {
    date: '2025-04-16',
    commercial: 14,
    public_good: 20
  },
  {
    date: '2025-04-17',
    commercial: 19,
    public_good: 17
  },
  {
    date: '2025-04-18',
    commercial: 14,
    public_good: 17
  },
  {
    date: '2025-04-19',
    commercial: 15,
    public_good: 11
  },
  {
    date: '2025-04-20',
    commercial: 19,
    public_good: 19
  },
  {
    date: '2025-04-21',
    commercial: 16,
    public_good: 13
  },
  {
    date: '2025-04-22',
    commercial: 21,
    public_good: 17
  },
  {
    date: '2025-04-23',
    commercial: 21,
    public_good: 18
  },
  {
    date: '2025-04-24',
    commercial: 13,
    public_good: 13
  },
  {
    date: '2025-04-25',
    commercial: 15,
    public_good: 12
  },
  {
    date: '2025-04-26',
    commercial: 19,
    public_good: 14
  },
  {
    date: '2025-04-27',
    commercial: 16,
    public_good: 13
  },
  {
    date: '2025-04-28',
    commercial: 12,
    public_good: 14
  },
  {
    date: '2025-04-29',
    commercial: 15,
    public_good: 20
  },
  {
    date: '2025-04-30',
    commercial: 18,
    public_good: 20
  },
  {
    date: '2025-05-01',
    commercial: 15,
    public_good: 11
  },
  {
    date: '2025-05-02',
    commercial: 19,
    public_good: 14
  },
  {
    date: '2025-05-03',
    commercial: 16,
    public_good: 21
  },
  {
    date: '2025-05-04',
    commercial: 17,
    public_good: 20
  },
  {
    date: '2025-05-05',
    commercial: 12,
    public_good: 16
  },
  {
    date: '2025-05-06',
    commercial: 18,
    public_good: 12
  },
  {
    date: '2025-05-07',
    commercial: 21,
    public_good: 19
  },
  {
    date: '2025-05-08',
    commercial: 17,
    public_good: 16
  },
  {
    date: '2025-05-09',
    commercial: 15,
    public_good: 20
  },
  {
    date: '2025-05-10',
    commercial: 16,
    public_good: 23
  },
  {
    date: '2025-05-11',
    commercial: 18,
    public_good: 20
  },
  {
    date: '2025-05-12',
    commercial: 17,
    public_good: 19
  },
  {
    date: '2025-05-13',
    commercial: 19,
    public_good: 19
  },
  {
    date: '2025-05-14',
    commercial: 18,
    public_good: 20
  },
  {
    date: '2025-05-15',
    commercial: 16,
    public_good: 13
  }
];

// Last 3 months data
export const barChartData = [
  {
    date: '2025-02-15',
    commercial: 17,
    public_good: 23
  },
  {
    date: '2025-02-16',
    commercial: 15,
    public_good: 18
  },
  {
    date: '2025-02-17',
    commercial: 21,
    public_good: 15
  },
  {
    date: '2025-02-18',
    commercial: 19,
    public_good: 19
  },
  {
    date: '2025-02-19',
    commercial: 21,
    public_good: 16
  },
  {
    date: '2025-02-20',
    commercial: 13,
    public_good: 15
  },
  {
    date: '2025-02-21',
    commercial: 22,
    public_good: 18
  },
  {
    date: '2025-02-22',
    commercial: 15,
    public_good: 13
  },
  {
    date: '2025-02-23',
    commercial: 22,
    public_good: 17
  },
  {
    date: '2025-02-24',
    commercial: 15,
    public_good: 13
  },
  {
    date: '2025-02-25',
    commercial: 14,
    public_good: 12
  },
  {
    date: '2025-02-26',
    commercial: 19,
    public_good: 20
  },
  {
    date: '2025-02-27',
    commercial: 17,
    public_good: 22
  },
  {
    date: '2025-02-28',
    commercial: 16,
    public_good: 21
  },
  {
    date: '2025-03-01',
    commercial: 11,
    public_good: 17
  },
  {
    date: '2025-03-02',
    commercial: 12,
    public_good: 18
  },
  {
    date: '2025-03-03',
    commercial: 20,
    public_good: 20
  },
  {
    date: '2025-03-04',
    commercial: 20,
    public_good: 15
  },
  {
    date: '2025-03-05',
    commercial: 17,
    public_good: 13
  },
  {
    date: '2025-03-06',
    commercial: 14,
    public_good: 17
  },
  {
    date: '2025-03-07',
    commercial: 13,
    public_good: 15
  },
  {
    date: '2025-03-08',
    commercial: 16,
    public_good: 15
  },
  {
    date: '2025-03-09',
    commercial: 13,
    public_good: 19
  },
  {
    date: '2025-03-10',
    commercial: 15,
    public_good: 13
  },
  {
    date: '2025-03-11',
    commercial: 16,
    public_good: 10
  },
  {
    date: '2025-03-12',
    commercial: 15,
    public_good: 14
  },
  {
    date: '2025-03-13',
    commercial: 16,
    public_good: 18
  },
  {
    date: '2025-03-14',
    commercial: 19,
    public_good: 19
  },
  {
    date: '2025-03-15',
    commercial: 15,
    public_good: 22
  },
  {
    date: '2025-03-16',
    commercial: 17,
    public_good: 17
  },
  {
    date: '2025-03-17',
    commercial: 11,
    public_good: 15
  },
  {
    date: '2025-03-18',
    commercial: 17,
    public_good: 17
  },
  {
    date: '2025-03-19',
    commercial: 13,
    public_good: 17
  },
  {
    date: '2025-03-20',
    commercial: 15,
    public_good: 17
  },
  {
    date: '2025-03-21',
    commercial: 18,
    public_good: 15
  },
  {
    date: '2025-03-22',
    commercial: 15,
    public_good: 13
  },
  {
    date: '2025-03-23',
    commercial: 16,
    public_good: 17
  },
  {
    date: '2025-03-24',
    commercial: 16,
    public_good: 19
  },
  {
    date: '2025-03-25',
    commercial: 21,
    public_good: 15
  },
  {
    date: '2025-03-26',
    commercial: 15,
    public_good: 17
  },
  {
    date: '2025-03-27',
    commercial: 17,
    public_good: 20
  },
  {
    date: '2025-03-28',
    commercial: 22,
    public_good: 17
  },
  {
    date: '2025-03-29',
    commercial: 14,
    public_good: 20
  },
  {
    date: '2025-03-30',
    commercial: 16,
    public_good: 24
  },
  {
    date: '2025-03-31',
    commercial: 15,
    public_good: 11
  },
  {
    date: '2025-04-01',
    commercial: 15,
    public_good: 11
  },
  {
    date: '2025-04-02',
    commercial: 11,
    public_good: 15
  },
  {
    date: '2025-04-03',
    commercial: 19,
    public_good: 18
  },
  {
    date: '2025-04-04',
    commercial: 12,
    public_good: 14
  },
  {
    date: '2025-04-05',
    commercial: 17,
    public_good: 14
  },
  {
    date: '2025-04-06',
    commercial: 18,
    public_good: 22
  },
  {
    date: '2025-04-07',
    commercial: 11,
    public_good: 15
  },
  {
    date: '2025-04-08',
    commercial: 16,
    public_good: 10
  },
  {
    date: '2025-04-09',
    commercial: 13,
    public_good: 15
  },
  {
    date: '2025-04-10',
    commercial: 19,
    public_good: 18
  },
  {
    date: '2025-04-11',
    commercial: 16,
    public_good: 15
  },
  {
    date: '2025-04-12',
    commercial: 19,
    public_good: 19
  },
  {
    date: '2025-04-13',
    commercial: 12,
    public_good: 15
  },
  {
    date: '2025-04-14',
    commercial: 15,
    public_good: 12
  },
  {
    date: '2025-04-15',
    commercial: 13,
    public_good: 16
  },
  {
    date: '2025-04-16',
    commercial: 14,
    public_good: 20
  },
  {
    date: '2025-04-17',
    commercial: 19,
    public_good: 17
  },
  {
    date: '2025-04-18',
    commercial: 14,
    public_good: 17
  },
  {
    date: '2025-04-19',
    commercial: 15,
    public_good: 11
  },
  {
    date: '2025-04-20',
    commercial: 19,
    public_good: 19
  },
  {
    date: '2025-04-21',
    commercial: 16,
    public_good: 13
  },
  {
    date: '2025-04-22',
    commercial: 21,
    public_good: 17
  },
  {
    date: '2025-04-23',
    commercial: 21,
    public_good: 18
  },
  {
    date: '2025-04-24',
    commercial: 13,
    public_good: 13
  },
  {
    date: '2025-04-25',
    commercial: 15,
    public_good: 12
  },
  {
    date: '2025-04-26',
    commercial: 19,
    public_good: 14
  },
  {
    date: '2025-04-27',
    commercial: 16,
    public_good: 13
  },
  {
    date: '2025-04-28',
    commercial: 12,
    public_good: 14
  },
  {
    date: '2025-04-29',
    commercial: 15,
    public_good: 20
  },
  {
    date: '2025-04-30',
    commercial: 18,
    public_good: 20
  },
  {
    date: '2025-05-01',
    commercial: 15,
    public_good: 11
  },
  {
    date: '2025-05-02',
    commercial: 19,
    public_good: 14
  },
  {
    date: '2025-05-03',
    commercial: 16,
    public_good: 21
  },
  {
    date: '2025-05-04',
    commercial: 17,
    public_good: 20
  },
  {
    date: '2025-05-05',
    commercial: 12,
    public_good: 16
  },
  {
    date: '2025-05-06',
    commercial: 18,
    public_good: 12
  },
  {
    date: '2025-05-07',
    commercial: 21,
    public_good: 19
  },
  {
    date: '2025-05-08',
    commercial: 17,
    public_good: 16
  },
  {
    date: '2025-05-09',
    commercial: 15,
    public_good: 20
  },
  {
    date: '2025-05-10',
    commercial: 16,
    public_good: 23
  },
  {
    date: '2025-05-11',
    commercial: 18,
    public_good: 20
  },
  {
    date: '2025-05-12',
    commercial: 17,
    public_good: 19
  },
  {
    date: '2025-05-13',
    commercial: 19,
    public_good: 19
  },
  {
    date: '2025-05-14',
    commercial: 18,
    public_good: 20
  },
  {
    date: '2025-05-15',
    commercial: 16,
    public_good: 13
  }
];

export const areaChartData = [
  {
    month: 'December',
    year: '2024',
    commercial: 512,
    public_good: 499
  },
  {
    month: 'January',
    year: '2025',
    commercial: 513,
    public_good: 507
  },
  {
    month: 'February',
    year: '2025',
    commercial: 484,
    public_good: 491
  },
  {
    month: 'March',
    year: '2025',
    commercial: 490,
    public_good: 516
  },
  {
    month: 'April',
    year: '2025',
    commercial: 473,
    public_good: 467
  },
  {
    month: 'May',
    year: '2025',
    commercial: 254,
    public_good: 263
  }
];

export const tokensBalance = 92;

export const totalTokensSum = 5946;

const availableDataTypes = [
  { label: 'Temperature', field: 'temperature' },
  { label: 'Humidity', field: 'humidity' },
  { label: 'Energy Consumption', field: 'energy' },
  { label: 'Air Quality', field: 'air_quality' },
  { label: 'Water Usage', field: 'water_usage' },
  { label: 'Occupancy', field: 'ocuppany' },
  { label: 'Door/Window Status', field: 'door_window' },
  { label: 'Noise level', field: 'noise' },
  { label: 'Water Leak / Moisture', field: 'water_leak_humidty' },
  { label: 'Alarm Status & Safety Sensors', field: 'alarm_safety' },
  { label: 'Behavioral & Appliance Usage', field: 'behavioral' },
  { label: 'Device Metadata', field: 'device_metadata' }
];

export const availableDataTypesFilterOptions = availableDataTypes.map(
  (dataType) => ({ label: dataType.label, value: dataType.field })
);

export const pieChartData = [
  {
    label: 'Temperature',
    field: 'temperature',
    earned_tokens: 522,
    fill: 'var(--primary)'
  },
  {
    label: 'Energy Consumption',
    field: 'energy',
    earned_tokens: 724,
    fill: 'var(--primary-light)'
  },
  {
    label: 'Water Usage',
    field: 'water_usage',
    earned_tokens: 861,
    fill: 'var(--primary-lighter)'
  },
  {
    label: 'Door/Window Status',
    field: 'door_window',
    earned_tokens: 1486,
    fill: 'var(--primary-dark)'
  },
  {
    label: 'Alarm Status & Safety Sensors',
    field: 'alarm_safety',
    earned_tokens: 834,
    fill: 'var(--primary-darker)'
  },
  {
    label: 'Behavioral & Appliance Usage',
    field: 'behavioral',
    earned_tokens: 941,
    fill: 'var(--primary)'
  },
  {
    label: 'Device Metadata',
    field: 'device_metadata',
    earned_tokens: 578,
    fill: 'var(--primary-light)'
  }
];

export interface DataPublishTransaction {
  transaction_id: string;
  time_ago: string;
  earned_tokens: number;
}

export const recentDataTransactions: DataPublishTransaction[] = [
  {
    transaction_id: 'jiQyeUtdY87HeFLeE6TV5MsPot8M6Ptf',
    time_ago: '35 mins',
    earned_tokens: 99
  },
  {
    transaction_id: 'VccfGWFabgdWgreHekyMrBmiK9Sd736U',
    time_ago: '1 hr',
    earned_tokens: 14
  },
  {
    transaction_id: 'DbQztypu7LJ5cnERX1Bvx8Tu3N4D9zSv',
    time_ago: '2 hrs',
    earned_tokens: 74
  },
  {
    transaction_id: 'WVcPTPoHmF4DFJg1tTEpyUk5iQivv882',
    time_ago: '3 hrs',
    earned_tokens: 44
  },
  {
    transaction_id: '4jZKe7moxH1R8icutq3wymgXYbdKp8UV',
    time_ago: '4 hrs',
    earned_tokens: 78
  },
  {
    transaction_id: 'f5TtD2QxjXDdEcu1Kc4c51NkJCRkaUyj',
    time_ago: '5 hrs',
    earned_tokens: 85
  },
  {
    transaction_id: 'atVPQjZWZJt7mHmFTPCoe4Qgq5GbqZTt',
    time_ago: '7 hrs',
    earned_tokens: 77
  }
];

interface WithdrawalTransaction {
  transaction_id: string;
  withdrawn_tokens: number;
  transaction_date: string;
}

export const withdrawalTransactions: WithdrawalTransaction[] = [
  {
    transaction_id: 'CBZM39tNpUVvLo2xSvUGEEwabctyv7Cx',
    transaction_date: '24.05.2025 20:22:57',
    withdrawn_tokens: 1093
  },
  {
    transaction_id: 'DWuQTLooFjx3s6pHGfPymNMDfJf9GBX1',
    transaction_date: '09.04.2025 03:00:47',
    withdrawn_tokens: 1072
  },
  {
    transaction_id: 'PR7W7edX9yoYbYHfkbJHT2CBk5Rqf8d2',
    transaction_date: '13.03.2025 09:57:54',
    withdrawn_tokens: 1131
  },
  {
    transaction_id: 'WVdsyvqRYkFcjPqerqK1XTRPerLFUKPv',
    transaction_date: '11.02.2025 10:39:25',
    withdrawn_tokens: 1195
  },
  {
    transaction_id: 'uKpByz3hVjhT9Wot4r1JPnuwq2xWvY8Y',
    transaction_date: '02.01.2025 02:10:33',
    withdrawn_tokens: 1361
  }
];

interface DeviceDataForDataType {
  categoryValue: String;
  public_good_use: boolean;
  commercial_use: boolean;
}

export type Device = {
  name: string;
  serial_number: string;
  software_version: string;
  hardware_version: string;
  categories: Array<DeviceDataForDataType>;
};

export const devices: Device[] = [
  {
    name: 'TempSense Pro',
    serial_number: '9ASU-1PZQ',
    software_version: 'v1.7.2',
    hardware_version: 'v3.3.18',
    categories: [
      {
        categoryValue: 'air_quality',
        public_good_use: false,
        commercial_use: true
      },
      {
        categoryValue: 'temperature',
        public_good_use: false,
        commercial_use: true
      },
      {
        categoryValue: 'humidity',
        public_good_use: false,
        commercial_use: false
      },
      {
        categoryValue: 'energy',
        public_good_use: true,
        commercial_use: false
      }
    ]
  },
  {
    name: 'AirCheck Station',
    serial_number: 'TPW4-WPUP',
    software_version: 'v2.2.16',
    hardware_version: 'v3.3.6',
    categories: [
      {
        categoryValue: 'air_quality',
        public_good_use: true,
        commercial_use: true
      },
      {
        categoryValue: 'energy',
        public_good_use: true,
        commercial_use: true
      }
    ]
  },
  {
    name: 'TempSense Pro',
    serial_number: 'QPC6-W3JV',
    software_version: 'v3.1.12',
    hardware_version: 'v3.1.11',
    categories: [
      {
        categoryValue: 'energy',
        public_good_use: true,
        commercial_use: false
      },
      {
        categoryValue: 'humidity',
        public_good_use: false,
        commercial_use: false
      },
      {
        categoryValue: 'temperature',
        public_good_use: true,
        commercial_use: false
      },
      {
        categoryValue: 'air_quality',
        public_good_use: false,
        commercial_use: false
      }
    ]
  },
  {
    name: 'HumidGuard',
    serial_number: 'GXXR-WMHX',
    software_version: 'v3.8.2',
    hardware_version: 'v3.0.17',
    categories: [
      {
        categoryValue: 'ocuppany',
        public_good_use: true,
        commercial_use: true
      },
      {
        categoryValue: 'energy',
        public_good_use: true,
        commercial_use: false
      },
      {
        categoryValue: 'humidity',
        public_good_use: true,
        commercial_use: true
      }
    ]
  },
  {
    name: 'AquaMeter',
    serial_number: 'QYW0-7SB2',
    software_version: 'v1.5.11',
    hardware_version: 'v3.2.6',
    categories: [
      {
        categoryValue: 'noise',
        public_good_use: false,
        commercial_use: true
      },
      {
        categoryValue: 'water_usage',
        public_good_use: false,
        commercial_use: true
      },
      {
        categoryValue: 'humidity',
        public_good_use: false,
        commercial_use: true
      }
    ]
  },
  {
    name: 'AquaMeter',
    serial_number: 'QPR3-75IQ',
    software_version: 'v3.9.13',
    hardware_version: 'v1.6.5',
    categories: [
      {
        categoryValue: 'air_quality',
        public_good_use: false,
        commercial_use: false
      },
      {
        categoryValue: 'water_usage',
        public_good_use: true,
        commercial_use: true
      }
    ]
  },
  {
    name: 'LeakGuard Plus',
    serial_number: '2OT1-ZXN1',
    software_version: 'v3.8.6',
    hardware_version: 'v3.5.18',
    categories: [
      {
        categoryValue: 'behavioral',
        public_good_use: true,
        commercial_use: true
      },
      {
        categoryValue: 'noise',
        public_good_use: true,
        commercial_use: true
      },
      {
        categoryValue: 'water_leak_humidty',
        public_good_use: true,
        commercial_use: false
      },
      {
        categoryValue: 'device_metadata',
        public_good_use: true,
        commercial_use: true
      }
    ]
  },
  {
    name: 'TempSense Pro',
    serial_number: 'TL3K-5K9I',
    software_version: 'v1.4.0',
    hardware_version: 'v3.6.14',
    categories: [
      {
        categoryValue: 'humidity',
        public_good_use: true,
        commercial_use: false
      },
      {
        categoryValue: 'temperature',
        public_good_use: true,
        commercial_use: false
      },
      {
        categoryValue: 'energy',
        public_good_use: true,
        commercial_use: false
      }
    ]
  },
  {
    name: 'DoorSense',
    serial_number: '5F70-3U2D',
    software_version: 'v3.3.9',
    hardware_version: 'v2.1.4',
    categories: [
      {
        categoryValue: 'ocuppany',
        public_good_use: true,
        commercial_use: true
      },
      {
        categoryValue: 'door_window',
        public_good_use: false,
        commercial_use: true
      }
    ]
  },
  {
    name: 'AquaMeter',
    serial_number: 'GLT9-9LDP',
    software_version: 'v2.6.8',
    hardware_version: 'v3.6.19',
    categories: [
      {
        categoryValue: 'water_usage',
        public_good_use: true,
        commercial_use: true
      },
      {
        categoryValue: 'noise',
        public_good_use: false,
        commercial_use: true
      },
      {
        categoryValue: 'ocuppany',
        public_good_use: true,
        commercial_use: true
      }
    ]
  },
  {
    name: 'TempSense Pro',
    serial_number: 'YXEA-EW30',
    software_version: 'v3.6.12',
    hardware_version: 'v2.6.19',
    categories: [
      {
        categoryValue: 'humidity',
        public_good_use: true,
        commercial_use: false
      },
      {
        categoryValue: 'temperature',
        public_good_use: false,
        commercial_use: false
      },
      {
        categoryValue: 'air_quality',
        public_good_use: true,
        commercial_use: true
      },
      {
        categoryValue: 'energy',
        public_good_use: false,
        commercial_use: true
      }
    ]
  },
  {
    name: 'HumidGuard',
    serial_number: 'G9U0-ZCHD',
    software_version: 'v1.9.15',
    hardware_version: 'v1.3.3',
    categories: [
      {
        categoryValue: 'humidity',
        public_good_use: true,
        commercial_use: true
      }
    ]
  },
  {
    name: 'LeakGuard Plus',
    serial_number: 'GP33-8BGS',
    software_version: 'v2.7.2',
    hardware_version: 'v3.6.14',
    categories: [
      {
        categoryValue: 'air_quality',
        public_good_use: true,
        commercial_use: true
      },
      {
        categoryValue: 'water_leak_humidty',
        public_good_use: true,
        commercial_use: false
      },
      {
        categoryValue: 'alarm_safety',
        public_good_use: true,
        commercial_use: false
      },
      {
        categoryValue: 'humidity',
        public_good_use: true,
        commercial_use: false
      }
    ]
  },
  {
    name: 'SafeHome Node',
    serial_number: '4DEZ-AKED',
    software_version: 'v1.2.18',
    hardware_version: 'v3.8.19',
    categories: [
      {
        categoryValue: 'air_quality',
        public_good_use: false,
        commercial_use: false
      },
      {
        categoryValue: 'alarm_safety',
        public_good_use: true,
        commercial_use: false
      },
      {
        categoryValue: 'behavioral',
        public_good_use: true,
        commercial_use: true
      },
      {
        categoryValue: 'device_metadata',
        public_good_use: true,
        commercial_use: true
      }
    ]
  },
  {
    name: 'ThermoPoint',
    serial_number: 'ZKZA-1BYG',
    software_version: 'v1.5.9',
    hardware_version: 'v2.7.13',
    categories: [
      {
        categoryValue: 'temperature',
        public_good_use: false,
        commercial_use: false
      },
      {
        categoryValue: 'energy',
        public_good_use: false,
        commercial_use: true
      }
    ]
  },
  {
    name: 'AquaMeter',
    serial_number: 'BIOS-GM47',
    software_version: 'v1.1.11',
    hardware_version: 'v2.3.8',
    categories: [
      {
        categoryValue: 'temperature',
        public_good_use: false,
        commercial_use: true
      },
      {
        categoryValue: 'water_usage',
        public_good_use: true,
        commercial_use: false
      },
      {
        categoryValue: 'energy',
        public_good_use: true,
        commercial_use: false
      },
      {
        categoryValue: 'air_quality',
        public_good_use: true,
        commercial_use: false
      }
    ]
  },
  {
    name: 'DoorSense',
    serial_number: 'YDQT-4K9N',
    software_version: 'v1.3.16',
    hardware_version: 'v3.9.9',
    categories: [
      {
        categoryValue: 'door_window',
        public_good_use: true,
        commercial_use: false
      }
    ]
  },
  {
    name: 'LeakGuard Plus',
    serial_number: 'H1SA-FZ5A',
    software_version: 'v2.6.15',
    hardware_version: 'v3.1.0',
    categories: [
      {
        categoryValue: 'water_leak_humidty',
        public_good_use: false,
        commercial_use: true
      },
      {
        categoryValue: 'door_window',
        public_good_use: true,
        commercial_use: true
      }
    ]
  },
  {
    name: 'TempSense Pro',
    serial_number: 'XCPK-U5A8',
    software_version: 'v3.5.2',
    hardware_version: 'v2.6.15',
    categories: [
      {
        categoryValue: 'temperature',
        public_good_use: true,
        commercial_use: true
      },
      {
        categoryValue: 'humidity',
        public_good_use: true,
        commercial_use: false
      },
      {
        categoryValue: 'energy',
        public_good_use: true,
        commercial_use: false
      },
      {
        categoryValue: 'air_quality',
        public_good_use: true,
        commercial_use: false
      }
    ]
  },
  {
    name: 'HumidGuard',
    serial_number: 'UK6B-7DFW',
    software_version: 'v3.1.19',
    hardware_version: 'v1.1.18',
    categories: [
      {
        categoryValue: 'humidity',
        public_good_use: true,
        commercial_use: true
      }
    ]
  },
  {
    name: 'HabitLogger',
    serial_number: '1XZJ-CLGK',
    software_version: 'v3.2.0',
    hardware_version: 'v2.9.6',
    categories: [
      {
        categoryValue: 'behavioral',
        public_good_use: false,
        commercial_use: false
      },
      {
        categoryValue: 'ocuppany',
        public_good_use: true,
        commercial_use: true
      }
    ]
  },
  {
    name: 'HumidGuard',
    serial_number: '54DG-EU2V',
    software_version: 'v3.0.12',
    hardware_version: 'v1.9.15',
    categories: [
      {
        categoryValue: 'humidity',
        public_good_use: true,
        commercial_use: true
      }
    ]
  },
  {
    name: 'ThermoPoint',
    serial_number: 'SLBB-J8PW',
    software_version: 'v1.4.14',
    hardware_version: 'v3.8.0',
    categories: [
      {
        categoryValue: 'temperature',
        public_good_use: false,
        commercial_use: true
      }
    ]
  },
  {
    name: 'TempSense Pro',
    serial_number: 'IILF-GCEU',
    software_version: 'v1.7.15',
    hardware_version: 'v3.5.19',
    categories: [
      {
        categoryValue: 'humidity',
        public_good_use: false,
        commercial_use: false
      },
      {
        categoryValue: 'temperature',
        public_good_use: false,
        commercial_use: true
      }
    ]
  },
  {
    name: 'AirCheck Station',
    serial_number: 'I23A-XNDG',
    software_version: 'v1.6.7',
    hardware_version: 'v3.6.3',
    categories: [
      {
        categoryValue: 'temperature',
        public_good_use: true,
        commercial_use: false
      },
      {
        categoryValue: 'air_quality',
        public_good_use: true,
        commercial_use: false
      }
    ]
  },
  {
    name: 'SmartEnergy Hub',
    serial_number: 'S1NN-TGZ2',
    software_version: 'v1.2.7',
    hardware_version: 'v3.3.5',
    categories: [
      {
        categoryValue: 'energy',
        public_good_use: true,
        commercial_use: false
      },
      {
        categoryValue: 'behavioral',
        public_good_use: false,
        commercial_use: false
      },
      {
        categoryValue: 'alarm_safety',
        public_good_use: false,
        commercial_use: true
      },
      {
        categoryValue: 'water_leak_humidty',
        public_good_use: false,
        commercial_use: false
      }
    ]
  },
  {
    name: 'DoorSense',
    serial_number: 'L8R7-4SJT',
    software_version: 'v1.3.11',
    hardware_version: 'v2.6.4',
    categories: [
      {
        categoryValue: 'temperature',
        public_good_use: true,
        commercial_use: true
      },
      {
        categoryValue: 'door_window',
        public_good_use: false,
        commercial_use: true
      }
    ]
  },
  {
    name: 'AirCheck Station',
    serial_number: '5SN3-YRIE',
    software_version: 'v2.3.13',
    hardware_version: 'v2.5.9',
    categories: [
      {
        categoryValue: 'air_quality',
        public_good_use: true,
        commercial_use: false
      },
      {
        categoryValue: 'humidity',
        public_good_use: false,
        commercial_use: false
      }
    ]
  },
  {
    name: 'HabitLogger',
    serial_number: 'PI5M-7S8Q',
    software_version: 'v2.1.10',
    hardware_version: 'v1.9.14',
    categories: [
      {
        categoryValue: 'behavioral',
        public_good_use: true,
        commercial_use: false
      }
    ]
  },
  {
    name: 'TempSense Pro',
    serial_number: 'WVEI-Q4U5',
    software_version: 'v3.3.7',
    hardware_version: 'v2.3.0',
    categories: [
      {
        categoryValue: 'humidity',
        public_good_use: false,
        commercial_use: true
      },
      {
        categoryValue: 'temperature',
        public_good_use: true,
        commercial_use: true
      }
    ]
  }
];

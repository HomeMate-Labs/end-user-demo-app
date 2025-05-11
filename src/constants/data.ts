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
  }
];

interface User {
  imageUrl?: string;
  fullName?: string | null;
  emailAddresses: Array<{ emailAddress: string }>;
}

export const user: User = {
  imageUrl: '',
  fullName: 'Mislav Ivanda',
  emailAddresses: [{ emailAddress: 'mislavivanda454@gmail.com' }]
};

interface DailyEarningsData {
  date: string;
  commercial: number;
  public_good: number;
}
const last6MonthsEarningsData: DailyEarningsData[] = [];
const today = new Date();
const days = 180;
const avgTokensPerDay = 33;
const variance = 15;

for (let i = days - 1; i >= 0; i--) {
  const date = new Date(today);
  date.setDate(today.getDate() - i);

  const dateString = date.toISOString().split('T')[0];

  const totalTokens = Math.round(
    avgTokensPerDay + (Math.random() * variance - variance / 2)
  );
  const commercial = Math.round(totalTokens * (0.4 + Math.random() * 0.2)); // 40–60% commercial
  const public_good = totalTokens - commercial;

  last6MonthsEarningsData.push({
    date: dateString,
    commercial,
    public_good
  });
}

// Last 3 months data
export const barChartData = last6MonthsEarningsData.slice(-90);

const result: {
  [key: string]: { commercialTotal: number; publicGoodTotal: number };
} = {};

// Helper function to get the full month name and year
function formatMonth(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long'
  };
  return date.toLocaleDateString('en-US', options); // Formats as "Month YYYY" (e.g., "March 2025")
}

// Group data by month and calculate sums
last6MonthsEarningsData.forEach((entry) => {
  const date = new Date(entry.date);
  const formattedMonth = formatMonth(date); // Get the "Month YYYY" format

  if (!result[formattedMonth]) {
    result[formattedMonth] = { commercialTotal: 0, publicGoodTotal: 0 };
  }
  result[formattedMonth].commercialTotal += entry.commercial;
  result[formattedMonth].publicGoodTotal += entry.public_good;
});

// Prepare the final result array
const finalResult = Object.keys(result).map((month) => ({
  month: month.split(' ')[0],
  year: month.split(' ')[1],
  commercial: result[month].commercialTotal,
  public_good: result[month].publicGoodTotal
}));

export const areaChartData = finalResult.slice(-6);

export const totalTokensSum = last6MonthsEarningsData.reduce(
  (acc, current) => (acc += current.commercial + current.public_good),
  0
);

console.log('totalTokensSum', totalTokensSum);

const pieChartAvailableColors = [
  'var(--primary)',
  'var(--primary-light)',
  'var(--primary-lighter)',
  'var(--primary-dark)',
  'var(--primary-darker)'
];

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

const earnedTokensByDataType = [
  availableDataTypes[0],
  availableDataTypes[2],
  availableDataTypes[4],
  availableDataTypes[6],
  availableDataTypes[9],
  availableDataTypes[10],
  availableDataTypes[11]
];

// Step 1: Generate random weights with large variance (0.5–1.5 range)
const rawWeights = earnedTokensByDataType.map(() => Math.random() + 0.5); // Range ~0.5–1.5
const weightSum = rawWeights.reduce((sum, w) => sum + w, 0);

// Step 2: Normalize and compute token distribution
const tokenAllocations = rawWeights.map((w) =>
  Math.floor((w / weightSum) * totalTokensSum)
);

// Step 3: Adjust for rounding error to ensure total sums exactly
const allocatedSum = tokenAllocations.reduce((sum, val) => sum + val, 0);
const remainder = totalTokensSum - allocatedSum;

// Distribute the remaining tokens (positive or negative) starting from the top
for (let i = 0; i < Math.abs(remainder); i++) {
  const index = i % earnedTokensByDataType.length;
  tokenAllocations[index] += Math.sign(remainder);
}

console.log('remainder', remainder, totalTokensSum);

export const pieChartData = earnedTokensByDataType.map(
  (dataTypeTokens, index) => ({
    ...dataTypeTokens,
    earned_tokens: tokenAllocations[index],
    fill: pieChartAvailableColors[index % pieChartAvailableColors.length]
  })
);

export interface DataPublishTransaction {
  transaction_id: string;
  transaction_date: Date;
  time_ago: string;
  earned_tokens: number;
}

const mockDataTransactions = [];

function generateBase58String(length: number): string {
  const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'; // Base58 alphabet
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffInMilliseconds = now.getTime() - new Date(date).getTime();
  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return `${seconds} sec${seconds !== 1 ? 's' : ''} ago`;
  } else if (minutes < 60) {
    return `${minutes} min${minutes !== 1 ? 's' : ''} ago`;
  } else if (hours < 24) {
    return `${hours} hr${hours !== 1 ? 's' : ''} ago`;
  } else {
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  }
}

const now = new Date();

for (let i = 0; i < 7; i++) {
  const transactionDate = new Date(
    now.getTime() - Math.floor(Math.random() * 500) * 60000
  );
  mockDataTransactions.push({
    transaction_id: generateBase58String(32), // Generate mock Solana transaction hash
    transaction_date: transactionDate,
    time_ago: formatTimeAgo(transactionDate),
    earned_tokens: Math.floor(Math.random() * 100) + 1 // Random earned tokens between 1 and 100
  });
}

mockDataTransactions.sort(
  (a, b) => b.transaction_date.getTime() - a.transaction_date.getTime()
);

export const recentDataTransactions: DataPublishTransaction[] =
  mockDataTransactions;

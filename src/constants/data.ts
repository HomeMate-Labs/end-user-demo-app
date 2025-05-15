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
const last6MonthsEarningsData: DailyEarningsData[] = [];
const today = new Date();
const days = 180;
const avgTokensPerDay = 33;
const dailyEarningsVariance = 15;

for (let i = days - 1; i >= 0; i--) {
  const date = new Date(today);
  date.setDate(today.getDate() - i);

  const dateString = date.toISOString().split('T')[0];

  const totalTokens = Math.round(
    avgTokensPerDay +
      (Math.random() * dailyEarningsVariance - dailyEarningsVariance / 2)
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

export const tokensBalance = 92;

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

export const availableDataTypesFilterOptions = availableDataTypes.map(
  (dataType) => ({ label: dataType.label, value: dataType.field })
);

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
    return `${seconds} sec${seconds !== 1 ? 's' : ''}`;
  } else if (minutes < 60) {
    return `${minutes} min${minutes !== 1 ? 's' : ''}`;
  } else if (hours < 24) {
    return `${hours} hr${hours !== 1 ? 's' : ''}`;
  } else {
    return `${days} day${days !== 1 ? 's' : ''}`;
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

interface WithdrawalTransaction {
  transaction_id: string;
  withdrawn_tokens: number;
  transaction_date: string;
}

const withdrawalTransactionsCount = 5;
const distributableAmount = totalTokensSum - tokensBalance;
const avg = distributableAmount / withdrawalTransactionsCount;
const withdrawalVariance = 0.2;
let mockWithdrawalTransactions = [];
let rawValues = [];

const parseDate = (rawTime: Date) =>
  rawTime.getDate().toString().padStart(2, '0') +
  '.' +
  (rawTime.getMonth() + 1).toString().padStart(2, '0') +
  '.' +
  rawTime.getFullYear() +
  ' ' +
  rawTime.getHours().toString().padStart(2, '0') +
  ':' +
  rawTime.getMinutes().toString().padStart(2, '0') +
  ':' +
  rawTime.getSeconds().toString().padStart(2, '0');

for (let i = 0; i < withdrawalTransactionsCount; i++) {
  const baseDate = new Date(now.getFullYear(), now.getMonth() - i, 1);

  // Random day in the month (1 to 28 for safety across months)
  const day = Math.floor(Math.random() * 28) + 1;

  // Random time
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  const seconds = Math.floor(Math.random() * 60);

  const fullDate = new Date(
    baseDate.getFullYear(),
    baseDate.getMonth(),
    day,
    hours,
    minutes,
    seconds
  );
  const min = avg * (1 - withdrawalVariance);
  const max = avg * (1 + withdrawalVariance);
  const value = Math.random() * (max - min) + min;
  rawValues.push(value);
  mockWithdrawalTransactions.push({
    transaction_id: generateBase58String(32), // Generate mock Solana transaction hash
    transaction_date: parseDate(fullDate),
    withdrawn_tokens: 0 // Initialize later
  });
}

// Normalize the raw values so their sum = distributableAmount
const rawSum = rawValues.reduce((a, b) => a + b, 0);
const scaledValues = rawValues.map((v) => (v / rawSum) * distributableAmount);

// Optional: Round to a fixed decimal (e.g., 2 decimal places)
const finalValues = scaledValues.map((v) => Math.round(v * 100) / 100);

// Adjust rounding error to ensure exact sum
const finalSum = finalValues.reduce((a, b) => a + b, 0);
const diff = Math.round((distributableAmount - finalSum) * 100) / 100;

// Fix last value to balance the total
finalValues[finalValues.length - 1] += diff;

mockWithdrawalTransactions.forEach(
  (withdrawalTransaction, index) =>
    (withdrawalTransaction.withdrawn_tokens = Math.floor(finalValues[index]))
);

export const withdrawalTransactions: WithdrawalTransaction[] =
  mockWithdrawalTransactions;

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

const availableDataTypesValues = availableDataTypesFilterOptions.map(
  (dataTypeOption) => dataTypeOption.value
);

export const devices: Device[] = Array.from({ length: 30 }, (_, i) => {
  const categories = getRandomCategories();
  return {
    name: generateName(categories),
    serial_number: generateSerial(),
    software_version: `v${randomVersion()}`,
    hardware_version: `v${randomVersion()}`,
    categories: categories.map((cat) => ({
      categoryValue: cat,
      public_good_use: Math.random() < 0.6,
      commercial_use: Math.random() < 0.6
    }))
  };
});

function getRandomCategories() {
  const shuffled = [...availableDataTypesValues].sort(
    () => 0.5 - Math.random()
  );
  return shuffled.slice(0, Math.floor(Math.random() * 4) + 1);
}

function generateSerial() {
  return (
    Math.random().toString(36).substring(2, 6).toUpperCase() +
    '-' +
    Math.random().toString(36).substring(2, 6).toUpperCase()
  );
}

function randomVersion() {
  return `${rand(1, 3)}.${rand(0, 9)}.${rand(0, 19)}`;
}

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateName(categories: string[]): string {
  const has = (cat: string) => categories.includes(cat);

  if (has('temperature') && has('humidity')) return 'TempSense Pro';
  if (has('energy') && has('behavioral')) return 'SmartEnergy Hub';
  if (has('air_quality') && has('noise')) return 'AirAware Monitor';
  if (has('water_leak_humidty')) return 'LeakGuard Plus';
  if (has('door_window') && has('alarm_safety')) return 'SecureEntry Unit';
  if (has('occupany') && has('behavioral')) return 'PresenceTrack Beacon';
  if (has('water_usage')) return 'AquaMeter';
  if (has('alarm_safety') && has('device_metadata')) return 'SafeHome Node';
  if (has('door_window')) return 'DoorSense';
  if (has('occupany')) return 'RoomOccupy Sensor';
  if (has('air_quality')) return 'AirCheck Station';
  if (has('noise')) return 'NoiseWatcher';
  if (has('temperature')) return 'ThermoPoint';
  if (has('humidity')) return 'HumidGuard';
  if (has('energy')) return 'PowerWatch';
  if (has('behavioral')) return 'HabitLogger';
  if (has('device_metadata')) return 'MetaSensor-X';

  // Fallback if no pattern matched
  return `SmartHome Device ${rand(1000, 9999)}`;
}

import { Device, devices } from '@/constants/data';
import { searchParamsCache } from '@/lib/searchparams';
import { DeviceTable } from './device-table';
export default function DevicesListingPage() {
  const page = searchParamsCache.get('page');
  const searchByNameString = searchParamsCache.get('name')?.toLowerCase();
  const pageLimit = searchParamsCache.get('perPage');
  const selectedCategory = searchParamsCache.get('category') || '';
  //*FILTER BY CATEGORY PART
  const categoryDevices: Device[] = selectedCategory
    ? devices.filter((device) =>
        device.categories.find(
          (categoryData) => categoryData.categoryValue === selectedCategory
        )
      )
    : [];

  //*FILTER BY NAME PART
  const filteredDevicesByName = searchByNameString
    ? categoryDevices.filter((device) =>
        device.name.toLowerCase().includes(searchByNameString)
      )
    : categoryDevices;

  //*PAGINATION PART
  const offset = (page - 1) * pageLimit;
  const paginatedDevices: Device[] = filteredDevicesByName.slice(
    offset,
    offset + pageLimit
  );

  const totalCategoryDevices = filteredDevicesByName.length;
  return (
    <DeviceTable
      data={paginatedDevices}
      totalItems={totalCategoryDevices}
      //*selectedCategory should always exist
      selectedCategory={selectedCategory}
    />
  );
}

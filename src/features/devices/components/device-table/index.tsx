'use client';
import * as React from 'react';
import { DataTable } from '@/components/ui/table/data-table';
import { DataTableToolbar } from '@/components/ui/table/data-table-toolbar';
import { Device } from '@/constants/data';
import { useDataTable } from '@/hooks/use-data-table';
import { getDevicesColumns } from './columns';
import { parseAsInteger, useQueryState } from 'nuqs';
interface DeviceTableParams<TData, TValue> {
  data: Device[];
  totalItems: number;
  selectedCategory: string;
}
export function DeviceTable<TData, TValue>({
  data,
  totalItems,
  selectedCategory
}: DeviceTableParams<TData, TValue>) {
  const [tableData, setTableData] = React.useState<Device[]>(data);
  React.useEffect(() => {
    setTableData(data);
  }, [data]);

  const updateTableRow = (rowIndex: number, updatedRow: Device) => {
    setTableData((prev) => {
      const newData = [...prev];
      newData[rowIndex] = updatedRow;
      return newData;
    });
  };

  const [pageSize] = useQueryState('perPage', parseAsInteger.withDefault(10));
  const pageCount = Math.ceil(totalItems / pageSize);

  const columns = getDevicesColumns(selectedCategory, updateTableRow);
  const { table } = useDataTable<Device>({
    data: tableData, // device data
    columns, // device columns
    pageCount: pageCount,
    shallow: false, //Setting to false triggers a network request with the updated querystring.
    debounceMs: 500
  });

  return (
    <DataTable
      table={table}
      isDeviceTable
      selectedDeviceCategory={selectedCategory}
    >
      <DataTableToolbar table={table} hideViewOptions />
    </DataTable>
  );
}

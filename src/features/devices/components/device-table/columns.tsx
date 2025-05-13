'use client';
import { DataTableColumnHeader } from '@/components/ui/table/data-table-column-header';
import { Device, availableDataTypesFilterOptions } from '@/constants/data';
import { cn } from '@/lib/utils';
import { Column, ColumnDef } from '@tanstack/react-table';
import { Text } from 'lucide-react';
import { CheckIcon } from '@radix-ui/react-icons';

function getBooleanCategoryColumn(
  key: 'public_good_use' | 'commercial_use',
  label: string,
  targetCategory: string,
  updateTableRow: (rowIndex: number, updatedRow: Device) => void
): ColumnDef<Device> {
  return {
    accessorKey: key,
    header: () => <div className='text-center'>{label}</div>,
    cell: ({ row }) => {
      const rowIndex = row.index;
      const rowData = row.original;
      const targetCategoryData = rowData.categories.find(
        (category) => category.categoryValue === targetCategory
      );
      const isSelected = !!targetCategoryData?.[key];

      const toggleCheckbox = () => {
        const updatedCategories = rowData.categories.map((category) =>
          category.categoryValue === targetCategory
            ? {
                ...category,
                [key]: !category[key]
              }
            : category
        );

        updateTableRow(rowIndex, {
          ...rowData,
          categories: updatedCategories
        });
      };

      return (
        <div className='flex w-full justify-center'>
          <div
            className={cn(
              'border-primary flex size-4 items-center justify-center rounded-sm border text-center',
              isSelected ? 'bg-primary' : 'opacity-50 [&_svg]:invisible'
            )}
            onClick={toggleCheckbox}
          >
            <CheckIcon />
          </div>
        </div>
      );
    }
  };
}

export const getDevicesColumns = (
  targetCategory: string,
  updateTableRow: (rowIndex: number, updatedRow: Device) => void
) => {
  const columns: ColumnDef<Device>[] = [
    {
      id: 'name',
      accessorKey: 'name',
      header: ({ column }: { column: Column<Device, unknown> }) => (
        <div className='flex justify-center'>
          <DataTableColumnHeader column={column} title='Name' />
        </div>
      ),
      cell: ({ cell }) => (
        <div className='text-center'>{cell.getValue<Device['name']>()}</div>
      ),
      meta: {
        label: 'Name',
        placeholder: 'Search devices by name...',
        variant: 'text',
        icon: Text
      },
      enableColumnFilter: true
    },
    //* We define category column for enabling filtering by device category
    //* Since we don't want to show device categories(bc we are always showing devices for single selected category type) we show device metadata in that place instead
    {
      id: 'category',
      accessorKey: 'categories',
      header: () => <div className='text-center'>Metadata</div>,
      cell: ({ row }) => {
        return (
          <div className='text-center'>
            <div>
              <b>SN: </b>
              <span>{row.original['serial_number']}</span>
            </div>
            <div>
              <b>SW version: </b>
              <span>{row.original['software_version']}</span>
            </div>
            <div>
              <b>HW version: </b>
              <span>{row.original['hardware_version']}</span>
            </div>
          </div>
        );
      },
      enableColumnFilter: true,
      meta: {
        label: 'Data types',
        variant: 'select',
        options: availableDataTypesFilterOptions
      }
    },
    getBooleanCategoryColumn(
      'public_good_use',
      'Public good',
      targetCategory,
      updateTableRow
    ),
    getBooleanCategoryColumn(
      'commercial_use',
      'Commercial',
      targetCategory,
      updateTableRow
    )
  ];
  return columns;
};

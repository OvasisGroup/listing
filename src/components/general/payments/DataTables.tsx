/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// components/DataTable.tsx
'use client';

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from '@tanstack/react-table';
import { PaymentData } from '../../../../types/payment-types';
import { fetchPayments } from '@/lib/api';


interface DataTableProps {
  columns: ColumnDef<PaymentData, any>[];
}

export function DataTable({ columns }: DataTableProps) {
  const { data, isLoading } = useQuery({
    queryKey: ['payments'],
    queryFn: fetchPayments,
  });

  const table = useReactTable({
    data: data?.payments ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-gray-100">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-4 py-2 border">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2 border">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function useQuery(_arg0: { queryKey: string[]; queryFn: () => Promise<PaymentData>; }): { data: any; isLoading: any; } {
    throw new Error('Function not implemented.');
}


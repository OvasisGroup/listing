// components/columns.tsx
import { ColumnDef } from '@tanstack/react-table';
import { Payment } from '../../../../types/payment-types';


export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'method',
    header: 'Method',
  },
  {
    accessorKey: 'listing.title',
    header: 'Listing Title',
    cell: ({ row }) => row.original.listing.title,
  },
  {
    accessorKey: 'user.name',
    header: 'User Name',
    cell: ({ row }) => row.original.user.name,
  },
];

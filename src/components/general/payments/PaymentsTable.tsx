// components/PaymentsTable.tsx
'use client'

import React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from '@tanstack/react-table'

type Payment = {
  id: string
  amount: number
  status: string
  method: string
  createdAt: string
  listing: {
    title: string
  }
  user: {
    name: string
    email: string
  }
}

interface PaymentsTableProps {
  data: Payment[]
}

export function PaymentsTable({ data }: PaymentsTableProps) {
  const columns = React.useMemo<ColumnDef<Payment>[]>(() => [
    {
      header: 'Date',
      accessorKey: 'createdAt',
      cell: info => new Date(info.getValue<string>()).toLocaleString()
    },
    {
      header: 'Amount',
      accessorKey: 'amount',
    },
    {
      header: 'Status',
      accessorKey: 'status',
    },
    {
      header: 'Method',
      accessorKey: 'method',
    },
    {
      header: 'Listing Title',
      accessorFn: row => row.listing.title,
      id: 'listingTitle',
    },
    {
      header: 'User',
      accessorFn: row => row.user.name,
      id: 'userName',
    }
  ], [])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="p-2 border">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="p-2 border">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

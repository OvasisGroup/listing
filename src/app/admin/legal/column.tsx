"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";


// 
const formatDate = (isoDate: string) => {
    return new Date(isoDate).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Legal = {
    id: string;
    title: string;
    body: string;
    createdAt: string;              
}

export const columns: ColumnDef<Legal>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "title",
        header: "Title",    
      },
    {
        accessorKey: "body",
        header: "Body",
    cell: ({ row }) => (
      <div className="whitespace-normal line-clamp-3 break-words max-w-[600px]">
        {row.getValue("body")}
      </div>
    ),    
      },
      {
        accessorKey: "createdAt",
        header: "Date Created",
        cell: ({ row }) => {
          const value = row.getValue("createdAt") as string;
          return formatDate(value);
        },
      },
  
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const item = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleEdit(item)}>
              <Pencil className="mr-2 h-4 w-4" /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleDelete(item.id)} className="text-red-500">
              <Trash className="mr-2 h-4 w-4" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
]


// Handlers
const handleEdit = (item: Legal) => {
    console.log("Edit", item);
    window.location.href = `/admin/legal/${item.id}`;
  };
  
  const handleDelete = (id: string) => {
    console.log("Delete", id);
    // Call API or update state to remove item
  };


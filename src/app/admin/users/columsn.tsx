"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import Image from "next/image";

// 

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Users = {
    id: string;
    image: string;
    name: string;
    onboardingCompleted: boolean;
    userType: string;
    createdAt: string;  
}

export const columns: ColumnDef<Users>[] = [
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
        accessorKey: "image",
        header: "Image", 
        cell: ({ row }) => {
            const image = row.getValue("image") as string;
      
            return (
              <div className="flex items-center">
                <Image
                  src={image}
                  alt="Item"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
            );
          },   
      },
    {
        accessorKey: "name",
        header: "Name",    
      },
    {
        accessorKey: "email",
        header: "Email",    
      },
      {
        accessorKey: "userType",
        header: "User Type",
      },
      {
        accessorKey: "createdAt",
        header: "Created At",
      },
  {
    accessorKey: "onboardingCompleted",
    header: "Onboarded",
      cell: ({ row }) => {
        const value = row.getValue("onboardingCompleted") as boolean;
        const bgColor =  value? "bg-primary" : "bg-red-500";
        return (
          <div className={`${bgColor}` + " rounded-xl px-4 py-1 text-white w-fit"}>
            {value}
          </div>
        );
      }
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
            <DropdownMenuItem onClick={() => console.log("Edit", item)}>
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
// const handleEdit = (item: Item) => {
//     console.log("Edit", item);
//     // Open modal or navigate to edit page
//   };
  
  const handleDelete = (id: string) => {
    console.log("Delete", id);
    // Call API or update state to remove item
  };
  
"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useEffect, useState } from "react"
// import { Skeleton } from "../ui/skeleton"
import Image from "next/image"
// import { ArrowRight } from 'lucide-react';

type Post = {
    id: string;
    name: string;
    description: string;
    icon: string;
  }


export function NavigationMenuDemo() {

    const [data, setData] = useState<Post[]>([]);
        
          useEffect(() => {
            const fetchData = async () => {
              try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`); // Replace with your API
                const json = await res.json();
                setData(json);
              } catch (error) {
                console.error("Error fetching data:", error);
              }
            };
        
            fetchData();
          }, []);


    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-[url('/images/kimperson.png')] bg-cover bg-center from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        {/* <Icons.logo className="h-6 w-6" /> */}
                            
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                          
                                        </p>
                 
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/about" title="About">
                                     Meet Mr.KIM, your source for trusted local professional service providers in your area.
                            </ListItem>
                            <ListItem href="/talent" title="Talent">
                                Discover the best local talent for your needs.
                            </ListItem>
                            <ListItem href="/premium" title="Premium">
                                Enjoy the benefits of premium services.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {data.map((category) => (
                                
                                <ListItem
                                    key={category.name}
                                    title={category.name}
                                    href={`/categories/${category.id}`}
                                    className="font-bold"
                                ><Image src={category.icon} alt={category.name} width={40} height={50} className='object-contain my-4' />
                      <h5 className="">{category.description}</h5>
                                </ListItem>
                            ))}
                        </ul>
                       
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

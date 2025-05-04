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
import Image from "next/image"

  const data = [
    {
        name: "Residential Cleaning",
        icon: "/images/4x/redients@4x.png",
        description: "If your hectic schedule leaves you little time for house cleaning, let Mr.KIM lend a hand. Have you thought about investing in regular cleaning services for your home? The benefits might surprise you.",
        id: 1,
        link: "/cleaning/residential-cleaning"
    },
    {
        name: "Commercial Cleaning",
        icon: "/images/4x/commercials@4x.png",
        description: "Whether you manage a small business or a corporate office, maintaining a clean environment is crucial for fostering a healthy workplace, enhancing employee well-being, and attracting new clients. ",
        id: 2,
        link: "/cleaning/commercial-cleaning"
    }
  ]


export function NavigationMenuCleaning() {

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
                                    href={category.link}
                                    className="font-black"
                                >
                                    <h5 className="font-bold text-black">{category.name}</h5> 
                                    <Image src={category.icon} alt={category.name} width={40} height={50} className='object-contain my-4' />
                                    <h5 className="font-light">{category.description}</h5>
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

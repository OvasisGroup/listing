import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ArrowUpRight, ChevronDown, Heart, HouseIcon, Layers2, LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { signOut } from "@/lib/auth";

interface iAppProps {
    email: string;
    name: string;
    image: string;
}


export default function UserDropDown({ email, name, image }: iAppProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <div className=" flex items-center border-none  cursor-pointer text-white">
                    <Avatar className="size-8">
                        <AvatarImage src={image} alt="profile image" />
                        <AvatarFallback className="text-primary">{name.charAt(1)}</AvatarFallback>
                    </Avatar>
                    <ChevronDown size={16} strokeWidth={2} className="ml-1 text-primary opacity-100" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel className="flex flex-col gap-2">
                    <span className="font-bold">{name}</span>
                    <span className="text-muted-foreground">{email}</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                <DropdownMenuItem>
                        <Link href={'/admin'} className="flex items-center gap-2 justify-between w-full">
                        <span><HouseIcon /></span>
                        <span> My Dashboard</span>
                        <DropdownMenuShortcut><ArrowUpRight/></DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={'/profile'} className="flex items-center gap-2 justify-between w-full">
                        <span><Layers2 /></span>
                        <span>My Job Listings</span>
                        <DropdownMenuShortcut><ArrowUpRight/></DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={'/profile'} className="flex items-center gap-2 justify-between w-full">
                        <span><Heart /></span>
                        <span>Favorite Jobs</span>
                        <DropdownMenuShortcut><ArrowUpRight/></DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>


                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <form action={async () => {
                            "use server";
                            await signOut({ redirectTo: "/"});
                        }} className = "w-full">
                        <Button className="flex items-center gap-2 justify-between w-full cursor-pointer">
                        <span className="text-white"><LogOut className="text-white"/></span>
                        <span className="text-white">Logout</span>
                        <DropdownMenuShortcut><ArrowUpRight className="text-white"/></DropdownMenuShortcut>
                        </Button>
                        </form>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

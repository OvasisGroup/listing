

import { ArrowUpRight, Heart, HouseIcon, Layers2, LogOut, User } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { signOut } from "@/lib/auth";
import { requireUser } from "@/utils/requireUser";

interface iAppProps {
    email: string;
    name: string;
    image: string;
}


export default async function MobileDropdown({ name }: iAppProps) {
    const session = await requireUser();
    
        if (!session?.name) {
            return <h1>You are not logged in</h1>;
        }
    return (
        <>
        <div className="border-b-1 border-primary py-4">
            <div className=" flex items-center border-none  cursor-pointer text-primary">
                <h1>Welcome Back</h1>
            </div>
            <span className="font-bold">{name}</span>
            </div>

            <Link href={'/admin'} className="flex items-center gap-2 justify-between w-full border-b-1 border-primary py-4">
            <div className="flex items-center gap-2 justify-center">
            <span><HouseIcon className="text-primary"/></span>
            <span className="font-light"> My Dashboard</span>
            </div>
            <ArrowUpRight className="text-primary" />
            </Link>

            <Link href={'/profile'} className="flex items-center gap-2 justify-between w-full border-b-1 border-primary py-4">
            <div className="flex items-center gap-2 justify-center">
                <span className="text-primary"><Layers2 className="text-primary"/></span>
                <span className="font-light">My Job Listings</span>
                </div>
                <ArrowUpRight className="text-primary" />
            </Link>

            <Link href={'/profile'} className="flex items-center gap-2 justify-between w-full border-b-1 border-primary py-4">
            <div className="flex items-center gap-2 justify-center">
                <span className="text-primary"><Heart className="text-primary"/></span>
                <span className="font-light">Favorite Jobs</span>
                </div>
                <ArrowUpRight className="text-primary" />
            </Link>


            <Link href={'/admin/profile'} className="flex items-center gap-2 justify-between w-full border-b-1 border-primary py-4">
            <div className="flex items-center gap-2 justify-center">
                <span className="text-primary"><User className="text-primary"/></span>
                <span className="font-light">Profile</span>
                </div>
                <ArrowUpRight className="text-primary" />
            </Link>

            <form action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
            }} className="w-full mt-4">
                <Button className="flex items-center gap-2 justify-between w-full cursor-pointer">
                    <span className="text-white"><LogOut className="text-white" /></span>
                    <span className="text-white">Logout</span>
                </Button>
            </form>
        </>

    )
}

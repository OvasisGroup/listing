
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button, buttonVariants } from "../ui/button"
import { MenuSquareIcon } from "lucide-react"
import MobileDropdown from "./MobileDropdown"
import { auth } from "@/lib/auth";
import Link from "next/link";


export default async function MobileNav() {
    const session = await auth();
    return (
        <div className="md:hidden block">
            <Drawer>
                <DrawerTrigger>
                    <MenuSquareIcon className="h-6 w-6 text-primary" />
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>
                            {session?.user ? (
                                <MobileDropdown email={session.user.email as string} name={session.user.name as string} image={session.user.image as string} />
                            ) : (
                                <Link href={'/login'} className={buttonVariants({ size: "lg" })} ><p className='text-white'>Get Started</p></Link>
                            )}
                        </DrawerTitle>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Link href={'/post-job'} className={buttonVariants({ size: "lg" })} >
                        <Button>Post A Job</Button>
                        </Link>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </div>
    )
}

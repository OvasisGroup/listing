

import Image from "next/image";
import { requireUser } from "@/utils/requireUser";
import { Edit } from "lucide-react";
// import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";

interface iAppProps {
    email: string;
    name: string;
    image: string;
}


export default async function UserProfilePage({ email, name, image }: iAppProps) {
    const session = await requireUser();

    if (!session?.name) {
        return <h1>You are not logged in</h1>;
    }
    return (
        <div className="flex flex-row gap-4 justify-between items-center">
            <div>
                <Dialog>
                    <div className="relative">
                        <div className="relative"><Image src={image} alt="profile image" width={100} height={100} className="rounded-full" /></div>
                        <DialogTrigger className="absolute top-1 right-30"><Edit className="text-primary absolute top-1 right-0 border-2 bg-amber-50 border-white cursor-pointer" /></DialogTrigger>
                    </div>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle></DialogTitle>
                            <DialogDescription>
                                <div className="flex flex-col gap-4 justify-center items-center">
                                    <h1 className="text-center font-bold text-2xl pb-6">Update Profile Picture</h1>
                                    <div className="mb-4 flex flex-col gap-2 items-center">
                                        <Image src={image} alt={'Mr_Kim_Logo'} width={150} height={150} className='rounded-full border-4 border-dotted border-primary' />
                                        <p className="font-bold cursor-pointer text-primary text-center">Click to Upload</p>
                                    </div>
                                    <p className="text-center">Must be an actual photo of you.
                                        Logos, clip-art, group photos, and digitally-altered images are not allowed.</p>
                                    <Button className="max-w-md text-white cursor-pointer">Upload</Button>
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
            </div>

        </div>
    )
}
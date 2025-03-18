

import { auth } from "@/lib/auth";
import Image from "next/image";

export default async function UserProfilePage() {
    const session  = await auth();

    if (!session?.user?.name) {
        return <h1>You are not logged in</h1>;
    }
    return (
        <>
        <h1>User Profile</h1>
        <p><strong>Name:</strong> {session.user?.name}</p>
        <p><strong>Email:</strong> {session.user?.email}</p>
        <Image src={session.user?.image} alt="Profile Image" width={100} height={100} className="rounded-full" />
        </>
    )
}
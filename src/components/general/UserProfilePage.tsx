

import { auth } from "@/lib/auth";

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
        </>
    )
}
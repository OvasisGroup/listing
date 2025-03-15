import { auth } from "@/lib/auth";
import { UploadThingError } from "uploadthing/server";
import { prisma } from "../../prisma/prisma";

export async function  requireUser() {
    const session = await auth();

    if (!session || !session.user?.email) {
        throw new UploadThingError("Unauthorized");
    }

    const user = await prisma.user.findUnique({
        where: {email: session.user.email,},
        select: {id: true, name: true, email: true, userType: true}
        });

        if (!user) {
            throw new UploadThingError("Unauthorized");
        }

        console.log("Fetched User", user);

        return { ...session.user, id: user.id }
}

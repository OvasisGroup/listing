import Image from "next/image";
import { prisma } from "../../../../prisma/prisma";
import { requireUser } from "@/utils/requireUser";
import ProfileUpdateForm from "@/components/general/ProfileUpdateForm";

export default async function ProfilePage() {
  const session = await requireUser();

  if (!session.id) {
    return <p>You must be logged in to view this page.</p>;
  }

  // Fetch user details based on user ID
  const user = await prisma.user.findUnique({
    where: { id: session.id },
    include: {
      profile: true,
      Company: true,
      JobSeeker: true,
    },
  });

  if (!user) {
    return <p>User data could not be loaded.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <Image src="/images/splash.jpg" alt="Logo" width={2000} height={100} className="mb-4 w-full rounded-xl" />
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* User Details */}
        <div>
          <h2 className="text-lg font-semibold">User Details</h2>
          <p><strong>Name:</strong> {user.name || "N/A"}</p>
          <p><strong>Email:</strong> {user.email || "N/A"}</p>
          <Image src={user.image || "/default-user-image.png"} alt="User Image" width={200} height={200} />
          <p><strong>Location:</strong> {user.profile?.location || "N/A"}</p>
          <p><strong>About:</strong> {user.profile?.about || "N/A"}</p>
          <p><strong>Created At:</strong> {user.createdAt.toString() || "N/A"}</p>
        </div>

         {/* Profile Details */}
         {user.profile && (
          <ProfileUpdateForm profile={{ ...user.profile, location: user.profile.location ?? undefined, about: user.profile.about ?? undefined }} />
        )}

        {/* Profile Details */}
        {user.profile && (
          <div>
            <h2 className="text-lg font-semibold">Profile Details</h2>
            <p><strong>Profile Name:</strong> {user.profile.name || "N/A"}</p>
            <p><strong>Location:</strong> {user.profile.location || "N/A"}</p>
            <p><strong>About:</strong> {user.profile.about || "N/A"}</p>
          </div>
        )}

        {/* Company Details */}
        {user.Company && (
          <div>
            <h2 className="text-lg font-semibold">Company Details</h2>
            <p><strong>Company Name:</strong> {user.Company.name || "N/A"}</p>
            <Image src={user.Company.logo || "/default-company-logo.png"} alt="Company Logo" width={200} height={200} />
            <p><strong>Company Description:</strong> {user.Company.about || "N/A"}</p>
          </div>
        )}

        {/* JobSeeker Details */}
        {user.JobSeeker && (
          <div>
            <h2 className="text-lg font-semibold">JobSeeker Details</h2>
            <p><strong>Resume:</strong> {user.JobSeeker.resume || "N/A"}</p>
            <p><strong>Experience:</strong> {user.JobSeeker.about || "N/A"}</p>
            <p><strong>Created At:</strong> {user.JobSeeker.createdAt.toString() || "N/A"}</p>
            <p><strong>Updated At:</strong> {user.JobSeeker.updatedAt.toString() || "N/A"}</p>
            <p><strong>Location:</strong> {user.JobSeeker.location || "N/A"}</p>
          </div>
        )}
      </div>
    </div>
  );
}

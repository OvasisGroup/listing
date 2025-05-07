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
    <div>

      <div className="bg-[url('/images/splash.jpg')] bg-cover bg-center bg-no-repeat py-15 rounded-xl mb-4">
      <h1 className="text-2xl font-bold text-white pl-10">Profile</h1>




      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* User Details */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <Image src={user.image || "/images/kimperson.png"} alt="User Image" width={100} height={100} className="rounded-full" />
          <p><strong>Name:</strong> {user.name || "N/A"}</p>


          <p><strong>Location:</strong> {user.profile?.location || "N/A"}</p>
          <p><strong>About:</strong> {user.profile?.about || "N/A"}</p>
        </div>

         {/* Profile Details */}
         {user.profile && (
          <ProfileUpdateForm profile={{ ...user.profile, image: user.profile.image ?? "/images/kimperson.png", location: user.profile.location ?? undefined, about: user.profile.about ?? undefined }} />
        )}

        {/* Profile Details */}
        {/* {user.profile && (
          <div>
            <h2 className="text-lg font-semibold">Profile Details</h2>
            <p><strong>Profile Name:</strong> {user.profile.name || "N/A"}</p>
            <p><strong>Location:</strong> {user.profile.location || "N/A"}</p>
            <p><strong>About:</strong> {user.profile.about || "N/A"}</p>
          </div>
        )} */}

        {/* Company Details */}
        {user.Company && (
          <div>
            <h2 className="text-lg font-semibold">Company Details</h2>
            <p><strong>Company Name:</strong> {user.profile?.name || "N/A"}</p>
            <Image src={user.Company.logo || "/default-company-logo.png"} alt="Company Logo" width={200} height={200} />
            <p><strong>Company Description:</strong> {user.Company.about || "N/A"}</p>
          </div>
        )}

        {/* JobSeeker Details */}
        {user.JobSeeker && (
          <div>
            <h2 className="text-lg font-semibold">JobSeeker Details</h2>
            <p><strong>Resume:</strong> {user.JobSeeker.resume || "N/A"}</p>
          </div>
        )}
      </div>
    </div>
  );
}

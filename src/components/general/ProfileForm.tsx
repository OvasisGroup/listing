"use client";

import { User } from "@prisma/client";

interface ProfileFormProps {
  user: User & {
    profile?: {
      name: string;
    };
    Company?: {
      name: string;
    };
    JobSeeker?: {
      resume: string;
    };
  };
}

export default function ProfileForm({ user }: ProfileFormProps) {
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      {user.profile && <p>Profile Name: {user.profile.name}</p>}
      {user.Company && <p>Company Name: {user.Company.name}</p>}
      {user.JobSeeker && <p>Resume: {user.JobSeeker.resume}</p>}
    </div>
  );
}

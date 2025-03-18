import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["lh3.googleusercontent.com", "mrkim-listings.vercel.app"],
    remotePatterns: [
      {
        protocol: "https",  
        hostname: "utfs.io",
        port: "",
      },
    ],
  }
};

export default nextConfig;


// "utfs.io"
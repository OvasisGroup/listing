import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["lh3.googleusercontent.com", "mrkim-listings.vercel.app", "localhost"],
    remotePatterns: [
      {
        protocol: "https",  
        hostname: "utfs.io",
        port: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000", // Replace with your development server port if different
        pathname: "/**", // Allow all paths
      },
    ],
  }
};

export default nextConfig;


// "utfs.io"
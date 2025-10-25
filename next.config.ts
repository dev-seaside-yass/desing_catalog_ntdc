import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    unoptimized: true,
    remotePatterns:[
      {
        protocol: "https",
        hostname: "i.gyazo.com",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      }
    ]
  }
};

export default nextConfig;

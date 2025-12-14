import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tempestphp.com",
        pathname: "/img/**",
      },
    ],
  },
};

export default nextConfig;

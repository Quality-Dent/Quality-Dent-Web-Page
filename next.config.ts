import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        qualities: [100,25, 50, 75],
    },
    output: 'standalone',
};

export default nextConfig;

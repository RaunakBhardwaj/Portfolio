/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static export
  images: {
    unoptimized: true, // Required for next/image in static export
  },
};

export default nextConfig;

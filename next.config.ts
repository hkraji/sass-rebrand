import type { NextConfig } from "next";

const port = process.env.PORT || "3000";

const nextConfig: NextConfig = {
  distDir: `.next-${port}`,
};

export default nextConfig;

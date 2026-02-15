import type { NextConfig } from "next";

const isGithubPages = process.env.GH_PAGES === 'true';

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/past-life" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

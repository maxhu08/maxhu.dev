import type { NextConfig } from "next";
import { redirects } from "./src/constants/redirects";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return redirects;
  }
};

export default nextConfig;

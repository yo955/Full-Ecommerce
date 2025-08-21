import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tahaapi.runasp.net",
        port: "",
        pathname: "/**",
      },
    ],
  }
};

export default withNextIntl(nextConfig);

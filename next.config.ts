/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextConfig } from "next";

const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/api/gstonegames/:path*",
                destination: "https://www.gstonegames.com/app/v2/:path*",
            },
        ];
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    experimental: {
        turbo: {
            rules: {
                "*.svg": {
                    loaders: ["@svgr/webpack"],
                    as: "*.js",
                },
            },
        },
    },
} satisfies NextConfig;

export default nextConfig;

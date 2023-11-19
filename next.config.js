/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mks-sistemas.nyc3.digitaloceanspaces.com",
        port: "",
        pathname: "/products/**",
      },
    ],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Definição do alias
  },
};

module.exports = nextConfig;

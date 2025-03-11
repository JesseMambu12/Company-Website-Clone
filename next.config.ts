/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["randomuser.me"], // Menambahkan randomuser.me sebagai domain gambar yang valid
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.starbucks.co.id",
      },
    ],
  },
};

module.exports = nextConfig;



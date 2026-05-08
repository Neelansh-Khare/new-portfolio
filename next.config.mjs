/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/new-portfolio',
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  //remove it later
  // images: { unoptimized: true },

  compiler: {
    styledComponents: true,
  },
  basePath: "/portfolio",
};

export default nextConfig;

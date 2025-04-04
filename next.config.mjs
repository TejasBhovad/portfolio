import MillionLint from "@million/lint";
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   transpilePackages: ["three"],
// };

// export default nextConfig;
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
  transpilePackages: ["three"],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default MillionLint.next({
  enabled: true,
  rsc: true,
})(withMDX(nextConfig));

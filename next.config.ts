import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // 优化模块加载
    optimizePackageImports: ['@heroicons/react'],
  },
  // 确保图片优化正常工作
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;

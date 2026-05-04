import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  turbopack: {
    // Use a project-root-relative path so Turbopack resolves correctly
    root: '.',
  },
};

export default nextConfig;
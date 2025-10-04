/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      bufferutil: false,
      "utf-8-validate": false,
      canvas: false,
    };
    return config;
  },
  images: {
    domains: ['192.168.29.43', 'api.jobsai.in', 'images.pexels.com', 'localhost', '127.0.0.1', 'logo.clearbit.com', 'images.unsplash.com'],
  },
  // Disable static optimization for dynamic pages
  experimental: {
    // This ensures pages are not statically optimized
  },
  // Custom headers to prevent caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
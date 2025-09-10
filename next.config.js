/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
    // Static export configuration for GitHub Pages
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/Salaryfy.io' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Salaryfy.io' : '',
    trailingSlash: true,

    // Image optimization
    images: {
        unoptimized: true,
        formats: ['image/webp'],
    },

    // Performance optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },

    // Compression and optimization
    compress: true,
    poweredByHeader: false,

    // Note: Headers are not supported with static export
    // They would be configured at the hosting provider level

    // Webpack configuration for optimizations
    webpack: (config, { dev, isServer }) => {
        // Optimize bundle size
        if (!dev && !isServer) {
            config.optimization.splitChunks.chunks = 'all'
        }

        return config
    },

    // Experimental features for better performance
    // Note: optimizeCss disabled for static export compatibility
    experimental: {
        // optimizeCss: true,
    },
}

module.exports = withBundleAnalyzer(nextConfig)
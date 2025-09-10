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
    
    // Headers for security and performance
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    }
                ],
            },
            {
                source: '/manifest.json',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/manifest+json'
                    }
                ],
            }
        ]
    },
    
    // Webpack configuration for optimizations
    webpack: (config, { dev, isServer }) => {
        // Optimize bundle size
        if (!dev && !isServer) {
            config.optimization.splitChunks.chunks = 'all'
        }
        
        return config
    },
    
    // Experimental features for better performance
    experimental: {
        optimizeCss: true,
    },
}

module.exports = withBundleAnalyzer(nextConfig)
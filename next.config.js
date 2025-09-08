/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/Salaryfy.io',
    assetPrefix: '/Salaryfy.io',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
}

module.exports = nextConfig
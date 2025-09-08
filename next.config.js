/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/Salaryfy.io' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Salaryfy.io' : '',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
}

module.exports = nextConfig
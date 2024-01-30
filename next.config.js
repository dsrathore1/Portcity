/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: "**"
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                pathname: "**"
            },
            {
                protocol: 'https',
                hostname: 'assets-global.website-files.com',
                pathname: "**"
            },
            {
                protocol: 'https',
                hostname: 'cdn.dribbble.com',
                pathname: "**"
            },
            {
                protocol: 'https',
                hostname: 'i0.wp.com',
                pathname: "**"
            },
            {
                protocol: 'https',
                hostname: 'user-images.githubusercontent.com',
                pathname: "**"
            },
            {
                protocol: "https",
                hostname: 'plus.unsplash.com',
                pathname: "**"
            }
        ]
    },

}

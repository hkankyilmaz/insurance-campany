/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fiat.ankaraoto.com.tr',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig

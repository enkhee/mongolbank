/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true,
        }
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
            },
        ],
    }
}

export default nextConfig;

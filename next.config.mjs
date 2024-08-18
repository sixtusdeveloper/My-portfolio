/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**', // This allows any path under the hostname
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
                pathname: '/**', // This allows any path under the hostname
            },
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
                pathname: '/**', // This allows any path under the hostname
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                pathname: '/**', // This allows any path under the hostname
            },
        ],
    },
};

export default nextConfig;

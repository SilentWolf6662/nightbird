/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [{ protocol: 'https', hostname: 'images.ctfassets.net/**' }],
    },
    webpack: (config) => {
        config.resolve.fallback = { fs: false, path: false };

        return config;
    },

};

export default nextConfig;

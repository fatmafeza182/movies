/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_TMDB_KEY: "24ff362da0dc49965a0d9d955c286299",
      },
      images: {
        domains: ['image.tmdb.org'],
      },
};

export default nextConfig;

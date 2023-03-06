/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    'button',
  ],
  images: {
    domains: [
      'rb.gy', 'cdn.sanity.io', 'lh3.googleusercontent.com', 'www.gravatar.com',
    ],
  },
};

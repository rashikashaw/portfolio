/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    "@portfolio/button"
  ],
  images: {
    domains: [
      "rb.gy", "cdn.sanity.io", "lh3.googleusercontent.com", "www.gravatar.com"
    ]
  }
}


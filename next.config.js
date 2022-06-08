/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: ['www.google.com'],
	},
	experimental: { images: { layoutRaw: true } },
}

module.exports = nextConfig

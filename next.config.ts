/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
			},
		],
	},
	trailingSlash: true,
	async redirects() {
		return [
			{
				source: '/:path*', // Match all paths
				has: [
					{
						type: 'host',
						value: 'terratruehq.com', // Match non-www requests
					},
				],
				destination: 'https://www.terratruehq.com/:path*', // Redirect to www
				permanent: true, // Use a 301 permanent redirect
			},
		]
	},
}

module.exports = nextConfig
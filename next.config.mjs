/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
			},
		],
	},
	env: {
		API_TOKEN:
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoxMjM0NTY3ODkwfQ.LxvohtATg49wcReZmhd9V1qc6DHG3gossycvbHqfcpQ',
		HOST: 'https://ndng.net',
	},
};

export default nextConfig;

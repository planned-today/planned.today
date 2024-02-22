/** @type {import('next').NextConfig} */

const githubUrl = "https://github.com/planned-today/planned.today";
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/github",
				destination: githubUrl,
				permanent: true
			},
			{
				source: "/docs",
				destination: "https://docs.planned.today",
				permanent: true
			}
		];
	}
};

export default nextConfig;

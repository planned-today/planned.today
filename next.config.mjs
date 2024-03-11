const githubUrl = "https://github.com/planned-today/planned.today";

/** @type {import('next').NextConfig} */
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
			},
			{
				source: "/faculty-survey",
				destination: "https://forms.gle/gcL23D41QLda7VFAA",
				permanent: true
			},
			{
				source: "/survey",
				destination: "https://oajqzltv.forms.app/faculty-user-research",
				permanent: true
			}
		];
	}
};

export default nextConfig;

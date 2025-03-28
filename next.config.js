/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg')
        );

        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/
            },
            {
                test: /\.svg$/i,
                resourceQuery: {
                    not: [...fileLoaderRule.resourceQuery.not, /url/]
                },
                use: ['@svgr/webpack']
            }
        );
        fileLoaderRule.exclude = /\.svg$/i;

        return config;
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
          },
        ],
      },
};

// module.exports = nextConfig
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;

   // config.experiments = { topLevelAwait: true };
   config.experiments = {
      ...config.experiments,
      layers: true,
    };


    config.plugins.push(
      new NextFederationPlugin({
        name: 'auth', // This app's name
        filename: 'static/chunks/remoteEntry.js', // Header's remote entry
        exposes: {
          './nav': './src/components/Nav.tsx',
          './pages': './src/pages/index.tsx',
        },
        shared: {
          react: { singleton: true, requiredVersion: false },
          'react-dom': { singleton: true, requiredVersion: false },
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;






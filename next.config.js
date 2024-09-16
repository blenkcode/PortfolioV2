// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["prod.spline.design"], // Ajouter les domaines utilisés
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.innerGraph = false;
    }
    return config;
  },
};

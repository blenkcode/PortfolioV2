// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["prod.spline.design"], // Ajouter les domaines utilisés
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias["next/image"] = "next/image.js";
    }
    return config;
  },
};

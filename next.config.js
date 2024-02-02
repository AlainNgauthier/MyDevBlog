const withImages = require('next-images')
module.exports = withImages({
  esModule: true
 });

module.exports = {
  reactStrictMode: true
}

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
}

module.exports = {
  images: {
    domains: ['media.graphcms.com']
  },
}

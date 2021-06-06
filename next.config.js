const path = require('path');

module.exports = {
  images: {
    domains: [process.env.GHOST_URL, 'images.unsplash.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

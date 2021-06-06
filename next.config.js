const path = require('path');

module.exports = {
  images: {
    domains: ['coditva.dev', 'images.unsplash.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

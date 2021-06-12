const path = require('path');

const imageDomains = [
  process.env.GHOST_URL,
  'images.unsplash.com',
];

if (process.env.NODE_ENV === 'development') {
  imageDomains.push('static.ghost.org');
}

module.exports = {
  images: {
    domains: imageDomains,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

const start = require('./main')

start({
  mainWindowUrl: `file://${__dirname}/index.html`,
  mainWindowOption: {
    width: 800,
    height: 600,
    // Enables Chromium's experimental features
    webPreferences: {
      experimentalFeatures: true
    },
  },
  maximize: true
});
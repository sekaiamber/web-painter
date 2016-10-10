const start = require('./main')

start({
  mainWindowUrl: 'http://localhost:8888/',
  mainWindowOption: {
    width: 800,
    height: 600,
    // Enables Chromium's experimental features
    webPreferences: {
      experimentalFeatures: true
    },
  },
  openDevTools: true
});
module.exports = {
  type: 'web-module',
  npm: {
    esModules: true,
    umd: {
      global: 'back2top',
      externals: {}
    }
  }
}

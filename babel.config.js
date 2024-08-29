module.exports = {
  presets: [
    // https://github.com/vuejs/vue-cli/tree/master/packages/@vue/babel-preset-app
    '@vue/cli-plugin-babel/preset'
  ],
  // 这是所有环境的统一配置
  // "plugins": [ ['istanbul', {extension: ['.js', '.vue']}]],
  'env': {
    'development': {
      'plugins': ['dynamic-import-node',  ['istanbul', {extension: ['.js', '.vue']}]]
    },
    'staging': {
      'plugins': ['dynamic-import-node', ['istanbul', {extension: ['.js', '.vue']}]]
    }
  }
}

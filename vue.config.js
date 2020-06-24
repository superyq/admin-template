const path = require('path');

function join(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('@', join('src'));

    config.module.rules.delete("svg");
    config.module
        .rule('svg-smart')
        .test(/\.svg$/)
        .include
        .add(join('src/icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            symbolId: '[name]'
        })
  }
}
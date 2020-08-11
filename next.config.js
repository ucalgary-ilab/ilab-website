const webpack = require('webpack')
const withCSS = require('@zeit/next-css')

const debug = process.env.NODE_ENV !== "production"

module.exports = withCSS({
  exportPathMap: function () {
    const ids = [
      'publications',
      'people',
      'courses',
      'news',
      'facility'
    ]

    let pages = {}
    for (let id of ids) {
      pages[id] = {
        page: `/${id}`,
        query: { id: '' }
      }
    }
    console.log(Object.assign({}, pages, {
      '/': { page: '/' }
    }))
    return Object.assign({}, pages, {
      '/': { page: '/' }
    })
  },
  // assetPrefix: !debug ? '/gh-pages/' : '',
  webpack: (config, options) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    )
    return config
  }

})

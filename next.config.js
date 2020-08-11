const webpack = require('webpack')
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  exportPathMap: function () {
    const menus = [
      'publications',
      'people',
      'courses',
      'news',
      'facility'
    ]

    let pages = {}
    for (let menu of menus) {
      let href = menu
      pages[href] = {
        page: `/${href}`,
        query: { id: '' }
      }
    }

    const summary = require('./content/output/summary.json')
    const fileNames = Object.keys(summary.fileMap).filter((fileName) => {
      return fileName.includes('publications')
    })
    const publications = fileNames.filter((fileName) => {
      return fileName.includes('publications')
    })
    for (let publication of publications) {
      let id = publication.split('/')[3].replace('.json', '')
      let href = `/publications/${id}`
      pages[href] = {
        page: '/publication',
        query: { id: id }
      }
    }

    const people = require('./content/output/people.json')
    for (let person of people) {
      let id = person.name.replace(' ', '-').toLowerCase()
      let href = `/people/${id}`
      pages[href] = {
        page: '/person',
        query: { id: id }
      }
    }

    console.log(pages)

    return Object.assign({}, pages, {
      '/': { page: '/' }
    })
  },

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

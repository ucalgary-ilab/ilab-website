const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_URL': prod ? '/gh-pages' : ''
}

  // 'process.env.BACKEND_URL': prod ? '/homepage' : ''

const fs = require('fs')
const tree = require('directory-tree')
const next = require('next')
const routes = require('next-routes')()
const app = next({dev: process.env.NODE_ENV !== 'production'})

routes.add('/:id', 'page')
const handler = routes.getRequestHandler(app)

const files = tree('./static', {
  extensions: /\.(jpg|jpeg|png)$/
})
fs.writeFileSync('./content/output/files.json', JSON.stringify(files, null, 2))

const {createServer} = require('http')
app.prepare().then(() => {
  createServer(handler).listen(3000)
})

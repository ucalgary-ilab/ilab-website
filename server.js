const next = require('next')
const routes = require('next-routes')()
const app = next({dev: process.env.NODE_ENV !== 'production'})

routes.add('/:id', 'project')
const handler = routes.getRequestHandler(app)

const {createServer} = require('http')
app.prepare().then(() => {
  createServer(handler).listen(3000)
})
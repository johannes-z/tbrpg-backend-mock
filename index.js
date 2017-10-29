var restify = require('restify')
var sqlite3 = require('sqlite3').verbose()
global.db = new sqlite3.Database('./db.sqlite')
var server = restify.createServer()
global.server = server

server.use(restify.plugins.bodyParser())

server.use(
  function crossOrigin (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    return next()
  }
)

var userRoutes = require('./routes/users/auth')
var characterRoutes = require('./routes/characters/index')
var locationRoutes = require('./routes/locations/index')

/**
 * Routes
 *
 * Locations
 * GET Index: /locations
 * GET Show: /location/:location
 * GET List: /location/list
 * POST Create: /location
 *  GET Create: /location/create
 * UPDATE Edit: /location/:location
 *    GET Edit: /location/:location/edit
 * DELETE Delete: /location/:location
 *
 *
 * Posts
 * GET Show: /location/:location/posts
 * POST Create: /location/:location/posts
 *  GET Create: /location/:location/posts
 * UPDATE Edit: /location/:location/post/:post
 *    GET Edit: /location/:location/post/:post
 * DELETE Delete: /location/:location/post/:post
 */

server.get('/about', (req, res, next) => {
  res.send('Lorem Ipsum')
  next()
})

server.listen(8000, () => {
  console.log('%s listening at %s', server.name, server.url)
})

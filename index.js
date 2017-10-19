var restify = require('restify')

function respond (req, res, next) {
  res.send('hello ' + req.params.name)
  next()
}

var server = restify.createServer()

server.use(
  function crossOrigin (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    return next()
  }
)

server.get('/about', (req, res, next) => {
  res.send('Lorem Ipsum')
  next()
})

server.listen(8000, () => {
  console.log('%s listening at %s', server.name, server.url)
})

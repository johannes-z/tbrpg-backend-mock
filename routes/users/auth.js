var db = global.db
var server = global.server

/**
 */

server.post('/login', (req, res, next) => {
  if (!req.body) next()

  let $email = req.body.email
  let $password = req.body.password

  db.get('SELECT * FROM users WHERE email = $email AND password = $password', {
    $email, $password
  }, (err, row) => {
    console.log(row)
    if (row && row.id) res.send('Login success')
    else res.send('Login failed')
    next()
  })
})

server.post('/register', (req, res, next) => {
  res.send('Lorem Ipsum')
  next()
})

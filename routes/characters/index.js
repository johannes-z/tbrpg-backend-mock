var db = global.db
var server = global.server

// TODO
// Mock logged-in user
var user = {
  id: 1,
  email: 'johannes.zwirchmayr@gmail.com'
}

/**
 * Characters
 * GET Index: /characters
 * GET Show (Biography): /character/:character
 * POST Create: /character
 *  GET Create: /character/create
 * UPDATE Edit (Biography): /character/:character/edit
 *    GET Edit (Biography): /character/:character/edit
 * DELETE Delete: /character/:character
 */

server.get('/characters', (req, res, next) => {
  db.all('SELECT * FROM characters WHERE user_id = $user', {
    $user: user.id
  }, (err, row) => {
    res.send(row)
    next()
  })
})

server.get('/characters/:character', (req, res, next) => {
  db.get('SELECT * FROM characters WHERE user_id = $user AND id = $character', {
    $user: user.id,
    $character: req.params.character
  }, (err, row) => {
    if (!row) return next(new Error('Character not found.'))
    res.send(row)
    next()
  })
})

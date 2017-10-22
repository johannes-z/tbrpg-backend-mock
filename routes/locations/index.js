var db = global.db

module.exports = {
  index: (req, res, next) => {
    res.send('Lorem Ipsum')
    next()
  }
}

var fs = require('fs')
var sqlite3 = require('sqlite3').verbose()

var db = new sqlite3.Database('./db.sqlite')

// Recreate db file
fs.unlinkSync('./db.sqlite')
fs.writeFileSync('./db.sqlite', '')

db.serialize(() => {
  // Init db tables
  db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, email TEXT, password TEXT)')
  db.run('CREATE TABLE characters (id INTEGER PRIMARY KEY, user_id INTEGER, location_id INTEGER, name TEXT)')
  db.run('CREATE TABLE locations (id INTEGER PRIMARY KEY, name TEXT)')
  db.run('CREATE TABLE posts (id INTEGER PRIMARY KEY, character_id INTEGER, location_id INTEGER, text TEXT)')
  db.run('CREATE TABLE conversations (id INTEGER PRIMARY KEY, character_id NUM, thread_id NUM, text TEXT)')
  db.run('CREATE TABLE threads (id INTEGER PRIMARY KEY)')
  db.run('CREATE TABLE thread_character (thread_id INTEGER, character_id INTEGER)')

  // Init test data
  db.run('INSERT INTO users (email, password) VALUES ("johannes.zwirchmayr@gmail.com", "password")')

  db.run('INSERT INTO characters (name) VALUES ("Charakter #1")')
})

db.close()

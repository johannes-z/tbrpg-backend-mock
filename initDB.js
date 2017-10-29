var fs = require('fs')
var sqlite3 = require('sqlite3').verbose()

var db = new sqlite3.Database('./db.sqlite')

// Recreate db file
fs.unlinkSync('./db.sqlite')
fs.writeFileSync('./db.sqlite', '')

db.serialize(() => {
  // Init db tables
  db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, email TEXT, password TEXT)')
  db.run('CREATE TABLE characters (id INTEGER PRIMARY KEY, user_id INTEGER, location_id INTEGER, name TEXT, avatar TEXT)')

  db.run('CREATE TABLE locations (id INTEGER PRIMARY KEY, name TEXT)')
  db.run('CREATE TABLE posts (id INTEGER PRIMARY KEY, character_id INTEGER, location_id INTEGER, text TEXT)')
  db.run('CREATE TABLE conversations (id INTEGER PRIMARY KEY, character_id NUM, thread_id NUM, text TEXT)')
  db.run('CREATE TABLE threads (id INTEGER PRIMARY KEY)')
  db.run('CREATE TABLE thread_character (thread_id INTEGER, character_id INTEGER)')

  // Init test data
  db.run('INSERT INTO users (email, password) VALUES ("johannes.zwirchmayr@gmail.com", "password")')

  db.run('INSERT INTO characters (user_id, name, avatar) VALUES (?, ?, ?)', 1, 'Evelynn Armiger', 'https://cdna2.artstation.com/p/assets/images/images/003/110/914/large/jonathan-romeo-epiphany-iii.jpg?1469798882')

  db.run('INSERT INTO characters (user_id, name, avatar) VALUES (?, ?, ?)', 1, 'Testcharacter', 'https://cdnb1.artstation.com/p/assets/images/images/003/121/253/large/saheb-da-firenze-death-effect.jpg?1469966180')

  db.run('INSERT INTO characters (user_id, name, avatar) VALUES (?, ?, ?)', 1, 'Test2', 'https://cdnb1.artstation.com/p/assets/images/images/003/121/253/large/saheb-da-firenze-death-effect.jpg?1469966180')

  db.run('INSERT INTO characters (user_id, name, avatar) VALUES (?, ?, ?)', 1, 'Testcharacter', 'http://img00.deviantart.net/bf7f/i/2015/197/d/7/the_gate_keeper___daily_painting_by_thefearmaster-d91huy0.jpg')

  db.run('INSERT INTO characters (user_id, name, avatar) VALUES (?, ?, ?)', 1, 'White Lion2', 'http://pre04.deviantart.net/023a/th/pre/i/2011/249/d/c/white_lion_2_by_suburbbum-d492z78.jpg')
})

db.close()

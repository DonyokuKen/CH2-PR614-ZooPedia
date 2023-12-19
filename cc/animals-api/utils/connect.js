const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'db4free.net',
  user: 'animals_01',
  password: 'animals123',
  database: 'db_animals'
})

connection.connect(function (err) {
    if (err) throw err;
    console.log('Database is connected successfully!');
});

module.exports = connection;

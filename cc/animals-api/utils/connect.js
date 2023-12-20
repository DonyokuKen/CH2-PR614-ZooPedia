const mysql = require('mysql')
const connection = mysql.createConnection({
  host: '34.101.214.135',
  user: 'admin',
  password: 'CH2-PR614-LULUS',
  database: 'animal_list'
})

connection.connect(function (err) {
    if (err) throw err;
    console.log('Database is connected successfully!');
});

module.exports = connection;

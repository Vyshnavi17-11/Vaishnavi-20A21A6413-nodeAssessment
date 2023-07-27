const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
 database: 'Parameter'
});

connection.connect((err) => {
  if (err) throw err;
console.log('Connected to MySQL server!');
});
function createDatabase(dbName) {
  connection.query(`CREATE DATABASE ${dbName}`, (err, result) => {
    if (err) throw err;
    console.log(`Database ${dbName} created successfully!`);
  });
}
function createTable() {
  const sql = 'CREATE TABLE employees id(Primary Key,Auto-increment),(name VARCHAR(255)),(department VARCHAR(100)),(salary (DECIMAL1 0, 2))';

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Table employees created successfully!');
  });
}

module.exports = {
  createDatabase,
  createTable,
  connection
};
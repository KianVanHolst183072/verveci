//const express = require('express');
const mysql = require('mysql');
//const cors = require('cors');

//onst app = express();
//app.use(cors());

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'V33rkr4cht',
  database: 'verveci_db',
  port: 3306
});

connection.connect()

// API Endpoint to get data from 'branch_avg_with_nl' view
//app.get('/api/branch-data', (req, res) => {
//  connection.query('SELECT * FROM survey_data.branch_avg_with_nl', (error, results) => {
//    if (error) {
//      return res.status(500).send('Error on the server.');
//    }
//    res.json({ data: results });
//  });
//});

// Start server
//const PORT = 3000; // You can choose any available port
//app.listen(PORT, () => {
//  console.log(`Server running on port ${PORT}`);
//});

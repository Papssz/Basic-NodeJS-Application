const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "sysdev_recruitment",
  });

app.get('/', (req, res) => {
    const favorite = req.query.favorite;

    const insertQuery = 'INSERT INTO programming_languages (favorite) VALUES (?)';
    connection.query(insertQuery, [favorite], (err, result) => {
        if (err) throw err;
        res.send('Data inserted');
    });

});

app.get('/programming-languages', (req, res) => {
    const selectQuery = 'SELECT * FROM programming_languages';
    connection.query(selectQuery, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(port)


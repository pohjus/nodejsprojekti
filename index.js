const mysql = require("mysql");
const express = require("express");
const app = express();

let port = process.env.PORT || 8080;

let config = {
  host: "mydb.tamk.fi",
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  connectionLimit: 10,
};

app.get("/", (req, res) => {
  pool.query("SELECT * Customer", (error, results) => {
    res.send(results);
  });
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});

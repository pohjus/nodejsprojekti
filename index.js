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

var pool = mysql.createPool(config);

app.get("/", (req, res) => {
  pool.query("SELECT * from location", (error, results) => {
    console.log(results);
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  });
  console.log("a");
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});

const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "message",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }
  console.log("Connected to MySQL as ID " + db.threadId);
});

// app.post('/user', (req, res) => {
//     const name = req.body.name;
//     const message = req.body.message;
//   const sql = 'insert into message (name,message) values (?, ?)';
//   db.query(sql, [name, message], (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// })

app.post("/user", async (req, res) => {
  const { name, message } = req.body;
  const sql = "INSERT INTO usermessage (name, message) VALUES (?, ?)";
  try {
    db.query(sql, [name, message], (err, result) => {
      if (err) throw err;
      res.status(200).send({ success: true, result });
    });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

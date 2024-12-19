const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');



const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());



// MySQL Connection
mongoose.connect(
  "mongodb+srv://sajithsampath721:Uj49BUdUaGc9wuzR@cluster0.7qao5.mongodb.net/crud"
);

const userSchema = new mongoose.Schema({
    name: String,
    message: String 
})

const userModel = mongoose.model("ghgh", userSchema);

// app.post('/user', (req,res)=>{
//     const emp1 = new userModel({
//         name: req.body.name,
//         message: req.body.message
//     })
//     emp1.save();
// })

app.post("/user", async (req, res) => {
    const { name, message } = req.body; // Updated to use 'age' instead of 'message'
    try {
      const newUser = new userModel({ name, message });
      const savedUser = await newUser.save();
      res.status(201).send({ success: true, data: savedUser });
    } catch (error) {
      res.status(500).send({ success: false, error: error.message });
    }
  });

// Connect to MySQL

// app.post('/user', (req, res) => {
//     const name = req.body.name;
//     const message = req.body.message;
//   const sql = 'insert into message (name,message) values (?, ?)';
//   db.query(sql, [name, message], (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// })

// app.post("/user", async (req, res) => {
//   const { name, message } = req.body;
//   const sql = "INSERT INTO usermessage (name, message) VALUES (?, ?)";
//   try {
//     db.query(sql, [name, message], (err, result) => {
//       if (err) throw err;
//       res.status(200).send({ success: true, result });
//     });
//   } catch (error) {
//     res.status(500).send({ success: false, error: error.message });
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

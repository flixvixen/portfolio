import express from 'express';
import { db } from './db.js';
import cors from 'cors';

const app = express();
app.use(cors());
//parse json
app.use(express.json());
const PORT = 3000;

app.post('/add-user', (req, res) => {
  const { username, password, name } = req.body;
  const accountsQuery = "INSERT INTO accounts (username, password, name) VALUES ($1, $2, $3)";

  db.query(accountsQuery, [username, password, name], (err, tresult) => {
    if (err) return res.status(500).json({ success: false, message: "Something went wrong"});

    res.json({ message: "User successfully added"});
  })
  
});

app.post('/check-user', (req, res) => {
  const { username, password } =req.body
  const query = "SELECT * FROM accounts WHERE username=$1 AND password=$2";

    db.query(query, [username, password])
    .then(result => {
        if(result.rowCount > 0) {
            res.status(200).json({ exist: true, message: "Login Succesfully"});
        }

        else {
            res.status(200).json({ exist: false, message: "Invalid username or password"});
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is runnimg on port ${PORT}`);
});
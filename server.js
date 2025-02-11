require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: ", err);
    return;
  }
  console.log("Connected to MySQL");
});

// API Routes
app.get("/todos", (req, res) => {
  db.query("SELECT * FROM todos", (err, result) => {
    if (err) return res.json({ error: err });
    res.json(result);
  });
});

app.post("/todos", (req, res) => {
  const { task } = req.body;
  db.query("INSERT INTO todos (task) VALUES (?)", [task], (err, result) => {
    if (err) return res.json({ error: err });
    res.json({ message: "Task added successfully!" });
  });
});

app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  db.query("UPDATE todos SET completed = ? WHERE id = ?", [completed, id], (err, result) => {
    if (err) return res.json({ error: err });
    res.json({ message: "Task updated successfully!" });
  });
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM todos WHERE id = ?", [id], (err, result) => {
    if (err) return res.json({ error: err });
    res.json({ message: "Task deleted successfully!" });
  });
});

// Start Server
app.listen(3000, () => console.log("Server running on port 3000"));

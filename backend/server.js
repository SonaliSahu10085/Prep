require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./config/db");

db();

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

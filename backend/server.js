require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const studentRouter = require("./routes/studentRoute");

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/student", studentRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

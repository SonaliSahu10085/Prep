require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const studentRouter = require("./routes/studentRoute");
const { notFound } = require("./middlewares/notFound");
const { errorHandling } = require("./middlewares/errorHandling");

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/student", studentRouter);

app.use(notFound);
app.use(errorHandling);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

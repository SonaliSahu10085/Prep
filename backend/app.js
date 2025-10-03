const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const studentRouter = require("./routes/studentRoute");
const { notFound } = require("./middlewares/notFound");
const { errorHandling } = require("./middlewares/errorHandling");
const morgan = require("morgan");

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/student", studentRouter);

app.use(notFound);
app.use(errorHandling);

module.exports = app;
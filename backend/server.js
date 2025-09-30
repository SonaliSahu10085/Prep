require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const studentRouter = require("./routes/studentRoute");
const { notFound } = require("./middlewares/notFound");
const { errorHandling } = require("./middlewares/errorHandling");

connectDB();
const app = express();
const PORT = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

app.use("/student", studentRouter);

app.use(notFound);
app.use(errorHandling);

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});

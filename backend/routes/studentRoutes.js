const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const { authVerify } = require("../middlewares/authMiddleware");

// Student routes
router.post("/signup", studentController.studentSignUp);
router.post("/login", studentController.studentLogin);
router.get("/profile", authVerify, studentController.getStudentProfile);
router.patch("/profile", authVerify, studentController.updateStudentProfile);

module.exports = router;
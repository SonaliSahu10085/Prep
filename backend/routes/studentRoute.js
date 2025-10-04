const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const requireAuth = require("../middlewares/authMiddleware");

router.post("/signup", studentController.studentSignUp);
router.post("/login", studentController.studentLogin);
router.get("/profile",requireAuth, studentController.getStudentProfile);
router.put("/profile",requireAuth, studentController.updateStudentProfile);

module.exports = router;
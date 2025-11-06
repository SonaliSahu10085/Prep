const express = require("express");
const router = express.Router();
const roadmapController = require("../controllers/roadmapController");
const { authVerify } = require("../middlewares/authMiddleware");

// Roadmap routes
router.get("/", authVerify, roadmapController.getAllRoadmaps);
router.get("/:year", authVerify, roadmapController.getRoadmapByYear);

// Only for admin
router.post("/", roadmapController.createRoadmap);
router.put("/:id", roadmapController.updateRoadmap);
router.delete("/:id", roadmapController.deleteRoadmap);

module.exports = router;
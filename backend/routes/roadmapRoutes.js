const express = require("express");
const router = express.Router();
const roadmapController = require("../controllers/roadmapController");
const requireAuth = require("../middlewares/authMiddleware");
const admainVerify = require("../middlewares/authMiddleware");

// Roadmap routes
router.get("/", requireAuth, roadmapController.getAllRoadmaps);
router.get("/:year", requireAuth, roadmapController.getRoadmapById);

// Only for admin
router.post("/", requireAuth,admainVerify, roadmapController.createRoadmap);
router.put("/:id", requireAuth, admainVerify, roadmapController.updateRoadmap);
router.delete("/:id", requireAuth, admainVerify, roadmapController.deleteRoadmap);

module.exports = router;
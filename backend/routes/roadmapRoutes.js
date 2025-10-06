const express = require("express");
const router = express.Router();
const roadmapController = require("../controllers/roadmapController");
const requireAuth = require("../middlewares/authMiddleware");

// Roadmap routes
router.get("/", requireAuth, roadmapController.getAllRoadmaps);
router.get("/:year", requireAuth, roadmapController.getRoadmapById);
router.post("/", requireAuth, roadmapController.createRoadmap);
router.put("/:id", requireAuth, roadmapController.updateRoadmap);
router.delete("/:id", requireAuth, roadmapController.deleteRoadmap);

module.exports = router;
const express = require("express");
const router = express.Router();
const resourceController = require("../controllers/resourceController");
const requireAuth = require("../middlewares/authMiddleware");
const admainVerify = require("../middlewares/authMiddleware");

// Resource routes
router.get("/", requireAuth, resourceController.getAllResources);
router.get("/topic/:topic", requireAuth, resourceController.getResourceByTopic);

// Only for admin
router.post("/", requireAuth, admainVerify, resourceController.createResource); 
router.put("/:id", requireAuth, admainVerify, resourceController.updateResource);
router.delete("/:id", requireAuth, admainVerify, resourceController.deleteResource);

module.exports = router;
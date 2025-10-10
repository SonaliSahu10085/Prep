const express = require("express");
const router = express.Router();
const resourceController = require("../controllers/resourceController");
const requireAuth = require("../middlewares/authMiddleware");

// Resource routes
router.get("/", requireAuth, resourceController.getAllResources);
router.get("/topic/:topic", requireAuth, resourceController.getResourceByTopic);
router.post("/", requireAuth, resourceController.createResource);
router.put("/:id", requireAuth, resourceController.updateResource);
router.delete("/:id", requireAuth, resourceController.deleteResource);

module.exports = router;
const express = require("express");
const router = express.Router();
const resourceController = require("../controllers/resourceController");
const { authVerify} = require("../middlewares/authMiddleware");

// Resource routes
router.get("/", authVerify, resourceController.getAllResources);
router.get("/topic/:topic", authVerify, resourceController.getResourceByTopic);

// Only for admin
router.post("/", resourceController.createResource); 
router.put("/:id", resourceController.updateResource);
router.delete("/:id", resourceController.deleteResource);

module.exports = router;
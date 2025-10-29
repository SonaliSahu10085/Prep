const express = require("express");
const router = express.Router();
const resourceController = require("../controllers/resourceController");
const { authVerify} = require("../middlewares/authMiddleware");

// Resource routes
router.get("/:topic", authVerify, resourceController.getResourceByTopic);
router.get("/", authVerify, resourceController.getAllResources);

// Only for admin
router.post("/", resourceController.createResource); 
router.patch("/:id", resourceController.updateResource);
router.delete("/:id", resourceController.deleteResource);

module.exports = router;
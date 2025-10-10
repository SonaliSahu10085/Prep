const Resource = require("../models/resourceModel");

// Get all resources
const getAllResources = async (req, res) => {
    try {
        const resources = await Resource.find();
        if (!resources) {
            return res.status(404).json({ message: "No resources found" });
        }

        res.status(200).json({message : "Resources fetched successfully", resources : resources});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Get resource by topic
const getResourceByTopic = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create resource
const createResource = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update resource
const updateResource = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete resource
const deleteResource = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllResources, getResourceByTopic, createResource, updateResource, deleteResource };
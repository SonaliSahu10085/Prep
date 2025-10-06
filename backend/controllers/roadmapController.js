const Roadmap = require("../models/roadmapModel");

// Get all roadmaps
const getAllRoadmaps = async (req, res) => {
    try {
        const roadmaps = await Roadmap.find({});

        if (!roadmaps) {
            return res.status(404).json({ message: "No roadmaps found" });
        }

        res.status(200).json({ message: "Roadmaps fetched successfully", roadmaps });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get roadmap by year
const getRoadmapByYear = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Create roadmap
const createRoadmap = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update roadmap
const updateRoadmap = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete roadmap
const deleteRoadmap = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllRoadmaps,
    getRoadmapByYear,
    createRoadmap,
    updateRoadmap,
    deleteRoadmap,
};


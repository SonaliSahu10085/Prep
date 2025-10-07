const Roadmap = require("../models/roadmapModel");

// Get all roadmaps
const getAllRoadmaps = async (req, res) => {
    try {
        const roadmaps = await Roadmap.find({}).populate("resources");

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
        const { year } = req.params;

        if (!year) {
            return res.status(400).json({ message: "Year is required" });
        }

        // Find roadmap
        const roadmap = await Roadmap.findOne({ year }).populate("resources");

        // Check if roadmap exists
        if (!roadmap || roadmap.length === 0) {
            return res.status(404).json({ message: "Roadmap not found" });
        }

        res.status(200).json({ message: "Roadmap fetched successfully", roadmap });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Create roadmap
const createRoadmap = async (req, res) => {
    try {
        const { title, year, description, resources } = req.body;

        if (!title || !year || !resources) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const roadmap = await Roadmap.create({ title, year, description, resources });
        res.status(201).json({ message: "Roadmap created successfully", roadmap });
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


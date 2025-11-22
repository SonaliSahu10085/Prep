const Student = require("../models/studentModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Student signup
const studentSignUp = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        if (!fullName || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if user already exists
        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash the password with 10 salt rounds
        const hashedPassword = await bcrypt.hash(password, 10); 

        // Create new user
        const student = await Student.create({
            fullName,
            email,
            password : hashedPassword,
        });

        // Send response
        res.status(201).json({ message: "Student registered successfully", student });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Student login
const studentLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) {
            return res.status(400).json({ error: "Email is required" });
        }

        if (!password) {
            return res.status(400).json({ error: "Password is required" });
        }

        const student = await Student.findOne({ email });
        if (!student) {
            return res.status(401).json({ error: "Invalid email" });
        }

        //bcrypt.compare() hashes the input password and compares it with the stored hash.
        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch){
             return res.status(400).json({ message: "Invalid credentials" });
        }
        
        // Create JWT token
        const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    
        res.status(200).json({ message: "Login successful", student, Token: token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get student profile
const getStudentProfile = async (req, res) => {
    try {
        const student = req.student;
        
        if (!student) {
            return res.status(404).json({ error: "User not found" });
        }

        const studentDetails = await Student.findById(student.id);
        res.status(200).json({message : "Profile fetched successfully", student : studentDetails });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update student profile
const updateStudentProfile = async (req, res) => {
    try {
        const student = req.student;
        if (!student) {
            return res.status(404).json({ error: "User not found" });
        }

        if(!req.body) {
            return res.status(400).json({ error: "No data provided to update" });
        }

        const updatedStudent = await Student.findByIdAndUpdate(student.id, req.body, { new: true });
        res.status(200).json({message : "Profile updated successfully", student : updatedStudent });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { studentSignUp, studentLogin, getStudentProfile, updateStudentProfile };
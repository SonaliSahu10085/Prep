const Student = require("../models/studentModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const studentSignUp = async (req, res) => {
    try {
        const { fullName, username, email, password } = req.body;
        if (!fullName || !username || !email || !password) {
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
            username,
            email,
            password : hashedPassword,
        });

        // Send response
        res.status(201).json({ message: "Student registered successfully", student });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

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
        const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    
        res.status(200).json({ message: "Login successful", token, student });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { studentSignUp, studentLogin };
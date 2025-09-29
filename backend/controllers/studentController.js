const Student = require("../models/studentModel");
// const bcrypt = require("bcrypt");

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
        // const hashedPassword = await bcrypt.hash(password, 10); 

        // Create new user
        const student = await Student.create({
            fullName,
            username,
            email,
            password,
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
        if (student.password !== password) {
            return res.status(401).json({ error: "Invalid password" });
        }
        res.status(200).json({ message: "Login successful", student });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { studentSignUp, studentLogin };
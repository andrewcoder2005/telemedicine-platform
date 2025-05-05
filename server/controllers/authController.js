const User = require("../models/User");
const { hashPassword, comparePassword } = require("../helpers/auth");
const test = (req, res) => {
  res.json("Test is working");
};
// Register end point
const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role,
      gender,
      phone,
      dateOfBirth,
      specialization,
      licenseNumber,
    } = req.body;

    // Validate required fields
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({
        error: "Password is required and should be at least 6 characters long",
      });
    }

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email is already registered" });
    }

    // Construct profile based on role
    const profile = {
      gender,
      phone,
      dateOfBirth,
    };

    if (role === "doctor") {
      profile.specialization = specialization;
      profile.licenseNumber = licenseNumber;
    }
    const hashedPassword = await hashPassword(password);
    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      profile,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.error("Error in registerUser:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
// Login end point
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user exists
    const user = await User.findOne(email);
    if (!user) {
      return res.json({
        error: "No user found!",
      });
    }
    // Check if password match
    const match = await comparePassword(password, user.password);
    if (match) {
      res.json("Password is match");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  test,
  registerUser,
  loginUser,
};

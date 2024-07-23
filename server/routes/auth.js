const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const User = require("../models/User");
require("dotenv").config();
JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const router = express.Router();

// Validation schemas
const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  user_token: z.string().optional(),
});

// Register route
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = registerSchema.parse(req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET_KEY
    );
    res.status(201).json({
      message: "User registered successfully",
      email: user.email,
      token,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password, user_token } = loginSchema.parse(req.body);

    if (user_token) {
      const user = jwt.verify(user_token, JWT_SECRET_KEY);
      return res.json({ email: user.email, token: user_token });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET_KEY
    );
    res.json({ email: user.email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

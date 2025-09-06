import express from "express";
import Festival from "../models/Festival.js";

const router = express.Router();

// Get all festivals
router.get("/", async (req, res) => {
  try {
    const festivals = await Festival.find();
    res.json(festivals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
import express from "express";
import Food from "../models/Food.js";

const router = express.Router();

// Get all foods
router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

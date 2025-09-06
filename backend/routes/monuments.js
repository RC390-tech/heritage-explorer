import express from "express";
import Monument from "../models/Monument.js";

const router = express.Router();

// Get all monuments
router.get("/", async (req, res) => {
  try {
    const monuments = await Monument.find();
    res.json(monuments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

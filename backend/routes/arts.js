import express from "express";
import Art from "../models/Art.js";

const router = express.Router();

// Get all arts
router.get("/", async (req, res) => {
  try {
    const arts = await Art.find();
    res.json(arts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

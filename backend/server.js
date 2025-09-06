import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";


// Import routes
import monumentRoutes from "./routes/monuments.js";

import foodsRoutes from "./routes/foods.js";
import artsRoutes from "./routes/arts.js";
import festivalsRoutes from "./routes/festivals.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// Routes
app.use("/api/monuments", monumentRoutes);
app.use("/api/foods", foodsRoutes);
app.use("/api/arts", artsRoutes);
app.use("/api/festivals", festivalsRoutes);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 

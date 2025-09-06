import mongoose from "mongoose";

const MonumentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
  builder: String,
  year_built: String,
  architecture: String,
  condition: String,
  management: String,
  tags: [String], // e.g., ["fort", "heritage"]
  best_time_to_visit: String,
  climatic_conditions: {
    summer: String,
    winter: String,
    monsoon: String
  },
  crowd_info: String,
  average_visitors_per_day: Number,
  location: {
    lat: Number,
    lon: Number
  }
}, { timestamps: true });

const Monument = mongoose.model("Monument", MonumentSchema);
export default Monument;

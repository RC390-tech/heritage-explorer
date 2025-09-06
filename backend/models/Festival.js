import mongoose from "mongoose";

const FestivalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
  month: String,
  description: String,
  culturalSignificance: String
});

const Festival = mongoose.model("Festival", FestivalSchema);
export default Festival;
 

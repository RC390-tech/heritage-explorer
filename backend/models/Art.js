import mongoose from "mongoose";

const ArtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
  type: String, 
  origin_history: String,
});

const Art = mongoose.model("Art", ArtSchema);
export default Art;
 

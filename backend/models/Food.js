import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
  type: String, // e.g., sweet, savory, snack
  description: String,
  popularity: Number // optional rating
});

const Food = mongoose.model("Food", FoodSchema);
export default Food;
 

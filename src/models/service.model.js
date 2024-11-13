import mongoose, { model } from "mongoose";

const serviceSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keyPoints: [
    {
      type: String,
      required: true,
    },
  ],
  slug: {
    type: String,
    required: true,
  },
});

export default mongoose.models?.Service || model("Service", serviceSchema);

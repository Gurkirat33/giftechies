import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      public_id: String,
      url: String,
    },
  },
  { timestamps: true },
);

const Service =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);
export default Service;

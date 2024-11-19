import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
  subHeading: {
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
  buttonUrl: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
    validate: [
      {
        validator: function(array) {
          return array.length === 4;
        },
        message: "Images array must contain exactly 4 images"
      }
    ]
  },
  outcome: {
    type: String,
    required: true,
  },
});

const Hero = mongoose.models.Hero || mongoose.model("Hero", heroSchema);

export default Hero;

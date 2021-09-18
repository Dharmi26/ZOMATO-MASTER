import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  mapLocation: { type: String, required: true },
  cuisine: [String],
  restaurantTimings: String,
  contactNumber: Number,
  website: String,
  popularDishes: [String],
  averageCost: Number,
  amenties: [String],
  menuImages: {
    tupe: mongoose.Types.ObjectId,
    ref: "Images",
  },
  menu: {
    tupe: mongoose.Types.ObjectId,
    ref: "Images",
  },
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Reviews0" }],
  photos: { type: mongoose.Types.ObjectId, ref: "Images" },
},
{
  timestamps: true,
}
);

const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);

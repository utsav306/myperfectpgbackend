const mongoose = require("mongoose");

const pgSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    address: {
      type: String,
      required: true,
      index: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "unisex"],
      required: true,
    },
    rooms: [
      {
        type: {
          type: String,
          enum: ["single", "double", "triple"], // Room types
          required: true,
        },
        features: {
          ac: { type: Boolean, required: true }, // AC or non-AC
          furnished: { type: Boolean, required: true }, // Furnished or unfurnished
        },
        rates: {
          monthly: { type: Number, required: true }, // Monthly rate (optional)
        },
        availability: {
          count: { type: Number, default: 0 }, // Available rooms of this type
          booked: { type: Number, default: 0 }, // Booked rooms of this type
        },
        pictures: [String], // Pictures specific to this room configuration
      },
    ],
    services: {
      fooding: { type: Boolean, required: true },
      foodingType: {
        type: [String],
        enum: ["veg", "non-veg","Both"],
        required: true,
      },
      ac: { type: Boolean},
      cctv: { type: Boolean },
      wifi: { type: Boolean,},
      laundry: { type: Boolean, },
      parking: { type: Boolean, },
      security: { type: Boolean, },
      otherServices: [String],
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    location: {
      longitude: {
        type: Number,
        required: true,
      },
      latitude: {
        type: Number,
        required: true,
      },
    },
    timings: {
      type: String,
      required: true,
    },
    pictures: [String],
    ownerDetails: {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
        validate: {
          validator: function (v) {
            return /\d{10}/.test(v); // Example validation for a 10-digit phone number
          },
          message: (props) => `${props.value} is not a valid phone number!`,
        },
      },
      email: {
        type: String,
        required: true,
        validate: {
          validator: function (v) {
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v); // Email regex validation
          },
          message: (props) => `${props.value} is not a valid email address!`,
        },
      },
    },
    profession: {
      type: String,
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Pg", pgSchema);

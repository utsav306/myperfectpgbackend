const express = require("express");
const router = express.Router();
const Pg = require("../models/pg"); // Assuming your schema is in models/pg.js

// Create a new PG
router.post("/create", async (req, res) => {
  try {
    const newPg = new Pg(req.body);
    const savedPg = await newPg.save();
    res.status(201).json({ success: true, data: savedPg });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Get all PGs
router.get("/fetchPgData", async (req, res) => {
  try {
    const pgs = await Pg.find().select(
      "name location rooms rates services pictures",
    );

    // Process the data to get the lowest price from rooms and format the facilities
    const result = pgs.map((pg) => {
      const lowestPrice =
        pg.rooms && pg.rooms.length > 0
          ? Math.min(...pg.rooms.map((room) => room.rates.monthly))
          : 0;

      const facilities = [
        pg.services.laundry && "Laundry",
        pg.services.parking && "Parking",
        pg.services.security && "Security",
      ].filter(Boolean);

      return {
        name: pg.name,
        location: pg.location,
        lowestPrice,
        facilities,
        pictures: pg.pictures,
      };
    });

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get a single PG by ID
router.get("/:id", async (req, res) => {
  try {
    const pg = await Pg.findById(req.params.id);
    if (!pg) {
      return res.status(404).json({ success: false, message: "PG not found" });
    }
    res.status(200).json({ success: true, data: pg });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update a PG by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedPg = await Pg.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedPg) {
      return res.status(404).json({ success: false, message: "PG not found" });
    }
    res.status(200).json({ success: true, data: updatedPg });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Delete a PG by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedPg = await Pg.findByIdAndDelete(req.params.id);
    if (!deletedPg) {
      return res.status(404).json({ success: false, message: "PG not found" });
    }
    res.status(200).json({ success: true, message: "PG deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;

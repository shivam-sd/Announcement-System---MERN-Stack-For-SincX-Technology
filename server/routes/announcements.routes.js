const express = require('express');
const Router = express.Router();
const {
  createAnnouncement,
  getAllAnnouncements,
  editAnnouncement,
  getSingleAnnouncement,
  deleteAnnouncement
} = require("../controllers/announcements.controller");

// Create a new announcement
Router.post("/announcements", createAnnouncement);

// Get all announcements
Router.get("/announcements", getAllAnnouncements);

// Get a single announcement
Router.get("/announcements/:id", getSingleAnnouncement);

// Edit an announcement
Router.put("/edit-announcements/:id", editAnnouncement);


// Delete an announcement
Router.delete("/announcements/:id", deleteAnnouncement );

module.exports = Router;

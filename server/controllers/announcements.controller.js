const Announcement = require("../models/announcement.model");


// Create a new announcement
const createAnnouncement = async (req, res) => {
    try{
        const { title, description, date} = req.body;
        if(!title || !description) {
            return res.status(400).json({ message: "Title and description are required" });
        }

        const newAnnouncement = await Announcement.create({
            title,
            description,
            date: date || Date.now()
        });

        res.status(201).json({
            message: "Announcement created successfully",
            newAnnouncement: newAnnouncement
        });

    }catch(error){
        console.log("Error creating announcement:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}




// Get all announcements

const getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.find().sort({date:-1});
        res.status(200).json(announcements);
    } catch (error) {
        console.log("Error fetching announcements:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


// Edit an announcement

const editAnnouncement = async (req, res) => {
    try{
        const {id} = req.params;
        const { title, description, date } = req.body;

        if(!title || !description) {
            return res.status(400).json({ message: "Title and description are required" });
        }

        const updatedAnnouncement = await Announcement.findByIdAndUpdate(id, {
            title,
            description,
            date
        }, { new: true });

        if (!updatedAnnouncement) {
            return res.status(404).json({ message: "Announcement not found" });
        }

        res.status(200).json({
            message: "Announcement updated successfully",
            updatedAnnouncement
        });
    }catch(error){
        console.log("Error editing announcement:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


const getSingleAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.findById(req.params.id);
    if (!announcement) {
      return res.status(404).json({ message: "Announcement not found" });
    }
    res.status(200).json(announcement);
  } catch (error) {
    console.error("Error fetching single announcement:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


// delete an announcement
const deleteAnnouncement = async (req, res) => {
    try{
const {id} = req.params;
const deletedAnnouncement = await Announcement.findByIdAndDelete(id);
if(!deletedAnnouncement){
    return res.status(404).json({ message: "Announcement not found" });
}
res.status(200).json({ message: "Announcement deleted successfully" });
    }catch(error){
        console.log("Error deleting announcement:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


module.exports = {
    createAnnouncement,
    getAllAnnouncements,
    editAnnouncement,
    getSingleAnnouncement,
    deleteAnnouncement
};

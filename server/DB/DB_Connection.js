const mongoose = require("mongoose");

const DBConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection error:", err.message);
        process.exit(1); // exit the app if DB doesn't connect
    }
};

module.exports = DBConnection;

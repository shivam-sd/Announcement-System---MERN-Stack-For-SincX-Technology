const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const DBConnection = require("./DB/DB_Connection");
const announcementRoutes = require("./routes/announcements.routes");

// Connect to the database
DBConnection()


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({
    origin: process.env.Frontend_URL || "http://localhost:5173",
    credentials: true,
}));


// Use the announcement routes
app.use("/api", announcementRoutes);


app.get("/", (req,res) => {
    res.send("Welcome to the SincX Technology Server");
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const mongoose = require('mongoose');

const URL = process.env.MONGO_CLOUD_URL;

module.exports.configDB = () => {
    // Establishing MongoConnection
    mongoose.connect(URL);
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "Connection Error: "));
    db.once("open", () => {
        console.log("DATABASE CONNECTED");
    })
};
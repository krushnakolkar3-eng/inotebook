const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/inotebook";
// Or, if using Atlas: "mongodb+srv://<user>:<password>@cluster.mongodb.net/inotebook"

const connectToMongo = () => {
  mongoose.connect(mongoURI)
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.log("MongoDB connection error:", err));
};

module.exports = connectToMongo;
const mongoose = require('mongoose');
const url = "mongodb+srv://Janmejay:janmejay11@cluster0.adil6.mongodb.net/Portfolio_db?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = async () => {
    try {
        await mongoose.connect(url);
        console.log("connection successfull");
        
    } catch (error) {
        console.error("Db connection failed", error);
        process.exit(0);
    }
}
module.exports = connectDb;
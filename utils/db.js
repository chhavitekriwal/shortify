const mongoose = require('mongoose');
const db = process.env.MONGO_URI;
const connectDB = async () => {
    try
    {
        await mongoose.connect(db, {useNewUrlParser: true});
        console.log("Connected to database");
    } catch(err){
        console.log(err);
    }
}

module.exports = connectDB;

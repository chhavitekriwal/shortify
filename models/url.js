const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    longUrl: String,
    urlCode: String,
},{timestamps:true});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
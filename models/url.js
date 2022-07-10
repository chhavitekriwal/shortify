const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    longUrl: String,
    urlCode: String,
    dateCreated: {type: String, default: Date.now}
})

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
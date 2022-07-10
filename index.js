const express = require('express');
require('dotenv').config();
const connectDB = require('./db');
const app = express();
const parser = require('body-parser');
const PORT = process.env.PORT || 3000;
connectDB();
app.use(parser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use("/", require("./routes/redirect"));
app.use("/api/url",require("./routes/url"));

app.get("/",(req,res)=>{
    res.sendFile('./index.html');
})


app.listen(PORT, () => 
console.log(`Server running on ${PORT}`));

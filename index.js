const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
require('dotenv').config();
const connectDB = require('./utils/db');
const parser = require('body-parser');
const supertokens = require('supertokens-node');
const {middleware, errorHandler} = require('supertokens-node/framework/express');
const {initSupertokens} = require('./utils/supertokens');

const redirectRoute = require('./routes/redirect');
const urlRoute = require('./routes/url');

app.use(parser.urlencoded({extended:true}));
app.use(express.static("public")); 

connectDB();
initSupertokens();

app.use(middleware());

app.use("/", redirectRoute);
app.use("/api/url",urlRoute);

app.use(errorHandler());



app.listen(port, () => 
console.log(`Server running on ${port}`));

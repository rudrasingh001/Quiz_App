// Importing dependencies
const Express = require("express");
const Joi = require("joi");
const Mongoose = require("mongoose");
require("dotenv/config");
const app = Express();
const cors = require('cors');

// Defining port
const port = 5000;

// Enabling cross origin requests
app.use(cors());

// Importing and using routes
const getRoutes = require("./routes/gets");
app.use("/",getRoutes);

const postRoutes = require("./routes/posts");
app.use("/post", postRoutes);

const deleteRoutes = require("./routes/deletes");
app.use("/delete", deleteRoutes);

// Connecting to database
Mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },()=>
{
    console.log("connected to DB!")
})

// Listening to server
app.listen(port,()=>{
    console.log("Listening on port: ",port);
});
require('dotenv').config();
const express = require ('express');
const routes = require('./routes/users'); // import the routes

const app = express();

app.use(express.json());

app.use('/', routes); //to use the routes

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})

 //import mongoose
 const mongoose = require('mongoose');

 //establish connection to database
 mongoose.connect(
    process.env.MONGODB_URI,
     { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},
     (err) => {
         if (err) return console.log("Error: ", err);
         console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
     }
 );
 


/*const express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
const router = require("./routes/users");

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", router);
//app.use("/users", router);


const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})

module.exports= app;*/

/*
module.exports = app;

const mongoose = require ('mongoose');

mongoose.Promise = global.Promise;
const DataNI = "my_new_dataBase";
const dbURL = 'mongodb+srv://ineslp:nathaninis2001@cluster0.jearugu.mongodb.net/${DataNI}?retryWrites=true&w=majority'
// Conecting to the database
console.log(dbURL)
mongoose.connect(dbURL);*/
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})


module.exports = app;

const mongoose = require ('mongoose');

mongoose.Promise = global.Promise;
const DataNI = "my_new_dataBase";
const dbURL = 'mongodb+srv://ineslp:nathaninis2001@cluster0.jearugu.mongodb.net/${DataNI}?retryWrites=true&w=majority'
// Conecting to the database
console.log(dbURL)
mongoose.connect(dbURL);
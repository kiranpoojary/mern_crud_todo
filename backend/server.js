require("./model/connection");
const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')
const adder = require('./route/add.route')
const app = express()

app.use(cors());
app.use(bodyParser.json())


//app.use(session({ secret: "ssshhhhh", resave: true, saveUninitialized: true }));
app.use("/todo", adder);

app.listen("4000", () => {
    console.log("Server Started at port 4000");
});
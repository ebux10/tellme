//This is the app
var express = require("express");
var hbs = require("handlebars");

var app = express();
app.set('view engine', 'hbs');
app.use(express.static('public'))

var port = process.env.PORT || 3000;

app.get("/" , (req , res)=>{
    res.render("home.hbs");
});

app.listen(port , ()=>{
    console.log(`The server is up and running on port : ${port}`);
});
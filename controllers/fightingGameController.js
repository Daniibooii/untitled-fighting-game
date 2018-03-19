// template below

var express = require("express");
var router = express.Router();
var burger = require("models\burger.js");

router.get ("/", function (req, res){
  burger.selectBurgers (function(burger_data) {
    console.log(burger_data);
    res.render ("index", {burger_data})

  })

})


Create the router for the app, and export the router at the end of your file.

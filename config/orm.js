// template below

// Import MySQL connection.
var connection = require("../config/connection.js");

// burger = table, callback = function //
selectAll()
var orm = {
selectAll: function(table, callback) {
  var s = "SELECT * FROM " + table + ";";
  connection.query(s, function(error, result){
    if (error) {
      throw error
    }
    callback (result)
  })
}

}



insertOne()
// insert into


updateOne()
// update everything



module.exports = orm;


// directions below //

ORM object
// data from two different systems //

// will be tricky; selecting from tables, then inserting it into MySQL db //

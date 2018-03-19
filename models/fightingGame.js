// template below 

// will create object here; properties of functions with all create and update //

var burger = {
  selectBurgers: function(callback) {
// creating burger obj that will be used within burgers_controllers.js
  orm.selectAll ("burgers", function (error, result){
    callback (result)
    //
  })
  }
  addBurger: function(name, callback) {



  }
  updateBurger: function(id, callback) {


  }


}




module.exports = burger;

// directions below //
import orm.js into burger.js

create the code that will call the ORM functions using burger specific input for the ORM.

Export at the end of the burger.js file.



 import orm.js into burger.js

 create the code that will call the ORM functions using burger specific input for the ORM.

 Export at the end of the burger.js file.

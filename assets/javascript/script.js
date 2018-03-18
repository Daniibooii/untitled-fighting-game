$("#bottom-btns").hide();
$("#check-currency-btn").hide();
$("#call-gif-btn").hide();

$(document).ready(function(){
  $(".carousel").carousel();
  $(".carousel").hide();
  showCarousel();
});

$("#crypto-btn").click(function(){
  $(".carousel").show();
});

$(".coin-btn").click(function(){
  $("#bottom-btns").show();
});

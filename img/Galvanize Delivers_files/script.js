$( document ).ready(function(){})

$(".button-collapse").sideNav();
// Initialize collapse button
$(".button-collapse").sideNav();
 // Initialize collapsible (uncomment the line below if you use the dropdown variation)
// $('.collapsible').collapsible();
$(document).ready(function(){
    $(".materialboxed").materialbox();
  });

  // Order Form
  var burgerQuanity = 0;
  var ribsQuanity = 0;
  var pizzaQuanity = 0;
  var iceCreamQuanity = 0;//used to hold onclick quanities

  // var burgerPrice = 0;
  // var ribsPrice = 11.99;
  // var pizzaPrice = 14.99;
  // var iceCreamPrice = 7.99; // var to multiply price by quanity

  var burgerTotal = 0;
  var ribsTotal = 0;
  var pizzaTotal = 0;
  var iceCreamTotal = 0;// holds sum of multipied totals to
  var subTotal = burgerTotal + ribsTotal + pizzaTotal + iceCreamTotal;// not working
  // ONCLICK to save to variable
  $( "#burger" ).click(function() {
    //add to quanity variable
    burgerQuanity += 1;
    // function to save that variable to quanity field/order.html
    $( "#burger_quanity" ).html(burgerQuanity);
  });
  //ribs
  $( "#ribs" ).click(function() {
    ribsQuanity += 1;
    $( "#ribs_quanity" ).html(ribsQuanity);
  });
  //pizza
  $( "#pizza" ).click(function() {
    pizzaQuanity += 1;
    $( "#pizza_quanity" ).html(pizzaQuanity);
  });
  //ice cream
  $( "#iceCream" ).click(function() {
    iceCreamQuanity += 1;
    $( "#iceCream_quanity" ).html(iceCreamQuanity);
  });

// saving onclick to add price to totals

  $( "#burger" ).click(function() {
      burgerTotal += 8.99;
    $( "#burger_total" ).html(burgerTotal.toFixed(2));
    // $( "burger_total" ).html(burgerQuanity*burgerPrice);
  });
  $( "#ribs" ).click(function() {
      ribsTotal += 11.99;
    $( "#ribs_total" ).html(ribsTotal.toFixed(2));
  });
  $( "#pizza" ).click(function() {
      pizzaTotal += 14.99;
      $( "#pizza_total" ).html(pizzaTotal.toFixed(2));
  });
  $( "#iceCream" ).click(function() {
      iceCreamTotal += 7.99;
      $( "#iceCream_total" ).html(iceCreamTotal.toFixed(2));
  });


// SUBTOTAL not working!
  $( '#iceCream #ribs #pizza #burger' ).click(function() {
    $( "#subtotal" ).html(burgerTotal + ribsTotal + pizzaTotal + iceCreamTotal);
  })

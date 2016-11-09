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

  var burgerTotal = 0;
  var ribsTotal = 0;
  var pizzaTotal = 0;
  var iceCreamTotal = 0;// holds sum of individual totals to

  var subTotal = 0;// holds sum of all totals
  var taxTotal = 0;// holds sum of taxed total
  var grandTotal = 0; //final hoo-haa total

  // ONCLICK to save to variable
  $( "#burger" ).click(function() {
    //add to quanity variable
    burgerQuanity += 1;
    // function to save that variable to quanity field/order.html
    $( "#burger_quanity" ).html(burgerQuanity);
    return false;
  });
  //ribs
  $( "#ribs" ).click(function() {
    ribsQuanity += 1;
    $( "#ribs_quanity" ).html(ribsQuanity);
    return false;
  });
  //pizza
  $( "#pizza" ).click(function() {
    pizzaQuanity += 1;
    $( "#pizza_quanity" ).html(pizzaQuanity);
    return false;
  });
  //ice cream
  $( "#iceCream" ).click(function() {
    iceCreamQuanity += 1;
    $( "#iceCream_quanity" ).html(iceCreamQuanity);
    return false;
  });

// ONCLICK to add price to individual totals

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

// ONCLICK to add individual totals to subTotal

  $(".submit").click(function() {
    subTotal = burgerTotal + ribsTotal + pizzaTotal + iceCreamTotal;
    $("#subtotal").html(subTotal.toFixed(2));
  });

// ONCLICK to multiply subTotal to tax rate

  $(".submit").click(function() {
    taxTotal = subTotal * .0825;
    $(".tax").html(taxTotal.toFixed(2));
  });

// ONCLICK to add subtotal to taxTotal

  $(".submit").click(function() {
    grandTotal = subTotal + taxTotal;
    $(".grandwoohaatotal").html(grandTotal.toFixed(2));
  });

//  Materialize.toast('Please submit your name!', 4000, )
//Auto updater to link id's to receipt page.
$(document).ready(function() {
    Materialize.updateTextFields();
  });
  $('.download-button').click(function(){
    Materialize.toast('!', 4000);
    return false;
  });

var tempName = '';
  $('.icon_prefix').html(tempName);
  // $("form['.validate']").each(function(){
  //   $(this).validate();
  // });


//   $.validator.setDefaults({
//     onkeyup:false,
//     errorClass: 'invalid',
//     validClass: 'valid',
//     submitHandler: function(form){
//
//   $(form).find(".download-button").prop('disabled', true);
// },
// errorPlacement:
// function(error, element){
//   error.insertAfter($(element).siblings('validate'));
// }
// });

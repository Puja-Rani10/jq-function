$( function() {
$( "#hider" ).click(function() {
  $( "span:last-child" ).hide( "fast", function() {
    // Use arguments.callee so we don't need a named function
    $( this ).prev().hide( "fast", arguments.callee );
  });
});
$( "#shower" ).click(function() {
  $( "span" ).show( 2000 );
   });
   
    $("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });

    $("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });

   $("#up").click(function(){
    $("#p1").css("color", "red")
      .slideUp(2000)
      .slideDown(2000);
  });

    $("#ani").click(function(){
    $("div").animate({left: '250px'});
  });
      

     

 } );



 

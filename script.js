
$( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );
  $( "button" ).on( "click", function() {
    $( "#accordion" ).toggle();
  } );
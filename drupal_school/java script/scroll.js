$(document).ready(function(){
  $( 'a[href^=#services_]' ).click( function () {
  	var id = $( this ).attr( 'href' ).match( /#.+$/ )[0].substr(1);
	var offsetTop = $("a[name='"+ id + "']").offset().top;
	$('body,html').animate({scrollTop:offsetTop}, 800);
    return false;
  });
});

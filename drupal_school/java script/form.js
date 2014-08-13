$(function() {
  //show contact form event jquery 
  var contactToggle = false;
  	$('#buton').click(function() {
		if(!contactToggle){
		$('.send').first().addClass('show');
		$('.send1').first().removeClass('show');
		contactToggle = true;
		} else {
		$('.send').first().removeClass('show');
		contactToggle = false;}
	});
	
	$('#cancel').click(function() {
	console.log('aaa')
		$('.send').first().removeClass('show')
		contactToggle = false;		
	});
  
  	$('#send').click(function() {		
		$('.send1').first().addClass('show');
		$('.send').first().removeClass('show');
			contactToggle = false;	})
  
  
  
});

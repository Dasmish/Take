jQuery(document).ready(function($) {
	console.log('ready');
	$(window).bind("resize", checkPosition);

	function checkPosition()
	{
	    if($(window).width() < 1480)
	    {
	       $('.iphone').css('display', 'none');
	    }
	    else{
	    	$('.iphone').css('display', 'inline-block');
	    }

	    if ($(window).width() < 770) {
	    	$('.block').css('width', '100%');;
	    };
	}
});
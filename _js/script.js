/***********************************************************************************************************************
DEVELOPED BY: WYNNE CHAN
************************************************************************************************************************/
$(document).ready(function() {
 	
	// MENU FILTERING
  $('#mNav li a').click(function() {
     
 		//remove the class from all lists - reset
		$('#mNav li').removeClass('selected');
		
		//now add the class to the selected list
		$(this).parent('li').addClass('selected');
		
		//assign alt tag to this variable
		thisCategory 	= $(this).attr('alt');
		
		// if all is not selected...
		if(thisCategory != "all") {
			
			//show list with this class
			$('#mList li[class='+thisCategory+']').show('fast');
			
			//hide list with this class
			$('#mList li[class!='+thisCategory+']').hide('slow');
				
		} else {
			
			//show all lists		
			$('#mList li').show("fast");
		}
      
  });

	//GET FLICKR STREAM via GALLERIA
  		
	Galleria.loadTheme('_js/src/themes/classic/galleria.classic.js');
		
	var api_key = '6ca1c0d0bc4d221c134d43a82a4eec97' // you must have a flickr API key
  var flickr = new Galleria.Flickr(api_key); // initialize the plugin 

 	flickr.setOptions({
      max: 60,
      size: 'medium',
      //sort: 'date-posted-desc'
  });
	
	$('#nav li.gallery a').click(function () {
		flickr.getUser('ohwynne', function(data){
	      $('#galleria').galleria({
	          data_source: data
	      });
				$.each(data.items, function(i,item){
				    $("<img/>").attr("src", item.media.m).appendTo("#images")
				      .wrap("<a href='" + item.link + "'></a>");
				  });
		
	  });
 	});

});


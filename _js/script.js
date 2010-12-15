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
		
	var api_key = '02f19a8065f225e71146f550fe920652' // you must have a flickr API key
  var flickr = new Galleria.Flickr(api_key); // initialize the plugin 

			flickr.getUser('eatdrinkshi', function(data){
					$('#slideshow').galleria({
		          data_source: data,
							autoplay: 3000,
							transition: 'fade',
							image_crop: true,
							thumbnails: false,
							carousel: false,
							show_info: false

		      });
					
		      $('#galleria').galleria({
		          data_source: data,
							autoplay: 3000,
							transition: 'fade',
							image_crop: true

		      });
			});
			flickr.setOptions({
				max: 40,										// Sets the amount of images that will be fetched (max 100)
        size: 'big',							// Size of the flickr images to be fetched, options are: 'small', 'medium','big' and 'original'
        //sort: 'date-posted-desc',		// How to sort images, options are: 'date-posted-asc', 'date-posted-desc', 'date-taken-asc', 'date-taken-desc', 'interestingness-desc', 'interestingness-asc', and 'relevance'
				description: true						// true or false
			})

});


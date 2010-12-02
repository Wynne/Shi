/***********************************************************************************************************************
DEVELOPED BY: WYNNE CHAN
COMPANY: Zipline Interactive
EMAIL: ryan@gozipline.com
DATE: 3/26/2009
************************************************************************************************************************/
$(document).ready(function() {
  
  
  //DEFINE NEW FUNCTION TO CLICK AND REPLACE CONTENT
  jQuery.fn.getPage = function() {
    
    //SET ATTRIBUTE INDEXNUMBER
    var args = arguments[0] || {};
    var i = args.indexNumber;
		var p = this.className
      
      //CLICK TO REPLACE THIS PANEL WITH NEXT
      $('#nav > a').click(function () {
        alert('hi');
         // APPEND INDEXNUMBER TO FILE NAME AND GET HTML
         //$.get('php/'+p+'.php', function(html) {
           
           // REPLACE SLIDE CONTENT WITH HTML
           $('#content').html(html);
					$('html, body').animate({scrollTop: '0'}, 0);
           
           // INCREASE INDEXNUMBER BY 1
           i++;
           //$(this).getGrid();
           
           // REPEAT THIS FUNCTION ON NEW SLIDE
           //$('#slide').nextSlide({indexNumber: i});
           
         });
       });
  };
  
	// GET SLIDE ASSOCIATED WITH CLICKED THUMBNAIL
	jQuery.fn.makeThumbs = function () {
	  
  	$('#grid > li').click(function () {
	  
  	  // GET INDEXNUMBER
  		var i = $(this).index()
		
  		// GET SLIDE.PHP
  		$.get('_php/slide.php', function(html) {
		  
  		    // REPLACE THIS GRID WITH HTML
  		    $('#grid').replaceWith(html);
		    
  	    	// APPEND INDEXNUMBER TO FILE NAME AND GET HTML
      		$.get('_php/'+i+'work.php', function(html) {
		  
      		  // INSERT HTML INTO #SLIDE
      			$('#slide').html(html);
      			$(html).fadeIn('slow'); // doesn't seem to work
    						
      			// INCREASE INDEXNUMBER BY 1
      			i++;
			      $(this).getGrid();   
      			// SET CLICK FUNCTION FOR NEW SLIDE
      			$('#slide').nextSlide({indexNumber: i});
      	
      		});
    	  });
   	  });
	};
	$(this).makeThumbs();	

});
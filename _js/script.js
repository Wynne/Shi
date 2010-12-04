/***********************************************************************************************************************
DEVELOPED BY: WYNNE CHAN
************************************************************************************************************************/
$(document).ready(function() {
 
    $('#foodnav > li').click(function() {
      
      var p = this.title
			
			if (! $('#menu > div').hasClass(p) ) {
					$('#menu > div').hide();
			} 
      //$('.catbox').filter('.'+p).hide();
			//alert('.'+p);
      
      
      
      //$('.catbox[class!=p]').is(':hidden');
      
    });

  
 
});

// if class does not match title then hide.
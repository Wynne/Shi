$(document).ready(function(){
    
    (function getFlickr() {

        $.getJSON("http://api.flickr.com/services/feeds/groups_pool.gne?id=1132864@N25&lang=en-us&format=json&jsoncallback=?", function(data){

            var element = "flickrPics", txt = "", mImage = "_m.jpg", sImage = "_s.jpg", maxItems = 20, items = [], itemsDone = 0;
            try { items = data.items; } catch (err) {}
            
            $.each(items, function(index, i) {
                i.media = i.media.m.replace(mImage, sImage);
                txt += '<a href="' + i.link + '"><img src ="' + i.media + '" alt="' + i.title + '" /></a>';
                itemsDone += 1;
                if (itemsDone >= maxItems) { return false; }
            });
            
            $("#" + element).append(txt);

            $("#" + element).cycle({
                timeout: 3000,
                speed: 500
            });
        
        });

    })();
    
    // Replace text in input elements
    (function replaceInputText() {
	
        var iText;
	
        $("input[type='text']").focus(function () {
            iText = $(this).attr("value");
            $(this).attr("value", "");
        });
	$("input[type='text']").blur(function () {
            if ($(this).attr("value") === "") {
            $(this).attr("value", iText);
        }
        });		
				
    })();
    
    // Swap Images
    (function swapImages() {
    
        $.swapImage(".swapImageClick", true, true, "click"); 
    
    })();

});
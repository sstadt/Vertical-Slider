(function($){

	$.fn.vslider = function(){
		
		return this.each(function(){
		
			var that = $(this),
				tempNext = '#' + that.attr('id') + '-next',
				tempPrev = '#' + that.attr('id') + '-prev',
				tempContent = '#' + that.attr('id') + '-content',
				next = $(tempNext),
				prev = $(tempPrev),
				content = $(tempContent),
				count = 0
			;
			
			that.children().each(function(){count++;});
			var half = Math.floor(count/2);
			
			// crop off the second half, one by one, and stick them at the beginning
			for (var i=0; i<half; i++) {
				tempItem = that.children(':last').detach();
				that.prepend(tempItem);
			}
			
			console.log(that.children().eq(half));
			
			// then, move the top to the original first's position
			that.css({"position":"relative"});
			that.children().css({
				"position":"absolute",
				"top": -=(content.children().eq(half).position().top)
			});
			
			console.log('count: ' + count);
			console.log('half: ' + half);
			
			// -= animate the slider
			next.click(function(){
				var lastPos = that.children(':last').css("top");
			
				// push the slider down
				that.children().animate({"top":+=(that.children().height())}, 600);
				
				// move the first slider element to where the last one was
				that.children(':first').css({"top":lsstPos});
				
				return false;
			});
			
			// += animate the slider
			prev.click(function(){
				// push the slider up
				
				// move the last slider element to where the first one was
				
				return false;
			});
			
			//$(".contentbox-wrapper").animate({"left": -($(id).position().left)}, 600);
			
			console.log(that);
			console.log(next);
			console.log(prev);
			
		});
		
	};
	
})(jQuery);
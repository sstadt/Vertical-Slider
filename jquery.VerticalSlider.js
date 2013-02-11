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
			
			content.children().each(function(){count++;});
			var half = Math.floor(count/2);
			
			// crop off the last one, then put it at the beginning
			var tempItem = content.children(':last').detach().prependTo(content);
			
			// then, move the top to the original first's position
			that.css({ "position": "relative" });
			content.css({
				"position": "absolute",
				"top": "-=" + (content.children().height())
			});
			
			next.click(function(){
			
				// animate the top element shrinking, pull it off the top, and stick at the end
				content.children(':first').hide(600, function(){
					$(this).appendTo(content).show(0);
				});
				
				return false;
			});
			
			prev.click(function(){
				
				return false;
			});
			
			//$(".contentbox-wrapper").animate({"left": -($(id).position().left)}, 600);
			
			console.log(that);
			console.log(next);
			console.log(prev);
			
		});
		
	};
	
})(jQuery);
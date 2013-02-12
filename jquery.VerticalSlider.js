(function($){

	$.fn.vslider = function(){
		
		return this.each(function(){
		
			var that = $(this),
				next = $('#' + that.attr('id') + '-next'),
				prev = $('#' + that.attr('id') + '-prev'),
				content = $('#' + that.attr('id') + '-content')
			;
			
			// crop off the last item, then put it at the beginning
			content.children(':last').detach().prependTo(content);
			
			// move the top to the original first item's position
			that.css({ "position": "relative" });
			content.css({
				"position": "absolute",
				"margin-top": "-=" + (content.children().height())
			});
			
			next.click(function(){
			
				// animate the top element shrinking, pull it off the top, and stick at the end
				content.children(':first').hide(600, function(){
					$(this).detach().appendTo(content).show(0);
				});
				
				return false;
			});
			
			prev.click(function(){
			
				// hide, then remove the bottom element, then stick it at the top and show
				content.children(':last').hide(0,function(){
					$(this).detach().prependTo(content).show(600);
				});	
				
				return false;
			});
			
		});
		
	};
	
})(jQuery);
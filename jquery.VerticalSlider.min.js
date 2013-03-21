(function($){

	$.fn.vslider = function(options){
	
		options = $.extend({
			duration: 600,
			auto: 0,
			easing: 'swing',
			view: 1
		}, options);
		
		return this.each(function(){
		
			var that = $(this),
				next = $('#' + that.attr('id') + '-next'),
				prev = $('#' + that.attr('id') + '-prev'),
				content = $('#' + that.attr('id') + '-content'),
				active = true,
				vsToggle = function(){
					active = !active;
				},
				scrollNext = function(){
			
					if (active) {
				
						vsToggle();
			
						// animate the top element shrinking, pull it off the top, and stick at the end
						content.children(':first').hide({
							duration: options.duration, 
							easing: options.easing,
							complete: function(){
								$(this).detach().appendTo(content).show(0,vsToggle);
							}
						});
				
					}
				
				},
				scrollPrev = function(){
			
					if (active) {
				
						vsToggle();
			
						// hide, then remove the bottom element, then stick it at the top and show
						content.children(':last').hide(0,function(){
							$(this).detach().prependTo(content).slideDown({
								duration: options.duration,
								easing: options.easing,
								complete: vsToggle
							});
						});
				
					}
				
				}
			;
			
			// set up the viewport css
			that.css({
				'overflow':'hidden',
				'height':content.children().height() * options.view
			});
			
			// crop off the last item, then put it at the beginning
			content.children(':last').detach().prependTo(content);
			
			// move the top to the original first item's position
			that.css({ "position": "relative" });
			content.css({
				"position": "absolute",
				"margin-top": "-=" + (content.children().height())
			});
			
			// set up auto scroll
			if (options.auto > 0) {
				window.setInterval(scrollNext, options.auto);
			}
			
			// set up the next button
			next.click(function(){
				scrollNext();
				
				return false;
			});
			
			// set up the previous button
			prev.click(function(){
				scrollPrev();
				
				return false;
			});
			
		});
		
	};
	
})(jQuery);
(function($){

	$.fn.vslider = function(){
		
		return this.each(function(){
		
			var that = $(this),
				tempNext = '#' + that.attr('id') + '-next',
				tempPrev = '#' + that.attr('id') + '-prev',
				next = $(tempNext),
				prev = $(tempPrev)
			;
			
			console.log(that);
			console.log(next);
			console.log(prev);
			
		});
		
	};
	
})(jQuery);
Vertical-Slider
===============

	[ ] Update the individual items in index.html to use different images and titles
	[ ] Allow the plugin to take an argument to control the speed of the animations
	[ ] Allow the plugin to take a padding argument, to compensate for additional slider item height not counted by the height() method

In order to correctly find all the parts of your vertical slider,
the plugin needs to know how to find a few things: the slider window,
the next button, the previous button, and the slider content.

To label these things properly, pick an id for your slider, and then
append -next, -prev, and -content to derive the proper id for each
component. For instance, with a slide id of 'rolodex', you would derive
the following ids for each component of the slider:

rolodex-next
rolodex-prev
rolodex-content

While this allows you a bit of freedom in placing the next and previous
wherever you like on the page, the content section must be nested in the
div with the base slider id like so:

	<a href="#" id="rolodex-prev">Previous</a>
	<div id="rolodex">
		<div id="rolodex-content">
		</div>
	</div>
	<a href="#" id="rolodex-next">Next</a>

Next, you can fill your slider content box with content. Content can be anything, but 
each dom element inside the content div (slider item) must have a height set in CSS, and 
each slider item must have the same height (note: while padding within each item is 
counted in the height, margins are not. Using margins within the item styling may result 
in inaccurate scrolling.):

	<style>
		.item { height: 100px; }
	</style>
	<a href="#" id="rolodex-prev">Previous</a>
	<div id="rolodex">
		<div id="rolodex-content">
			<div class="item">
				<p>Some Content.</p>
			</div>
			<div class="item">
				<p>Some More Content.</p>
			</div>
			<div class="item">
				<p>Even More Content.</p>
			</div>
			<div class="item">
				<p>Yet Still More Content.</p>
			</div>
		</div>
	</div>
	<a href="#" id="rolodex-next">Next</a>```

Once your HTML and item heights are set, simply use the VerticalSlider function
on the base slider DOM element:

	$('#rolodex').vslider();

The plugin will then search for your buttons and content box using the
provided base id string as a starting point.




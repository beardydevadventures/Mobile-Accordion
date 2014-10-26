Why use mobile accordion?

There are a lot of accordion plugins out in the big wide web. But one requirement I had during my career was to make an accordion that could handle a lot of content and be mobile friendly. 

This is where the mobile accordion comes in, most accordions out there only open up the new content and close the opened tab (or not close the opened tab at all) this slider not only does those processes but also scrolls to the top of the activated tab.

How to use:


Make sure you have included the latest jQuery and mobile-accordion.js on your page:

<script src="http://code.jquery.com/jquery-latest.js" type="text/javascript"></script>

<script src="js/mobile-accordion.js" type="text/javascript"></script>


Include the demo css in your header if you wish:

<link rel="stylesheet" href="css/mobile-accordion.css" type="text/css" media="screen">


To use mobile accordion put this code on the page:

<div id="accordion-container"> 
     <h2 class="accordion-header">Section 1</h2> 
     <div class="accordion-content"> 
          <p>Section 1 Content</p> 
     </div> 
     <h2 class="accordion-header">Section 2</h2> 
     <div class="accordion-content"> 
          <p>Section 2 Content</p> 
     </div> 
</div>
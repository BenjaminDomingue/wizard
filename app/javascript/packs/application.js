import "bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css'; // <-- you need to uncomment the stylesheet_pack_tag in the layout!

import { initMapbox } from '../plugins/init_mapbox';

initMapbox();

// toggle button
$(document).ready(function(){
  $(".category-choice").click(function(){
    $(this).toggleClass("active");
    if ( $(".category-choice").is(".active")) {
      $('#districts-card').slideDown( "slow" );
  } else {
      $('#districts-card').slideUp( "slow" );
    }
    setTimeout(() => {
      $("#submit-criteria").click();
    }, 100)
  });
});

//Button to top
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

import "bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css'; // <-- you need to uncomment the stylesheet_pack_tag in the layout!

import { initMapbox } from '../plugins/init_mapbox';

initMapbox();

// toggle button
$(document).ready(function(){
  $(".category-choice").click(function(){
    $(this).toggleClass("active");
    setTimeout(() => {
      $("#submit-criteria").click();
    }, 100)
  });
});

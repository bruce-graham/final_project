$(document).ready(function(){

var current_h = null;
var current_w = null;

$('#sunset-images').hover(
    function(){
        current_h = $(this, 'img')[0].height;
        current_w = $(this, 'img')[0].width;
        $(this).animate({width: (current_w * 3), height: (current_h * 3)}, 300);
    },
    function(){
        $(this).animate({width: current_w + 'px', height: current_h + 'px'}, 300);
    }
);

(function() {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "sunset",
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#sunset-images" );
        if ( i === 99 ) {
          return false;
        }
      });
    });
})();

(function() {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "nature",
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#nature-images" );
        if ( i === 99 ) {
          return false;
        }
      });
    });
})();


(function() {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "ocean",
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#ocean-images" );
        if ( i === 99 ) {
          return false;
        }
      });
    });
})();



});

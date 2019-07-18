/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

console.log("JavaScript is amazing!");

$(function() {
  $('.js-nav a, .js-connect').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});

$( function() {
  var $grid = $('.grid').isotope({
    itemSelector: 'article'
  });

  // filter buttons
  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
});

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  return function debounced() {
    if ( timeout ) {
      clearTimeout( timeout );
    }
    function delayed() {
      fn();
      timeout = null;
    }
    timeout = setTimeout( delayed, threshold || 100 );
  }
}

$(window).bind("load", function() {
  $('#all').click();
});

var lastScrollTop = 0;
var backgroundImages = $('.backgroundImage'); 

$(window).scroll(function(e){
  var st = $(this).scrollTop();
  var ah = $(this).height();
  backgroundImages.each(function(i){
    var img = $(this);
    var pos = img.position().top;
    var hei = img.height();
    if ((st + ah) > pos && st < (pos + hei)){
      var p = ((pos - st)/ah) + 0.25;
      if(i == 1) console.log(p);
      img.css('background-position', '50%'+(p*100)+'%');
    }
  });
  lastScrollTop = st;
});

$(window).scroll();


var fruit = ["apple", "orange", "pear"];
$(".foo").text(fruit.length);

var modal = document.getElementById("myModal");
var span = $(".close");

// span.onclick = function() {
//   modal.style.display = "none";
// };

span.on("click", function() {
    modal.style.display = "none";
});

// Get all images and insert the clicked image inside the modal
// Get the content of the image description and insert it inside the modal image caption
var images = document.getElementsByTagName("img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) { // looping through all image tag names in document. on click of image, run function of displaying modal with source URL, alt text, and caption
  images[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.nextElementSibling.innerHTML;
  };
}

//opacity of image on hover is changing in modal
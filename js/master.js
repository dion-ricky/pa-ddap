$(window).on('scroll', function(e) {
  activateMenu();
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      console.log(hash);

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 200
      }, 500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });
    } // End if
  });
});

function activateMenu() {
  var list = document.getElementsByTagName('h2');
  var listMenu = document.getElementsByTagName('a');
  Array.prototype.forEach.call(list, function(el){
    if (isScrolledIntoView(el)) {
      Array.prototype.forEach.call(listMenu, function(menu) {
        if (menu.getAttribute("href") == "#"+el.id) {
          menu.classList.add('active');
        }
      });
    } else {
      Array.prototype.forEach.call(listMenu, function(menu) {
        if (menu.getAttribute("href") == "#"+el.id) {
          menu.classList.remove('active');
        }
      });
    }
  });
}

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop() + 75;
    var docViewBottom = docViewTop + $(window).height() - 75;

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})

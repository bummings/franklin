var redButton = document.querySelector('.redButton');
var nav = document.querySelector('.nav');

redButton.addEventListener('click', function(){
  nav.classList.toggle('red');
});


$(document).ready(function () {
  var $obj = $('.nav');
  var top = $obj.offset().top - parseFloat($obj.css('marginTop').replace(/auto/, 0));

  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();

    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $obj.removeClass('nav__item');
      $obj.addClass('fixed');
    } else {
      // otherwise remove it
      $obj.removeClass('fixed');
    }
  });
});

